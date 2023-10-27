function Navbar({ onCartOpen, subTotal, itemsInCart, cartItems }) {
  return (
    <nav className="nav">
      <div className="cart-box">
        <button className="btn btn-cart" onClick={onCartOpen}>
          <span>
            <i className="fa-solid fa-cart-shopping"></i>
          </span>
          {cartItems.length ? (
            <>
              <span>{itemsInCart} | </span>{' '}
              <span>
                <i className="fa-solid fa-bag-shopping"></i> {subTotal}
              </span>
            </>
          ) : (
            'cart'
          )}
        </button>
      </div>
      <div className="explore-box">
        <span>
          <i className="fa-solid fa-bars icon"></i>
        </span>
        <span className="text">Explore</span>
      </div>
      <div className="explore-box-mob">
        <i className="fa-solid fa-bars icon"></i>
      </div>
    </nav>
  );
}

export default Navbar;
