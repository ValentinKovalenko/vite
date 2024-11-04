import styles from "./Reviews.module.scss";
import TextSlider from "../../components/TextSlider";


const Reviews = () => {
    return (
        <div id='reviews' className={styles.review}>
            <div className={styles.review__textBlock}>
                <p className={styles.review__textReview}>Відгуки</p>
                <div className={styles.review__text}>
                    <p className={styles.review__textTitle}>Що кажуть про нас</p>
                </div>
            </div>
            <TextSlider/>
        </div>
    );
};

export default Reviews;