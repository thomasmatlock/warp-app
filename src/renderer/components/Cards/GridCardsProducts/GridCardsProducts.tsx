import { useContext } from 'react';
import styles from './GridCards.module.scss';

import GridCardProduct from './GridCardProduct';

// import HoverCardsContext from '../../../store/gridCardsContext';
import ProductsContext from '../../../../store/productsGridCardsContext';

export default function GridCards(props: any) {
  const cardsCtx = useContext(ProductsContext);
  // console.log(cardsCtx.cardsData);
  const items = cardsCtx.cardsData;
  // set active class
  const mouseEnterHandler = (e: any) => {
    // cardsCtx.toggleUserInteracting();
  };
  const mouseLeaveHandler = (e: any) => {
    // cardsCtx.toggleUserInteracting();
  };

  if (typeof window !== 'undefined') {
    // setTimeout(() => {
    //   // const cards = document.getElementsByClassName(styles.hoverCards);
    //   const cards = document.getElementById(styles.hoverCards);
    //   const cardsArray = document.getElementsByClassName(styles.card);
    //   cards.onmousemove = (e) => {
    //     // card1.style.backgroundImage = `url('${background.src}')`;
    //     for (const card of cardsArray as any) {
    //       const rect = card.getBoundingClientRect(),
    //         x = e.clientX - rect.left,
    //         y = e.clientY - rect.top;
    //       // card.style. = cardBackgroundStyle;
    //       card.style.setProperty('--mouse-x', `${x}px`);
    //       card.style.setProperty('--mouse-y', `${y}px`);
    //     }
    //   };
    // }, 500);
  }
  return (
    // <div>
    //   <h1>HELLO</h1>
    // </div>
    <ul
      id={styles.hoverCards}
      className={styles.hoverCards}
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
    >
      {items.map((item) => (
        <GridCardProduct
          key={item.id}
          id={item.id}
          title={item.title}
          iconString={item.iconString}
          description={item.description}
        />
      ))}
    </ul>
  );
}
