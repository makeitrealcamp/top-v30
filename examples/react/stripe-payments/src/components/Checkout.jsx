import React from 'react'
import { 
  useElements, 
  useStripe,
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement, 
} from '@stripe/react-stripe-js'
import axios from 'axios'
import '../styles/Checkout.scss'

const Checkout = ({ totalPrice }) => {
  const stripe = useStripe();
  const elements = useElements();

  const transactionErrors = {
    'Your card has insufficient funds.': () => alert('No tienes fondos suficientes')
  }
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {

      
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: 'card',
        card: elements.getElement(
          CardNumberElement,
          CardExpiryElement,
          CardCvcElement
        ),
      })
      
      if(error) {
        console.log(error)
        return
      }
      
      const response = await axios.post('http://localhost:8080/api/checkout',
      {
        paymentMethod,
        amount: Math.floor(totalPrice * 100)
      })

      alert('Gracias por tu compra')
      //navigate(/payment-success)
    } catch({ response }) {

      transactionErrors[response.data.message]()
      // if(response.data.message === 'Your card has insufficient funds.') {
      //   alert('No tienes fondos suficientes')
      // }
    } finally {
      elements.getElement(
        CardNumberElement,
        CardExpiryElement,
        CardCvcElement
      ).clear()
    }
  }

  return (
    <form 
      onSubmit={ handleSubmit }
      className='stripe-form'  
    >
      <label className='stripe-label'>Card Number</label>
      <CardNumberElement className='stripe-input'/>
      <label className='stripe-label'>Expiration Date</label>
      <CardExpiryElement className='stripe-input'/>
      <label className='stripe-label'>CVC</label>
      <CardCvcElement className='stripe-input'/>
      <button type='submit'> Pagar </button>
    </form>
  )
}

export default Checkout