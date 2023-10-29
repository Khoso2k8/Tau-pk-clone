import Whatsapp from './Whatsapp';
import InfoBar from './InfoBar';
import SubMenu from './SubMenu';
import DeliveringTo from './DeliveringTo';
import CategoryProducts from './CategoryProducts';

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
      <SubMenu uniqueCategories={uniqueCategories} />
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

export default Main;
