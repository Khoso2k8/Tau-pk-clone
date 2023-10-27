function SearchBox() {
  return (
    <div className="search-box">
      <i className="fa-solid fa-magnifying-glass icon"></i>
      <input type="text" placeholder="search menu items" />
      <span>
        <i className="fa-solid fa-arrow-right icon icon-arrow"></i>
      </span>
    </div>
  );
}

export default SearchBox;
