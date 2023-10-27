import Topbar from './Topbar';
import Menubar from './Menubar';

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

export default Header;
