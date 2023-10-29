import { Drawer } from 'antd';
import CartHeading from './CartHeading';
import CartContentHeading from './CartContentHeading';
import CartContent from './CartContent';
import CartTotals from './CartTotals';
import { Link } from 'react-router-dom';

function CartDrawer({ openCart, onCartClose, cartItems, setCartItems }) {
  const itemsInCart = cartItems.reduce(
    (acc, item) => (acc = acc + item.quantity),
    0
  );
  const subTotal = cartItems.reduce(
    (total, curItem) =>
      (total +=
        parseFloat(curItem.item.price.replace(/,/g, '')) *
        parseInt(curItem.quantity)),
    0
  );
  const deliveryFees = 0;

  function increaseQuantity(id) {
    setCartItems(cartItems =>
      cartItems.map(itemToChange =>
        itemToChange.item.id === id
          ? { ...itemToChange, quantity: itemToChange.quantity + 1 }
          : itemToChange
      )
    );
  }

  function decreaseQuantity(id) {
    const itemToChange = cartItems.find(curItem => curItem.item.id === id);
    if (itemToChange.quantity === 1) {
      setCartItems(cartItems =>
        cartItems.filter(curItem => curItem.item.id !== id)
      );
    } else {
      setCartItems(cartItems =>
        cartItems.map(itemToChange =>
          itemToChange.item.id === id
            ? { ...itemToChange, quantity: itemToChange.quantity - 1 }
            : itemToChange
        )
      );
    }
  }

  function handleRemoveItem(id) {
    setCartItems(cartItems =>
      cartItems.filter(curItem => curItem.item.id !== id)
    );
  }

  return (
    <>
      <Drawer
        // title="Basic Drawer"
        placement="right"
        closable={false}
        onClose={onCartClose}
        open={openCart}
        key="right"
        width={window.innerWidth > 746 ? '40%' : window.innerWidth}
      >
        <CartHeading itemsInCart={itemsInCart} onCartClose={onCartClose} />
        <CartContentHeading />
        <CartContent
          cartItems={cartItems}
          onIncreaseQuantity={increaseQuantity}
          onDecreaseQuantity={decreaseQuantity}
          onRemoveCartItem={handleRemoveItem}
        />
        <CartTotals subTotal={subTotal} deliveryFees={deliveryFees} />
        <CheckOutButton onCartClose={onCartClose} />
      </Drawer>
    </>
  );
}

function CheckOutButton({ onCartClose }) {
  return (
    <div className="btn-check-out-box" onClick={onCartClose}>
      <Link to="/checkout" className="btn-check-out">
        Check Out
      </Link>
    </div>
  );
}

export default CartDrawer;
