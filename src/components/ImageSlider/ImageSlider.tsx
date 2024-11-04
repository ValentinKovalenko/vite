import Slider from "react-slick";
import CustomNextArrow from "../CustomNextArrow";
import CustomPrevArrow from "../CustomPrevArrow";
import girl1 from '../../assets/images/girl1.png'
import girl2 from '../../assets/images/girl2.png'
import girl3 from '../../assets/images/girl3.png'
import styles from './ImageSlider.module.scss'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ImageSlider = () => {
    const settings = {
        infinite: true,
        speed: 1000,
        autoplay: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerPadding: "0",
        prevArrow: <CustomPrevArrow/>,
        nextArrow: <CustomNextArrow/>,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    centerMode: false,
                }
            }
        ]
    };

    return (
        <Slider {...settings}>
            <div className={styles.slideWrapper}>
                <div className={styles.slide}>
                    <img src={girl1} alt="girl1"/>
                    <div className={styles.text}>
                        <p className={styles.text__title}>Валерія Звірянська</p>
                        <p className={styles.text__text}>Адміністратор</p>
                    </div>
                </div>
            </div>
            <div className={styles.slideWrapper}>
                <div className={styles.slide}>
                    <img src={girl2} alt="image2"/>
                    <div className={styles.text}>
                        <p className={styles.text__title}>Ольга Мануйлова</p>
                        <p className={styles.text__text}>Засновниця школи</p>
                    </div>
                </div>
            </div>
            <div className={styles.slideWrapper}>
                <div className={styles.slide}>
                    <img src={girl3} alt="image3"/>
                    <div className={styles.text}>
                        <p className={styles.text__title}>Наталія Шмалько</p>
                        <p className={styles.text__text}>Адміністратор</p>
                    </div>
                </div>
            </div>
        </Slider>
    );
}

export default ImageSlider;