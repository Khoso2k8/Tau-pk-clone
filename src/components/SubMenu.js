function SubMenu({ uniqueCategories }) {
  return (
    <div className="sub-menu">
      <nav className="sub-nav">
        <ul>
          <li>
            <i className="fa-solid fa-bars"></i>
          </li>
          {uniqueCategories.map(category => (
            <li key={category}>
              <a href={`#${category}`}>{category}</a>
            </li>
          ))}
          {/* <li>
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
          </li> */}
        </ul>
      </nav>
    </div>
  );
}

export default SubMenu;
