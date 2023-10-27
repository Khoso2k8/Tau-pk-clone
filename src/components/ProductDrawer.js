import { Drawer } from 'antd';
import useSelection from 'antd/es/table/hooks/useSelection';
import { useState } from 'react';
import ItemDetails from './ItemDetails';
import SpecialInstruction from './SpecialInstruction';

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
          <ItemDetails
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

export default ProductDrawer;
