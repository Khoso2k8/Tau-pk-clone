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

export default CartHeading;
