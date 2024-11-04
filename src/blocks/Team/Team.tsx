import styles from './Team.module.scss'
import ImageSlider from "../../components/ImageSlider/ImageSlider.tsx";

const Team = () => {
    return (
        <div id='team' className={styles.team}>
            <div className={styles.team__textBlock}>
                <p className={styles.team__textTravel}>Наша команда</p>
                <div className={styles.team__text}>
                    <p className={styles.team__textTitle}>Найкраща команда - найкращі результати</p>
                </div>
            </div>
            <ImageSlider />
        </div>
    );
};

export default Team;