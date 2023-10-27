import { Fragment } from 'react';
function CategoryProducts({
  items,
  uniqueCategories,
  onShowDrawer,
  onSelectedProduct,
}) {
  return (
    <div className="category container">
      {uniqueCategories.map(category => (
        <Fragment key={category}>
          <h2>{category}</h2>
          <Products
            items={items.filter(item => item.category === category)}
            onShowDrawer={onShowDrawer}
            onSelectedProduct={onSelectedProduct}
          />
        </Fragment>
      ))}
    </div>
  );
}

function Products({ items, onShowDrawer, onSelectedProduct }) {
  return (
    <div className="products">
      {items.map(items =>
        items.items.map(item => (
          <Product
            item={item}
            key={item}
            onShowDrawer={onShowDrawer}
            onSelectedProduct={onSelectedProduct}
          />
        ))
      )}
    </div>
  );
}

function Product({ item, onShowDrawer, onSelectedProduct }) {
  return (
    <div
      className="product"
      onClick={() => {
        onShowDrawer();
        onSelectedProduct(item);
      }}
    >
      <div className="product-details">
        <div className="product-description">
          <h3>{item.title}</h3>
          <p>{item.dishes}</p>
        </div>
        <span>Rs. {item.price}</span>
      </div>
      <div className="product-image">
        {item.imageCover && <img src={item.imageCover} alt={item.title} />}
      </div>
    </div>
  );
}

export default CategoryProducts;
