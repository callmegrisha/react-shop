import { useState, useEffect } from 'react';
import { API_KEY, API_URL } from '../config';
import Preloader from './Preloader';
import GoodsList from './GoodsList';
import Cart from './Cart';
import BasketList from './BasketList';
import Alert from './Alert';

export default function Main() {
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState([]);
  const [isBasketShow, setBasketShow] = useState(false);
  const [alertName, setAlertName] = useState('');

  const addToBasket = (item) => {
    const itemIndex = order.findIndex(
      (orderItem) => orderItem.mainId === item.mainId
    );

    if (itemIndex < 0) {
      const newItem = {
        ...item,
        quantity: 1,
      };
      setOrder([...order, newItem]);
    } else {
      const newOrder = order.map((orderItem, index) => {
        if (index === itemIndex) {
          return {
            ...orderItem,
            quantity: orderItem.quantity + 1,
          };
        } else {
          return orderItem;
        }
      });

      setOrder(newOrder);
    }
    setAlertName(item.displayName);
  };

  const removeFromBasket = (itemId) => {
    const newOrder = order.filter((elem) => elem.mainId !== itemId);
    setOrder(newOrder);
  };

  const incQuantity = (itemId) => {
    const newOrder = order.map((elem) => {
      if (elem.mainId === itemId) {
        const newQuantity = elem.quantity + 1;
        return {
          ...elem,
          quantity: newQuantity,
        };
      } else {
        return elem;
      }
    });
    setOrder(newOrder);
  };

  const decQuantity = (itemId) => {
    const newOrder = order.map((elem) => {
      if (elem.mainId === itemId) {
        const newQuantity = elem.quantity - 1;
        return {
          ...elem,
          quantity: newQuantity >= 1 ? newQuantity : 0,
        };
      } else {
        return elem;
      }
    });
    setOrder(newOrder);
  };

  const handleBasketShow = () => {
    setBasketShow(!isBasketShow);
  };

  const closeAlert = () => {
    setAlertName('');
  };

  useEffect(function getGoods() {
    fetch(API_URL, {
      headers: { Authorization: API_KEY },
    })
      .then((response) => response.json())
      .then((data) => {
        setGoods(data.shop);
        setLoading(false);
      });
  }, []);

  return (
    <main>
      <div className="container">
        <Cart quantity={order.length} handleBasketShow={handleBasketShow} />
        {loading ? (
          <Preloader />
        ) : (
          <GoodsList goods={goods} addToBasket={addToBasket} />
        )}
        {isBasketShow && (
          <BasketList
            order={order}
            handleBasketShow={handleBasketShow}
            removeFromBasket={removeFromBasket}
            incQuantity={incQuantity}
            decQuantity={decQuantity}
          />
        )}
        {alertName && <Alert name={alertName} closeAlert={closeAlert} />}
      </div>
    </main>
  );
}
