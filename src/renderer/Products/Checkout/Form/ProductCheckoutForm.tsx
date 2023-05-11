import ProductCheckoutInputField from '../InputFields/ProductCheckoutInputField';
import ProductCheckoutCreditCardForm from '../InputFields/ProductCheckoutCreditCardForm';
import styles from './ProductCheckoutForm.module.scss';

import { generateRandomName } from '../../../../main/util/names';

const fieldData = {
  email: {
    type: 'email',
    label: 'Email',
    placeholder: 'hi@warpdownload.com',
  },
  nameOnCard: {
    type: 'nameOnCard',
    label: 'Name on Card',
    placeholder: generateRandomName(),
  },
  zipCode: {
    type: 'zipCode',
    label: 'Card Zip Code',
    placeholder: '12345',
  },
};
const creditCardFormData = {
  creditCard: {
    type: 'creditCard',
    label: 'Credit Card',
    placeholder: '1234 5678 9012 3456',
  },
  expirationDate: {
    type: 'expirationDate',
    label: 'Card Expiration',
    placeholder: 'MM/YY',
  },
  cvv: {
    type: 'cvv',
    label: 'CVV',
    placeholder: '123',
  },
};

export default function ProductCheckoutForm(props: any) {
  const { expanded } = props;

  const componentStyle = expanded ? styles.form : styles.form;
  return (
    <form className={componentStyle}>
      <ProductCheckoutInputField data={fieldData.email} />
      <ProductCheckoutInputField data={fieldData.nameOnCard} />
      <ProductCheckoutInputField data={fieldData.zipCode} />
      <ProductCheckoutCreditCardForm data={creditCardFormData} />
    </form>
  );
}
