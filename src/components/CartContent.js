import { DeleteOutlined, MinusOutlined } from '@ant-design/icons';
import { Fragment } from 'react';

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
          selectedDrinks.map((drink, i) => (
            <p key={`${drink}${i}`}>
              <span>{drink}</span>
            </p>
          ))}
        <span onClick={() => onRemoveCartItem(item.id)}>
          <DeleteOutlined />
        </span>
        <span onClick={() => onRemoveCartItem(item.id)}>Remove</span>
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
  item,
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

export default CartContent;
