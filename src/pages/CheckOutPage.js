import { ShoppingOutlined, ShopOutlined } from '@ant-design/icons';
import styles from './CheckOutPage.module.css';
import { Collapse } from 'antd';
import CartContent from '../components/CartContent';
import Header from '../components/Header';
import CartDrawer from '../components/CartDrawer';

function CheckOutPage({ cartItems, setCartItems, openCart, setOpenCart }) {
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

  function handleCartOpen() {
    setOpenCart(openCart => !openCart);
  }

  function handleCartClose() {
    setOpenCart(false);
  }

  const subTotal = cartItems.reduce(
    (total, curItem) =>
      (total +=
        parseFloat(curItem.item.price.replace(/,/g, '')) *
        parseInt(curItem.quantity)),
    0
  );

  const itemsInCart = cartItems.reduce(
    (acc, item) => (acc += item.quantity),
    0
  );

  const items = [
    {
      key: '1',
      label: (
        <>
          <span>
            <ShoppingOutlined />
          </span>
          <span style={{ marginLeft: '1rem', color: '#495057' }}>
            My Cart ({cartItems.length}) items
          </span>
        </>
      ),
      children: (
        <CartContent
          cartItems={cartItems}
          onIncreaseQuantity={increaseQuantity}
          onDecreaseQuantity={decreaseQuantity}
          onRemoveCartItem={handleRemoveItem}
        />
      ),
    },
  ];

  const items2 = [
    {
      key: '1',
      label: (
        <>
          <span>
            <i className="fa-solid fa-file-invoice"></i>
          </span>
          <span style={{ marginLeft: '1rem', color: '#495057' }}>
            Total Rs. {(+subTotal).toLocaleString('en-us')}
          </span>
        </>
      ),
      children: (
        <>
          <span>Price Summary</span>
          <div className={styles.summary}>
            <p>Sub Total</p>
            <p>{(+subTotal).toLocaleString('en-us')}</p>
          </div>
          <div className={styles.summary}>
            <p>Tip</p>
            <p>0</p>
          </div>
          <div className={styles.summary}>
            <p>Delivery Fees</p>
            <p>0</p>
          </div>
          <div className={styles.summary}>
            <p>Total</p>
            <p>{(+subTotal).toLocaleString('en-us')}</p>
          </div>
        </>
      ),
    },
  ];

  return (
    <>
      <Header
        cartItems={cartItems}
        onCartOpen={handleCartOpen}
        subTotal={(+subTotal).toLocaleString('en-us')}
        itemsInCart={itemsInCart}
      />
      <div className={styles.container}>
        <div className={styles.contactInfo}>
          <div className={styles.heading}>
            <span>
              <i className="fa-solid fa-phone-volume icon"></i>
            </span>
            <h3>Contact Info</h3>
          </div>
          <div className={styles.content}>
            <select>
              <option>+92</option>
            </select>
            <input type="text" placeholder="* Mobile Number"></input>
          </div>
          <div className={styles.heading}>
            <span>
              <i className="fa-solid fa-location-dot"></i>
            </span>
            <h3>Customer Information</h3>
          </div>
          <div className={styles.content}>
            <input type="text" placeholder="* Full Name"></input>
            <input type="text" placeholder="* Email"></input>
          </div>
          <div className={styles.heading}>
            <h4>Delivery Address</h4>
          </div>
          <div className={styles.content}>
            <input
              type="text"
              placeholder="Complete Delivery Address *"
            ></input>
          </div>
          <div className={styles.heading}>
            <h4>City</h4>
          </div>
          <div className={styles.content}>
            <input type="text" placeholder="City *"></input>
            <input type="text" placeholder="Province *"></input>
          </div>
        </div>
        <div className={styles.cartDetails}>
          <div className={styles.cartQuantity}>
            <Collapse
              defaultActiveKey={['0']}
              ghost
              items={items}
              className={styles.accordion}
            />
          </div>
          <div className={styles.cartQuantity}>
            <Collapse
              defaultActiveKey={['0']}
              ghost
              items={items2}
              className={styles.accordion}
            />
          </div>
          <div className={styles.cartQuantity}>
            <>
              <span>
                <ShopOutlined />
              </span>
              <span style={{ marginLeft: '1rem', color: '#495057' }}>
                Cash on Delivery
              </span>
            </>
          </div>
          <div className={styles.orderBtnBox}>
            <button className={styles.orderBtn}>Place Order</button>
          </div>
        </div>
      </div>
      <CartDrawer
        openCart={openCart}
        onCartClose={handleCartClose}
        cartItems={cartItems}
        setCartItems={setCartItems}
      />
    </>
  );
}

export default CheckOutPage;
