// TEST CARD NUMBER  DESCRIPTION
// 4242424242424242  Succeeds and immediately processes the payment.
// 4000000000003220  3D Secure 2 authentication must be completed for a successful payment.
// 4000000000009995  Always fails with a decline code of insufficient_funds.
import Stripe from 'stripe';
import stripeKey from './stripeKey';
import getAllProducts from './products/stripeGetAllProducts';

const stripe = new Stripe(stripeKey, {
  apiVersion: '2022-08-01',
});

export default async function createCustomer() {
  try {
    // const products = await getAllProducts();
  } catch (error) {}
  // console.log(products.data.length);

  const params: Stripe.CustomerCreateParams = {
    email: 'metaphorpsTest2@gmail.com',
  };
  let customer;
  try {
    customer = await stripe.customers.create(params);
    // console.log(customer);
  } catch (error) {}

  // id: 'cus_MNzQJZI5BewhA9',
  // object: 'customer',
  // address: null,
  // balance: 0,
  // created: 1662515570,
  // currency: null,
  // default_source: null,
  // delinquent: false,
  // description: null,
  // discount: null,
  // email: 'metaphorps@gmail.com',
  // invoice_prefix: 'A43F144E',
  // invoice_settings: {
  //   custom_fields: null,
  //   default_payment_method: null,
  //   footer: null,
  //   rendering_options: null
  // },
  // livemode: true,
  // metadata: {},
  // name: null,
  // next_invoice_sequence: 1,
  // phone: null,
  // preferred_locales: [],
  // shipping: null,
  // tax_exempt: 'none',
  // test_clock: null

  // console.log(customer);
}
// createCustomer();
// export default createCustomer;
