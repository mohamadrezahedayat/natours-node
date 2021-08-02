/* eslint-disable */
import axios from 'axios';
import { showAlert } from './alert';

const stripe = Stripe('<your stripe public key>');

export const bookTour = async tourId => {
  try {
    // 1) get the checkout session from server
    const session = await axios(`/api/v1/bookings/checkout-session/${tourId}`);
    // 2) create checkout form + charge credit card
    await stripe.redirectToCheckout({ sessionId: session.data.session.id });
  } catch (error) {
    console.log(err);
    showAlert('error', error);
  }
};
