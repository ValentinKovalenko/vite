import Slider from 'react-slick';
import CustomPrevArrow from "../CustomPrevArrow";
import CustomNextArrow from "../CustomNextArrow";
import {reviews} from "../../consts";
import pict from '../../assets/images/pict.png'
import styles from './TextSlider.module.scss'

const TextSlider = () => {
    const settings = {
        style:{ padding: "0 20px" },
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: <CustomPrevArrow borderColor='#DE742B' iconColor='#DE742B'/>,
        nextArrow: <CustomNextArrow borderColor='#DE742B' iconColor='#DE742B'/>,
    };

    return (
        <div>
            <Slider {...settings}>
                {reviews.map((item) =>
                    <div className={styles.slider} key={item.id}>
                        <div className={styles.slider__block}>
                        <div className={styles.slider__header}>
                            <div>
                                <p className={styles.slider__name}>{item.name}</p>
                                <p className={styles.slider__text}>{item.major}</p>
                            </div>
                            <img src={pict} alt='pict'/>
                        </div>
                        <p className={styles.slider__text}>{item.value}</p>
                        </div>
                    </div>
                )}
            </Slider>
        </div>
    );
};

export default TextSlider;