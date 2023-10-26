import { Drawer } from 'antd';
import { DeleteOutlined, MinusOutlined } from '@ant-design/icons';
import { Fragment } from 'react';

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
        // onClose={onClose}
        open={openCart}
        key="right"
        width="40%"
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
      </Drawer>
    </>
  );
}

function CartHeading({ itemsInCart, onCartClose }) {
  return (
    <div className="cart-heading">
      <div className="user-cart">
        <span>
          <i className="fa-solid fa-cart-shopping .shopping-icon"></i>
        </span>
        <p>Your Cart</p>
      </div>
      <div className="total-items">Total items: {itemsInCart}</div>
      <div className="close-cart">
        <button onClick={onCartClose}>
          <i className="fa-solid fa-xmark close-icon"></i>
        </button>
      </div>
    </div>
  );
}

function CartContentHeading() {
  return (
    <div className="cart-content-heading">
      <p>Product Name</p>
      <p>Quantity</p>
      <p>Amount</p>
    </div>
  );
}

function CartContent({
  cartItems,
  onIncreaseQuantity,
  onDecreaseQuantity,
  onRemoveCartItem,
  setSelectedItem,
}) {
  return (
    <div className="cart-content-container">
      <div className="cart-content">
        {cartItems.map(item => (
          <Fragment key={item.item.id}>
            <ItemDetails
              item={item.item}
              selectedDrinks={item.selectedDrinks}
              key={item.item.id}
              onRemoveCartItem={onRemoveCartItem}
            />
            <ItemQuantity
              quantity={item.quantity}
              onIncreaseQuantity={onIncreaseQuantity}
              onDecreaseQuantity={onDecreaseQuantity}
              setSelectedItem={setSelectedItem}
              item={item}
            />
            <div className="total">
              {(
                parseFloat(item.item.price.replace(/,/g, '')) *
                parseInt(item.quantity)
              ).toLocaleString('en-us')}
            </div>
          </Fragment>
        ))}
      </div>
    </div>
  );
}

function ItemDetails({ item, selectedDrinks, onRemoveCartItem }) {
  return (
    <div className="item-details">
      {item.image && <ItemImage src={item.imageCover} alt={item.title} />}
      <div className="cart-item-description">
        <p>{item.title}</p>
        {selectedDrinks.length > 0 &&
          selectedDrinks.map(drink => (
            <p key={drink}>
              <span>{drink}</span>
            </p>
          ))}
        <span>
          <DeleteOutlined onClick={() => onRemoveCartItem(item.id)} />
        </span>
        <span>Remove</span>
      </div>
    </div>
  );
}

function ItemImage({ src, alt }) {
  return (
    <div className="item-image-box">
      <img src={src} alt={alt} />
    </div>
  );
}

function ItemQuantity({
  quantity,
  onIncreaseQuantity,
  onDecreaseQuantity,
  onRemoveCartItem,
  item,
  setSelectedItem,
}) {
  return (
    <div className="item-quantity">
      <div>
        <button className="btn">
          {' '}
          {quantity === 1 ? (
            <DeleteOutlined onClick={() => onDecreaseQuantity(item.item.id)} />
          ) : (
            <MinusOutlined
              onClick={() => {
                onDecreaseQuantity(item.item.id);
              }}
            />
          )}
        </button>
        <span>{quantity}</span>
        <button
          className="btn"
          onClick={() => {
            onIncreaseQuantity(item.item.id);
          }}
        >
          +
        </button>
      </div>
    </div>
  );
}

function CartTotals({ subTotal, deliveryFees }) {
  return (
    <div className="totals-container">
      <div className="sub-total">
        <p>Sub total</p>
        <p>{subTotal.toLocaleString('en-us')}</p>
      </div>
      <div className="sub-total">
        <p>Tip</p>
        <p> 0</p>
      </div>
      <div className="sub-total">
        <p>Delivery Fee</p>
        <p> {deliveryFees}</p>
      </div>
      <div className="totals">
        <p>Total</p>
        <p>{(subTotal + deliveryFees).toLocaleString('en-us')}</p>
      </div>
    </div>
  );
}

export default CartDrawer;
