import React from 'react';
import { useSelector } from 'react-redux';
import CartCard from '../components/CartCard';

const CartDetails = () => {
  const cartItems = useSelector(state => state.cart.items);
  const total = useSelector(state => state.cart.total);
  const totalPrice = cartItems.reduce((a, b) => a + b.totalPrice, 0).toFixed(2);

  return (
    <div className='cartdetailsContainer'>
      <div className='cartDetails'>
        {cartItems.map(item => (
          <CartCard
            key={item.id}
            id={item.id}
            quantity={item.quantity}
            image={item.image}
            title={item.title}
            price={item.price}
          />
        ))}
      </div>
      <div className='cartDetails__totals'>
        <div>
          <p>Total Products: {total}</p>
        </div>
        <div>
          <p>Total Price: ${totalPrice}</p>
        </div>
      </div>
    </div>
  );
};

export default CartDetails;
