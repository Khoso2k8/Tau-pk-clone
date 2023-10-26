import { useEffect, useState } from 'react';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import initialItems from '../Data/items.json';
import ProductDrawer from './ProductDrawer';
import CartDrawer from './CartDrawer';

function App() {
  const [items, setItems] = useState(initialItems);
  const [open, setOpen] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState({});
  const [cartItems, setCartItems] = useState([]);
  const [quantity, setQuantity] = useState(0);
  const [selectedDrinks, setSelectedDrinks] = useState({});

  const itemsInCart = cartItems.reduce(
    (acc, item) => (acc += item.quantity),
    0
  );

  const subTotal = cartItems
    .reduce(
      (total, curItem) =>
        (total +=
          parseFloat(curItem.item.price.replace(/,/g, '')) *
          parseInt(curItem.quantity)),
      0
    )
    .toLocaleString('en-us');

  function showDrawer() {
    setOpen(open => !open);
  }
  function onClose() {
    setOpen(false);
    setQuantity(0);
    setSelectedDrinks({});
  }

  function handleSelectedProduct(item) {
    setSelectedProduct(item);
  }

  function handleCartOpen() {
    setOpenCart(openCart => !openCart);
  }
  function handleCartClose() {
    setOpenCart(false);
  }

  function handleCartItems(item) {
    if (selectedProduct.numOfDrinks === 1 && !selectedDrinks.drink1) return;
    if (
      selectedProduct.numOfDrinks === 2 &&
      !selectedDrinks.drink2 &&
      !selectedDrinks.drink1
    )
      return;
    const itemsInCart = cartItems.find(curItem => curItem.item.id === item.id);
    if (itemsInCart) {
      setCartItems(cartItems =>
        cartItems.map(curItem =>
          curItem.item.id === item.id
            ? {
                ...curItem,
                quantity: quantity
                  ? curItem.quantity + quantity + 1
                  : curItem.quantity + 1,
                selectedDrinks: Object.values(selectedDrinks),
              }
            : curItem
        )
      );
    }
    if (!itemsInCart) {
      setCartItems(cartItems => [
        ...cartItems,
        {
          item,
          quantity: quantity
            ? item.quantity
              ? item.quantity + quantity + 1
              : quantity + 1
            : 1,
          selectedDrinks: Object.values(selectedDrinks),
        },
      ]);
    }
    setQuantity(0);
    setOpen(false);
    setSelectedDrinks({});
  }

  useEffect(function () {
    const observer = new IntersectionObserver(
      function (enteries) {
        const ent = enteries[0];
        if (ent.isIntersecting > 0) {
          document.body.classList.remove('sticky-sub-menu');
        } else {
          document.body.classList.add('sticky-sub-menu');
        }
      },
      {
        root: null,
        threshold: 0,
        rootMargin: '-85px',
      }
    );

    observer.observe(document.querySelector('.hero'));
  }, []);

  return (
    <div>
      <Header
        onCartOpen={handleCartOpen}
        itemsInCart={itemsInCart}
        subTotal={subTotal}
        cartItems={cartItems}
      />
      <Main
        items={items}
        onShowDrawer={showDrawer}
        onClose={onClose}
        onSelectedProduct={handleSelectedProduct}
      />

      <ProductDrawer
        open={open}
        onClose={onClose}
        selectedProduct={selectedProduct}
        onAddCartItem={handleCartItems}
        setQuantity={setQuantity}
        quantity={quantity}
        setSelectedDrinks={setSelectedDrinks}
      />

      <CartDrawer
        openCart={openCart}
        onCartClose={handleCartClose}
        cartItems={cartItems}
        setCartItems={setCartItems}
      />
      <Footer />
    </div>
  );
}

export default App;
