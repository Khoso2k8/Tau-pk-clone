import { Drawer } from 'antd';
import useSelection from 'antd/es/table/hooks/useSelection';
import { useState } from 'react';

function ProductDrawer({
  open,
  onClose,
  selectedProduct,
  onAddCartItem,
  setQuantity,
  quantity = { quantity },
  setSelectedDrinks = { setSelectedDrinks },
}) {
  return (
    <>
      <Drawer
        title="Basic Drawer"
        placement="right"
        closable={false}
        onClose={onClose}
        open={open}
        key="right"
        width={window.innerWidth > 746 ? '40%' : window.innerWidth}
      >
        <div className="item">
          <CloseButton onClose={onClose} />
          <ItemsDetails
            selectedProduct={selectedProduct}
            setSelectedDrinks={setSelectedDrinks}
          />
          <SpecialInstruction
            selectedProduct={selectedProduct}
            onAddCartItem={onAddCartItem}
            setQuantity={setQuantity}
            quantity={quantity}
          />
        </div>
      </Drawer>
    </>
  );
}

function CloseButton({ onClose }) {
  return (
    <div className="close">
      <button className="btn-close" onClick={onClose}>
        &times;
      </button>
    </div>
  );
}

function ItemsDetails({ selectedProduct, setSelectedDrinks }) {
  return (
    <>
      {selectedProduct.image && (
        <ProductImage src={selectedProduct.image} alt={selectedProduct.title} />
      )}
      <div className="item-description">
        <div className="item-details">
          <h4>{selectedProduct.title}</h4>
          <p>{selectedProduct.dishes}</p>
        </div>
        <div className="item-price">
          <span>Rs.</span>
          <span>{selectedProduct.price}</span>
        </div>
      </div>
      {selectedProduct.numOfDrinks > 0 && (
        <Drinks
          drinks={selectedProduct.drinks}
          numOfDrinks={selectedProduct.numOfDrinks}
          setSelectedDrinks={setSelectedDrinks}
        />
      )}
    </>
  );
}

function ProductImage({ src, alt }) {
  return (
    <div className="item-image">
      <img src={src} alt={alt} />
    </div>
  );
}

function Drinks({ numOfDrinks, setSelectedDrinks }) {
  return (
    <div className="drinks">
      {Array.from({ length: numOfDrinks }, (_, i) => (
        <Drink index={i} key={i} setSelectedDrinks={setSelectedDrinks} />
      ))}
    </div>
  );
}

function Drink({ index, setSelectedDrinks }) {
  function onSelectionDrinks(val) {
    if (index === 0) {
      setSelectedDrinks(selectedDrinks => ({ ...selectedDrinks, drink1: val }));
    }
    if (index === 1) {
      setSelectedDrinks(selectedDrinks => ({ ...selectedDrinks, drink2: val }));
    }
  }
  return (
    <div className="first-drink">
      <h3>Choose your {index === 0 ? 'first' : 'second'} drink</h3>
      <h5>Select 1</h5>
      <div className="option-1">
        <input
          type="radio"
          name={`drink-${index + 1}`}
          value="Pepsi"
          onChange={e => onSelectionDrinks(e.target.value)}
        />
        <label>Pepsi</label>
      </div>
      <div className="option-2">
        <input
          type="radio"
          name={`drink-${index + 1}`}
          value="Sprite"
          onChange={e => onSelectionDrinks(e.target.value)}
        />
        <label>Sprite</label>
      </div>
    </div>
  );
}

function SpecialInstruction({
  selectedProduct,
  onAddCartItem,
  setQuantity,
  quantity,
}) {
  return (
    <div className="special-instructions">
      <h4>Special Instructions</h4>
      <p>Any specific preference? let us know.</p>
      <input type="text" placeholder="Add special instructions here" />
      <AddToCart
        selectedProduct={selectedProduct}
        onAddCartItem={onAddCartItem}
        setQuantity={setQuantity}
        quantity={quantity}
      />
    </div>
  );
}

function AddToCart({ selectedProduct, onAddCartItem, setQuantity, quantity }) {
  return (
    <div className="buttons-wrapper">
      <div className="buttons">
        <div className="quantity">
          <div className="btns-decrease">
            <button
              className="btn-qty btns-decrease"
              onClick={() => {
                if (quantity > 0) setQuantity(quantity => quantity - 1);
              }}
            >
              -
            </button>
          </div>
          <span>{quantity ? quantity + 1 : 1}</span>
          <div className="btns-increase">
            <button
              className="btn-qty btn-increase"
              onClick={() => setQuantity(quantity => quantity + 1)}
            >
              +
            </button>
          </div>
        </div>
        <div className="btn btn-add-cart">
          <button
            className="btn btn-add-cart"
            onClick={() => onAddCartItem(selectedProduct)}
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDrawer;
