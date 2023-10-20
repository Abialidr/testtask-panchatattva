"use client";
import Image from "next/image";
import styles from "./page.module.css";
import useWindowSize from "@rooks/use-window-size";
import { useState } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
export default function Home() {
  const { innerWidth: windowWidth } = useWindowSize();
  const arr = [
    {
      img: '/Group1.png',
      name: 'Weight management',
    },
    {
      img: '/Group2.png',
      name: 'Diabetes management',
    },
    {
      img: '/Group3.png',
      name: 'Cardiac Care',
    },
    {
      img: '/Group4.png',
      name: 'Pain management',
    },
    {
      img: '/Group5.png',
      name: 'Hormonal Care',
    },
    {
      img: '/Group6.png',
      name: 'Skin Care',
    },
    {
      img: '/Group7.png',
      name: 'Allergy  Care',
    },
    {
      img: '/Group8.png',
      name: 'Pregnancy Care',
    },
    {
      img: '/Group9.png',
      name: 'Stress Management',
    },
    {
      img: '/Group10.png',
      name: 'Detoxification',
    },
  ];
  const data = [
    {
      text: '“I have Diabetes for the last 20 years for which I have been taking up to 20 units of insulin everyday along with other regular medicines to control my sugar level. One of my relatives informed me about Panchatattva and I planned a visit. Within 2 months of following the diet plan, the results were so positive that at present I no longer need insulin shots and my other medicines have also been reduced to half. I’m grateful to the entire team.”',
      img: '/1.png',
      name: 'Rajesh Goenka (Business)',
    },
    {
      text: '“I have Diabetes for the last 20 years for which I have been taking up to 20 units of insulin everyday along with other regular medicines to control my sugar level. One of my relatives informed me about Panchatattva and I planned a visit. Within 2 months of following the diet plan, the results were so positive that at present I no longer need insulin shots and my other medicines have also been reduced to half. I’m grateful to the entire team.”',
      img: '/2.png',
      name: 'Mahesh Goenka (Business)',
    },
    {
      text: '“I have Diabetes for the last 20 years for which I have been taking up to 20 units of insulin everyday along with other regular medicines to control my sugar level. One of my relatives informed me about Panchatattva and I planned a visit. Within 2 months of following the diet plan, the results were so positive that at present I no longer need insulin shots and my other medicines have also been reduced to half. I’m grateful to the entire team.”',
      img: '/3.png',
      name: 'Kajesh Goenka (Business)',
    },
    {
      text: '“I have Diabetes for the last 20 years for which I have been taking up to 20 units of insulin everyday along with other regular medicines to control my sugar level. One of my relatives informed me about Panchatattva and I planned a visit. Within 2 months of following the diet plan, the results were so positive that at present I no longer need insulin shots and my other medicines have also been reduced to half. I’m grateful to the entire team.”',
      img: '/4.png',
      name: 'Vajesh Goenka (Business)',
    },
    {
      text: '“I have Diabetes for the last 20 years for which I have been taking up to 20 units of insulin everyday along with other regular medicines to control my sugar level. One of my relatives informed me about Panchatattva and I planned a visit. Within 2 months of following the diet plan, the results were so positive that at present I no longer need insulin shots and my other medicines have also been reduced to half. I’m grateful to the entire team.”',
      img: '/5.png',
      name: 'Yajesh Goenka (Business)',
    },
  ];
  const [isOpen, setIsOpen] = useState(false);

  const toggleList = () => {
    setIsOpen(!isOpen);
  };
  const [activeIndex, setActiveIndex] = useState(0);
  const [fade, setFade] = useState(false);
  const images = [
    "/image 4.png",
    "/Group 1000001859.png",
    "/Group 1000001871.png",
    "/Group 1000001872.jpg",
  ];
  const nextImage = () => {
    setFade(true);
    setTimeout(() => {
      setActiveIndex((activeIndex + 1) % images.length);
      setFade(false);
    }, 300); // Change the duration to match your transition duration
  };

  const prevImage = () => {
    setFade(true);
    setTimeout(() => {
      setActiveIndex((activeIndex - 1 + images.length) % images.length);
      setFade(false);
    }, 300); // Change the duration to match your transition duration
  };

  const [translateX, setTranslateX] = useState(0);

  // State to keep track of the currently active dot
  const [activeDot, setActiveDot] = useState(0);

  const nextImage1 = () => {
    const newIndex = (activeIndex + 1) % images.length;
    setActiveIndex(newIndex);
    setTranslateX(-newIndex * 100);
    setActiveDot(newIndex);
  };

  const prevImage1 = () => {
    const newIndex = (activeIndex - 1 + images.length) % images.length;
    setActiveIndex(newIndex);
    setTranslateX(-newIndex * 100);
    setActiveDot(newIndex);
  };

  const goToImage = (index) => {
    setActiveIndex(index);
    setTranslateX(-index * 100);
    setActiveDot(index);
  };

  return (
    <div className="mainDiv">
      <div className={styles.bannerImgDiv} style={{ zIndex: "1" }}>
        <img
          src={images[activeIndex]}
          alt={`Image ${activeIndex + 1}`}
          style={{ opacity: fade ? 0 : 1, transition: "opacity 0.3s" }}
        />
        <button className={styles.leftArrow} onClick={prevImage}>
          <ArrowBackIosIcon
            style={{
              position: "absolute",
              left: "50%",
              transform: "translatex(-30%)",
            }}
          />
        </button>
        <button className={styles.rightArrow} onClick={nextImage}>
          <ArrowForwardIosIcon
            style={{
              position: "absolute",
              left: "50%",
              transform: "translatex(-40%)",
            }}
          />
        </button>
        {/* <div className={styles.Downloadbtn}>{'->'}</div> */}
        <div className="upward-list">
          <ul className={`list ${isOpen ? "open" : "closed"}`}>
            <li>
              <Image src="/phone-call.png" height="41" width="41"></Image>
            </li>
            <li>
              <Image src="/youtube.png" height="41" width="41"></Image>
            </li>
            <li>
              <Image src="/facebook.png" height="41" width="41"></Image>
            </li>
            <li>
              <Image src="/instagram.png" height="41" width="41"></Image>
            </li>
          </ul>
          <button className={`toggle-button`} onClick={toggleList}>
            {/* <Grow in={isOpen}>
              <Image src="/close.png" height="41" width="41"></Image>
            </Grow>
            <Grow in={!isOpen}>
              <Image src="/share.png" height="41" width="41"></Image>
            </Grow> */}
            {isOpen ? (
              <Image src="/close.png" height="42" width="42"></Image>
            ) : (
              <Image src="/share.png" height="41" width="41"></Image>
            )}
          </button>
        </div>
      </div>
      <div className={styles.cards1Div}>
        <div className={styles.card1}>
          <article className={styles.card1UpperPart}>
            <p className={styles.imgContainer}>
              <img src="/Group 1000001871.png" alt="" />
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
                src='/vihar.png'
                alt=''
              />
            </p>
            <p className={styles.CardName}>Vihaar</p>
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
                src='/nidra.png'
                alt=''
              />
            </p>
            <p className={styles.CardName}>Nidra</p>
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
                src='/dhyana.png'
                alt=''
              />
            </p>
            <p className={styles.CardName}>Dhyana</p>
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
                width="80%"
                height="315"
                src="https://www.youtube.com/embed/i0nOUybPoUg"
                style={{ borderRadius: "10px" }}></iframe>
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
                style={{ width: '40px', height: '40px' }}
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
                src='/ebm.png'
                alt=''
                style={{ width: '40px', height: '40px' }}
              />
            </span>
            <span className={styles.mcuimgHead}>Evidenced Based Medicine</span>
            <span className={styles.mcuimgBody}>
              Our approach is guided by the best available research data,
              balanced with the doctor’s judgement and patient’s values.
            </span>
          </article>
          <article>
            <span className={styles.mcuimgContainer}>
              <img
                src='/individual appraisal-appraisal-assessment-evaluate-review-test.png'
                alt=''
                style={{ width: '40px', height: '40px' }}
              />
            </span>
            <span className={styles.mcuimgHead}>Individualized programs</span>
            <span className={styles.mcuimgBody}>
              Each one of us being different with regards to the body type,
              mindset, likes and dislikes, our programs are designed to meet
              individual requirements and goals. Not just weight loss, but we
              believe in overall health, managing the chronic diseases and
              restoring the factor of wellness.
            </span>
          </article>
          <article>
            <span className={styles.mcuimgContainer}>
              <img
                src='/noun-virtual-4654903 1.png'
                alt=''
                style={{ width: '40px', height: '40px' }}
              />
            </span>
            <span className={styles.mcuimgHead}>Virtual programs</span>
            <span className={styles.mcuimgBody}>
              We have something for all those living far away or running a busy
              life. All you need to do is book an appointment with our doctors
              and we shall reach back to you as soon as we can with our online
              program details and help you deal with it over an audio/video
              call.
            </span>
          </article>
        </div>
      </div>
      <div className={styles.OurHealingCenterDiv}>
        <img
          src='/flower2.png'
          alt=''
          className={styles.imgAbsolute5}
        />
        <img
          src='/flower2.png'
          alt=''
          className={styles.imgAbsolute6}
        />
        <span className={styles.OurHealingCenterSpan}>Our Healing Center</span>
        <div className={styles.OurHealingCenterMainDiv}>
          <div className={styles.OHCcard}>
            <img src="/Rectangle 3869.png" alt="" />
            <span>Relieve Ache & pains</span>
          </div>
          <div className={styles.OHCcard}>
            <img
              src='/Rectangle 38691.png'
              alt=''
            />
            <span>Healing & Strengthening</span>
          </div>
          <div className={styles.OHCcard}>
            <img
              src='/Rectangle 38692.png'
              alt=''
            />
            <span>Ayurveda Spa</span>
          </div>
        </div>
      </div>
      <div className={styles.OurProgramdiv}>
        <span className={styles.OurHealingCenterSpan}>Our Program</span>
        <div className={styles.OurProgrammaindiv}>
          {arr.map((val, key) => {
            return (
              <div className={styles.OPsqaures}>
                <div class={styles.borderbox}></div>
                <article>
                  <img
                    src={val.img}
                    alt=''
                    style={{ width: '45px', height: '45px' }}
                  />
                  <span>{val.name}</span>
                </article>
              </div>
            );
          })}
        </div>
      </div>
      <div className={styles.HealingStory}>
        <img src="/Group 1000001859.png" alt="" />
        <div className={styles.HSmainDiv}>
          <span className={styles.OurHealingCenterSpan}>Healing Story</span>
          <div
            style={{
              position: "relative",
              width: "63%",
              overflow: "hidden",
              marginLeft: "18px",
              // boxShadow: " 0px 4px 4px 0px #00000036",
              height: "fit-content",
            }}>
            <div
              style={{
                transform: `translateX(${translateX / images.length}%)`,
                transition: "transform 0.3s",
                display: "flex",
                overflow: "hidden",
                width: `${images.length * 100}%`,
              }}>
              {images.map((image, index) => (
                <div className={styles.HSmaindivDesdiv}>
                  “I have Diabetes for the last 20 years for which I have been
                  taking up to 20 units of insulin everyday along with other
                  regular medicines to control my sugar level. One of my
                  relatives informed me about Panchatattva and I planned a
                  visit. Within 2 months of following the diet plan, the results
                  were so positive that at present I no longer need insulin
                  shots and my other medicines have also been reduced to half.
                  I’m grateful to the entire team.”
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className={styles.dots}>
          {images.map((image, index) => (
            <span
              key={index}
              className={styles.dot}
              style={{
                width: index === activeDot ? "73px" : "41px",
                height: index === activeDot ? "73px" : "41px",
              }}
              onClick={() => goToImage(index)}>
              <img
                key={index}
                src={image}
                alt={`Image ${index + 1}`}
                style={{
                  width: index === activeDot ? "73px" : "41px",
                  height: index === activeDot ? "73px" : "41px",
                }}
              />
            </span>
          ))}
        </div>
        <button
          className={`${styles.navbutton}`}
          style={{ top: "242px", left: "63px" }}
          onClick={prevImage1}>
          <ArrowBackIosIcon
            style={{
              height: "71px",
              width: "71px",
            }}
          />
        </button>

        <button
          className={`${styles.navbutton}`}
          onClick={nextImage1}
          style={{ top: "242px", right: "63px" }}>
          <ArrowForwardIosIcon
            style={{
              height: "71px",
              width: "71px",
            }}
          />
        </button>
      </div>
      <div className={styles.BookApp}>
        <span className={styles.OurHealingCenterSpan}>Book Appointment </span>
        <div className={styles.OurHealingCentermainDiv}>
          <img
            src='/flower2.png'
            alt=''
            className={styles.imgAbsolute1}
          />
          <img
            src='/flower2.png'
            alt=''
            className={styles.imgAbsolute2}
          />
          <img
            src='/flower2.png'
            alt=''
            className={styles.imgAbsolute3}
          />
          <img
            src='/flower2.png'
            alt=''
            className={styles.imgAbsolute4}
          />
          <div className={styles.leftDivOH}>
            <img
              src='/Logo-2 1.png'
              alt=''
              style={{ width: '450px' }}
            />
            <div className={styles.OHcontactDiv}>
              <article>
                <img
                  src='/bxs_phone-call.png'
                  alt=''
                />
                <span>+91 8178546612</span>
              </article>
              <article>
                <img
                  src='/ic_sharp-email.png'
                  alt=''
                />
                <span>info@panchatattva.in</span>
              </article>
              <article>
                <img
                  src='/carbon_location-filled.png'
                  alt=''
                />
                <span>
                  Panchatattva, C-175, Sector 100, Noida, Uttar Pradesh – 201303
                </span>
              </article>
            </div>
          </div>
          <div className={styles.RightDivOH}>
            <div className={styles.form}>
              <input
                type='text'
                placeholder='Enter Full Name'
              />
              <input
                type='text'
                placeholder='Email'
              />
              <input
                type='text'
                placeholder='Phone Number'
              />
              <div className={styles.gridForm}>
                <select
                  name=''
                  id=''
                >
                  <option value=''>Male</option>
                  <option value=''>Female</option>
                </select>
                <select
                  name=''
                  id=''
                >
                  <option value=''>Male</option>
                  <option value=''>Female</option>
                </select>
                <select
                  name=''
                  id=''
                >
                  <option value=''>Male</option>
                  <option value=''>Female</option>
                </select>
                <select
                  name=''
                  id=''
                >
                  <option value=''>Male</option>
                  <option value=''>Female</option>
                </select>
                <input
                  placeholder='Type of Appointment'
                  type='text'
                />
                <select
                  name=''
                  id=''
                >
                  <option value=''>Male</option>
                  <option value=''>Female</option>
                </select>
                <div className={styles.radieoBtndiv}>
                  <article>
                    <label htmlFor='radio1'>In Person</label>
                    <input
                      type='radio'
                      name='Selction'
                      id='radio1'
                    />
                  </article>
                  <article>
                    <label htmlFor='radio2'>Virtual</label>
                    <input
                      type='radio'
                      name='Selction'
                      id='radio2'
                    />
                  </article>
                </div>
              </div>

              <textarea
                name=''
                id=''
                cols='30'
                rows='5'
                placeholder='Describe Health Issue'
              ></textarea>
              <button>Book Appointment</button>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.ReviewTestimonials}>
        <span className={styles.OurHealingCenterSpan}>
          Review & Testimonials
        </span>
        <div className={styles.ReviewTestimonialsMainDiv}>
          <div
            style={{
              background: 'white',
              position: 'absolute',
              zIndex: '10',
              top: '-60px',
              left: '50px',
              height: '344px',
              width: '220px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '8px',
            }}
          >
            <img
              height='336px'
              width='212px'
              src='https://images.unsplash.com/photo-1592621385645-e41659e8aabe?auto=format&fit=crop&q=80&w=1894&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              alt=''
              style={{
                borderRadius: '8px',
              }}
            />
          </div>

          <div className={styles.ReviewTestimonialsdescDiv}>
            <div></div>
            <div className={styles.ReviewTestimonialsdesc}>
              <div
                className={styles.rating}
                style={{ width: '100%' }}
              >
                <img
                  src='/Group 1000001872.png'
                  alt=''
                />
                4.5 rating
              </div>
              <span
                style={{
                  fontSize: '18px',
                  color: 'white',
                  opacity: '1',
                  display: 'flex',
                  alignItems: 'center',
                  zIndex: '20',
                }}
              >
                <p>
                  I recently visited the Ayurvedic Clinic and had a wonderful
                  experience. The staff was friendly and welcoming, creating a
                  warm and calming atmosphere.
                </p>
                <p style={{ fontSize: '40px', cursor: 'pointer' }}>{'>'}</p>
              </span>
              <article>
                <span>Elisa Grant</span>
                <p>Legacy Solution Engineer</p>
              </article>
            </div>
          </div>
          <div className={styles.backGrounddiv1}></div>
          <div className={styles.backGrounddiv2}></div>
        </div>
      </div>
    </div>
  );
}
