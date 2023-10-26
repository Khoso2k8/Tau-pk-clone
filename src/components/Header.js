function Header({ onCartOpen, subTotal, itemsInCart, cartItems }) {
  return (
    <>
      <Topbar />
      <Menubar
        onCartOpen={onCartOpen}
        subTotal={subTotal}
        cartItems={cartItems}
        itemsInCart={itemsInCart}
      />
    </>
  );
}

function Topbar() {
  return (
    <div className="top-bar">
      Taus is currently closed and will open shortly at 01:00 pm for new orders
    </div>
  );
}

function Menubar({ onCartOpen, subTotal, itemsInCart, cartItems }) {
  return (
    <div className="menu-bar sticky">
      <Logo />
      <SearchBox />
      <Navbar
        onCartOpen={onCartOpen}
        subTotal={subTotal}
        itemsInCart={itemsInCart}
        cartItems={cartItems}
      />
    </div>
  );
}

function Logo() {
  return (
    <div className="logo">
      <img src="image/logo.png" alt="" className="logo-image" />
    </div>
  );
}

function SearchBox() {
  return (
    <div className="search-box">
      <i className="fa-solid fa-magnifying-glass icon"></i>
      <input type="text" placeholder="search menu items" />
      <span>
        <i className="fa-solid fa-arrow-right icon icon-arrow"></i>
      </span>
    </div>
  );
}

function Navbar({ onCartOpen, subTotal, itemsInCart, cartItems }) {
  return (
    <nav className="nav">
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
      <div className="explore-box">
        <span>
          <i className="fa-solid fa-bars icon"></i>
        </span>
        <span className="text">Explore</span>
      </div>
    </nav>
  );
}

export default Header;
