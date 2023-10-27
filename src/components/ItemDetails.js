function ItemDetails({ selectedProduct, setSelectedDrinks }) {
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

export default ItemDetails;
