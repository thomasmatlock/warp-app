import styles from './ProductCheckout.module.scss';

export default function ProductCheckout(props: any) {
  const { title, expanded } = props;

  const componentStyle = expanded ? styles.checkout__expanded : styles.checkout;
  return <>{expanded && <div className={componentStyle}>checkout NOW</div>}</>;
}
