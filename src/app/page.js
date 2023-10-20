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
          <article className={styles.card1LowerPart}>
            <p className={styles.card1desc}>
              Food – It is not about eating less or counting your calories but
              eating the right kind of food at the right time in a right way.
              Diet is considered to be one of the Upastambha of life and the
              greatest medicine. It has a prime role in maintaining health and
              treating various diseases
            </p>
            <p className={styles.card1ReadLess}>Read Less</p>
          </article>
        </div>
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
          <article className={styles.card1LowerPart}>
            <p className={styles.card1desc}>
              Exercise – Regular exercise is known to improve circulation,
              strength, and endurance. It helps you to relax mentally and have a
              sound sleep. It also improves digestion and elimination.
            </p>
            <p className={styles.card1ReadLess}>Read Less</p>
          </article>
        </div>
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
          <article className={styles.card1LowerPart}>
            <p className={styles.card1desc}>
              Sleep – It is not about sleeping for 8 hours but about how well
              you are sleeping, which is possible only when the mind completely
              dissociates itself from the senses. Quality sleep recharges the
              mind, repairs the body and nourishes the soul.
            </p>
            <p className={styles.card1ReadLess}>Read Less</p>
          </article>
        </div>
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
          <article className={styles.card1LowerPart}>
            <p className={styles.card1desc}>
              Mindfulness - Yoga comprises of several practices, of which Dhyana
              means pure meditation to keep the mind at peace and stress free.
              Stress increases the risk of conditions like obesity, heart
              disease, diabetes, depression, gastrointestinal problems, and
              asthma.
            </p>
            <p className={styles.card1ReadLess}>Read Less</p>
          </article>
        </div>
      </div>
      <div className={styles.aboutUsdiv}>
        <span className={styles.AboutUsSpan}>About Us</span>
        <div className={styles.aboutUsMain}>
          <div className={styles.aboutUsleftdiv}>
            <div className={styles.abusBackground}></div>
            <div className={styles.youtiframe}>
              <iframe
                width='80%'
                height='315'
                src='https://www.youtube.com/embed/i0nOUybPoUg'
                style={{ borderRadius: '10px' }}
              ></iframe>
            </div>
          </div>
          <div className={styles.aboutUsrightdiv}>
            <div className={styles.aboutUsrightdivMain}>
              <span className={styles.abusname}>
                About Doctor Avantika Krishna Killa
              </span>
              <span className={styles.abusDesc}>
                A qualified Naturopathy and Yoga Physician, who takes an
                integrative medical approach to health. Having 10+ years of
                experience in integrative health, she firmly believes that
                balance is the key to good health and that abiding to the
                principles of Mother Nature, one can reverse chronic diseases we
                encounter nowadays. She has been working extensively in the
                managing some of the chronic lifestyle related conditions like
                Diabetes, Asthma, Autoimmune diseases, Sciatica, PCOS,
                Infertility, Obesity, Thyroid, Dyslipidemia and more. She has
                had the opportunity to work with some great Naturopaths, Doctors
                and Hospitals like the All India Institute of Medical Sciences
                (AIIMS), New Delhi. She is also a trained Acupuncturist and
                Chiropractor.
              </span>
            </div>
            <button className={styles.abusreadmore}>Read More</button>
          </div>
        </div>
      </div>
      <div className={styles.WhyChooseUsdiv}>
        <span className={styles.WhyChooseUsSpan}>Why Choose Us</span>
        <div className={styles.WhyChooseUsMainDiv}>
          <article>
            <span className={styles.mcuimgContainer}>
              <img
                src='/Group.png'
                alt=''
              />
            </span>
            <span className={styles.mcuimgHead}>
              No medicines or supplements used
            </span>
            <span className={styles.mcuimgBody}>
              Our approach is purely based on an individual’s lifestyle and the
              connection between Mind-Body-Soul. It is drugless, safe and
              effective
            </span>
          </article>
          <article>
            <span className={styles.mcuimgContainer}>
              <img
                src='/Group.png'
                alt=''
              />
            </span>
            <span className={styles.mcuimgHead}>
              No medicines or supplements used
            </span>
            <span className={styles.mcuimgBody}>
              Our approach is purely based on an individual’s lifestyle and the
              connection between Mind-Body-Soul. It is drugless, safe and
              effective
            </span>
          </article>
          <article>
            <span className={styles.mcuimgContainer}>
              <img
                src='/Group.png'
                alt=''
              />
            </span>
            <span className={styles.mcuimgHead}>
              No medicines or supplements used
            </span>
            <span className={styles.mcuimgBody}>
              Our approach is purely based on an individual’s lifestyle and the
              connection between Mind-Body-Soul. It is drugless, safe and
              effective
            </span>
          </article>
          <article>
            <span className={styles.mcuimgContainer}>
              <img
                src='/Group.png'
                alt=''
              />
            </span>
            <span className={styles.mcuimgHead}>
              No medicines or supplements used
            </span>
            <span className={styles.mcuimgBody}>
              Our approach is purely based on an individual’s lifestyle and the
              connection between Mind-Body-Soul. It is drugless, safe and
              effective
            </span>
          </article>
        </div>
      </div>
      <div className={styles.OurHealingCenterDiv}>
        <span className={styles.OurHealingCenterSpan}>Our Healing Center</span>
        <div className={styles.OurHealingCenterMainDiv}>
          <div className={styles.OHCcard}>
            <img
              src='/Rectangle 3869.png'
              alt=''
            />
            <span>Relieve Ache & pains</span>
          </div>
          <div className={styles.OHCcard}>
            <img
              src='/Rectangle 3869.png'
              alt=''
            />
            <span>Relieve Ache & pains</span>
          </div>
          <div className={styles.OHCcard}>
            <img
              src='/Rectangle 3869.png'
              alt=''
            />
            <span>Relieve Ache & pains</span>
          </div>
        </div>
      </div>
      <div className={styles.OurProgramdiv}>
        <span className={styles.OurHealingCenterSpan}>Our Program</span>
        <div className={styles.OurProgrammaindiv}>
          <div className={styles.OPsqaures}>
            <div class={styles.borderbox}></div>
            <article>
              <img
                src='/Group1.png'
                alt=''
              />
              <span>Weight management</span>
            </article>
          </div>
          <div className={styles.OPsqaures}>
            <div class={styles.borderbox}></div>
            <article>
              <img
                src='/Group1.png'
                alt=''
              />
              <span>Weight management</span>
            </article>
          </div>
          <div className={styles.OPsqaures}>
            <div class={styles.borderbox}></div>
            <article>
              <img
                src='/Group1.png'
                alt=''
              />
              <span>Weight management</span>
            </article>
          </div>
          <div className={styles.OPsqaures}>
            <div class={styles.borderbox}></div>
            <article>
              <img
                src='/Group1.png'
                alt=''
              />
              <span>Weight management</span>
            </article>
          </div>
          <div className={styles.OPsqaures}>
            <div class={styles.borderbox}></div>
            <article>
              <img
                src='/Group1.png'
                alt=''
              />
              <span>Weight management</span>
            </article>
          </div>
          <div className={styles.OPsqaures}>
            <div class={styles.borderbox}></div>
            <article>
              <img
                src='/Group1.png'
                alt=''
              />
              <span>Weight management</span>
            </article>
          </div>
          <div className={styles.OPsqaures}>
            <div class={styles.borderbox}></div>
            <article>
              <img
                src='/Group1.png'
                alt=''
              />
              <span>Weight management</span>
            </article>
          </div>
          <div className={styles.OPsqaures}>
            <div class={styles.borderbox}></div>
            <article>
              <img
                src='/Group1.png'
                alt=''
              />
              <span>Weight management</span>
            </article>
          </div>
          <div className={styles.OPsqaures}>
            <div class={styles.borderbox}></div>
            <article>
              <img
                src='/Group1.png'
                alt=''
              />
              <span>Weight management</span>
            </article>
          </div>
          <div className={styles.OPsqaures}>
            <div class={styles.borderbox}></div>
            <article>
              <img
                src='/Group1.png'
                alt=''
              />
              <span>Weight management</span>
            </article>
          </div>
        </div>
      </div>
      <div className={styles.HealingStory}>
        <img
          src='/Group 1000001859.png'
          alt=''
        />
        <div className={styles.HSmainDiv}>
          <span className={styles.OurHealingCenterSpan}>Healing Story</span>
          <div className={styles.HSmaindivDesdiv}>
            “I have Diabetes for the last 20 years for which I have been taking
            up to 20 units of insulin everyday along with other regular
            medicines to control my sugar level. One of my relatives informed me
            about Panchatattva and I planned a visit. Within 2 months of
            following the diet plan, the results were so positive that at
            present I no longer need insulin shots and my other medicines have
            also been reduced to half. I’m grateful to the entire team.”
          </div>
        </div>
      </div>
      <div className={styles.ReviewTestimonials}>
        <span className={styles.OurHealingCenterSpan}>
          Review & Testimonials
        </span>
        <div className={styles.ReviewTestimonialsMainDiv}>
          <div className={styles.ReviewTestimonialsdescDiv}>
            <div></div>
            <div className={styles.ReviewTestimonialsdesc}>
              I recently visited the Ayurvedic Clinic and had a wonderful
              experience. The staff was friendly and welcoming, creating a warm
              and calming atmosphere.
            </div>
          </div>
          <div className={styles.backGrounddiv1}></div>
          <div className={styles.backGrounddiv2}></div>
        </div>
      </div>
    </div>
  );
}
