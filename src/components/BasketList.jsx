import BasketItem from './BasketItem';

export default function BasketList(props) {
  const {
    order = [],
    handleBasketShow = Function.prototype,
    removeFromBasket = Function.prototype,
    incQuantity = Function.prototype,
    decQuantity = Function.prototype,
  } = props;

  const totalPrice = order.reduce((sum, elCart) => {
    return sum + elCart.price.regularPrice * elCart.quantity;
  }, 0);

  return (
    <ul className="collection basket-list">
      <li className="collection-item active">Cart</li>
      {order.length ? (
        order.map((item) => (
          <BasketItem
            key={item.mainId}
            {...item}
            removeFromBasket={removeFromBasket}
            incQuantity={incQuantity}
            decQuantity={decQuantity}
          />
        ))
      ) : (
        <li className="collection-item">Empty cart</li>
      )}
      <li className="collection-item active">Общая стоимость: {totalPrice}</li>
      <li className="collection-item active">
        <button type="button" className="btn-small">
          Оформить
        </button>
      </li>
      <i className="material-icons basket-close" onClick={handleBasketShow}>
        close
      </i>
    </ul>
  );
}
