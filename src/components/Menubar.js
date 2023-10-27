import Logo from './Logo';
import SearchBox from './SearchBox';
import Navbar from './Navbar';

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

export default Menubar;
