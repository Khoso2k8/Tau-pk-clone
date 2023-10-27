function CartTotals({ subTotal, deliveryFees }) {
  return (
    <div className="totals-container">
      <div className="sub-total">
        <p>Sub total</p>
        <p>{subTotal.toLocaleString('en-us')}</p>
      </div>
      <div className="sub-total">
        <p>Tip</p>
        <p> 0</p>
      </div>
      <div className="sub-total">
        <p>Delivery Fee</p>
        <p> {deliveryFees}</p>
      </div>
      <div className="totals">
        <p>Total</p>
        <p>{(subTotal + deliveryFees).toLocaleString('en-us')}</p>
      </div>
    </div>
  );
}

export default CartTotals;
