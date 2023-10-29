import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MenuPage from './pages/MenuPage';
import CheckOutPage from './pages/CheckOutPage';
import { useState } from 'react';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [openCart, setOpenCart] = useState(false);
  function handleCartOpen() {
    setOpenCart(openCart => !openCart);
  }
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            index
            element={
              <MenuPage
                cartItems={cartItems}
                setCartItems={setCartItems}
                openCart={openCart}
                setOpenCart={setOpenCart}
              />
            }
          />
          <Route
            path="checkout"
            element={
              <CheckOutPage
                cartItems={cartItems}
                setCartItems={setCartItems}
                openCart={openCart}
                setOpenCart={setOpenCart}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
