'use client';
import Image from 'next/image';
import styles from './page.module.css';
import useWindowSize from '@rooks/use-window-size';

export default function Home() {
  const { innerWidth: windowWidth } = useWindowSize();

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
            <p className={styles.imgContainer}>
              <img
                src='/Group 1000001871.png'
                alt=''
              />
            </p>
            <p className={styles.CardName}>Ahaar</p>
          </article>
          <article className={styles.card1LowerPart}></article>
        </div>
      </div>
    </div>
  );
}
