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

export default SpecialInstruction;
