export default function BasketItem(props) {
  const {
    mainId,
    displayName,
    price,
    quantity,
    removeFromBasket = Function.prototype,
    incQuantity = Function.prototype,
    decQuantity = Function.prototype,
  } = props;
  return (
    <>
      <li className="collection-item">
        {displayName} x {quantity}= {price.regularPrice * quantity}
        <button
          type="button"
          className="decrement-item-btn btn"
          onClick={() => decQuantity(mainId)}
        >
          <i className="material-icons">remove</i>
        </button>
        <button
          type="button"
          className="increment-item-btn btn"
          onClick={() => incQuantity(mainId)}
        >
          <i className="material-icons">add</i>
        </button>
        <span
          className="secondary-content"
          onClick={() => removeFromBasket(mainId)}
        >
          <i className="material-icons basket-delete">close</i>
        </span>
      </li>
    </>
  );
}
