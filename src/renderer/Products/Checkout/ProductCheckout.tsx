import styles from './ProductCheckout.module.scss';
import ProductCheckoutForm from './Form/ProductCheckoutForm';
import ProductCheckoutTitle from './Titles/ProductCheckoutTitle';
import ProductCheckoutSubtitle from './Titles/ProductCheckoutSubtitle';
import Loader from '../../Preloaders/PreloaderSpinners';
import PreloaderOrbits from '../../Preloaders/PreloaderOrbits';
type Props = {
  id: string;
  expanded: boolean;
  price: number;
};
export default function ProductCheckout(props: Props) {
  const { id, expanded, price } = props;
  // console.log(price);

  const title = 'Checkout';
  const subtitle = 'Enter your payment details';

  const componentStyle = expanded ? styles.checkout__expanded : styles.checkout;
  return (
    <>
      {expanded && (
        <div className={componentStyle}>
          <ProductCheckoutTitle title={title} />
          <ProductCheckoutSubtitle title={subtitle} />
          <ProductCheckoutForm expanded={expanded} price={price} id={id} />

          <PreloaderOrbits theme="dark" />
          {/* <Loader theme="dark" /> */}
        </div>
      )}
    </>
  );
}
