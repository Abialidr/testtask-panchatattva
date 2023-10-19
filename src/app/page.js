import Image from 'next/image';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className='mainDiv'>
      <div
        className={styles.bannerImgDiv}
        style={{ zIndex: '1' }}
      >
        <img src='/image 4.png'></img>
        <div className={styles.rightArrow}>{'>'}</div>
        <div className={styles.leftArrow}>{'<'}</div>
        <div className={styles.Downloadbtn}>{'->'}</div>
      </div>
      <div className={styles.cards1Div}>
        <div className={styles.card1}>
          <article className={styles.card1UpperPart}>
            
          </article>
          <article className={styles.card1LowerPart}></article>
        </div>
      </div>
    </div>
  );
}
