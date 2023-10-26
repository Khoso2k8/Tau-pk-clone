import { Fragment } from 'react';
import Whatsapp from './Whatsapp';

function Main({ items, onShowDrawer, onSelectedProduct }) {
  const uniqueCategories = items.reduce((categoriesArr, categoryObj) => {
    if (
      !categoriesArr.map(category => category).includes(categoryObj.category)
    ) {
      return [...categoriesArr, categoryObj.category];
    } else {
      return categoriesArr;
    }
  }, []);

  return (
    <div>
      <InfoBar />
      <SubMenu />
      <DeliveringTo />
      <CategoryProducts
        items={items}
        uniqueCategories={uniqueCategories}
        onShowDrawer={onShowDrawer}
        onSelectedProduct={onSelectedProduct}
      />
      <Whatsapp />
    </div>
  );
}

function InfoBar() {
  return (
    <div className="hero">
      <div className="info">
        <div className="business-time">
          <span>
            <i className="fa-regular fa-clock icon"></i>
          </span>
          <div className="details">
            <h3>Opening Hours</h3>
            <p>Sat 01:00 pm - 11-30 pm</p>
          </div>
        </div>
        <div className="business-time">
          <span>
            <i className="fa-solid fa-location-dot icon"></i>
          </span>
          <div className="details">
            <h3>Address</h3>
            <p>Intellectual Village, Spring</p>
          </div>
        </div>
        <div className="business-time">
          <span>
            <i className="fa-solid fa-phone-volume icon"></i>
          </span>
          <div className="details">
            <h3>Contact</h3>
            <p>+92 334 1118287</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function SubMenu() {
  return (
    <div className="sub-menu">
      <nav className="sub-nav">
        <ul>
          <li>
            <i className="fa-solid fa-bars"></i>
          </li>
          <li>
            <a href="/">Appetizing Deals</a>
          </li>
          <li>
            <a href="/">Deals</a>
          </li>
          <li>
            <a href="/">Barbeque</a>
          </li>
          <li>
            <a href="/">Special</a>
          </li>
          <li>
            <a href="/">Roll & Breads</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

function DeliveringTo() {
  return (
    <div className="delivering-to">
      <span>
        <i className="fa-solid fa-location-dot icon"></i>
      </span>
      <span>
        Delivering to: <strong>Bahadurabad</strong>
      </span>
    </div>
  );
}

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

export default Main;
