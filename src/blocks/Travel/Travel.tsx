import styles from './Travel.module.scss'
import {travelTest} from "../../consts";
import ImageGallery from "../../components/ImageGallery";
const Travel = () => {
    return (
        <div id='travels' className={styles.travel}>
            <div className={styles.travel__textBlock}>
                <p className={styles.travel__textTravel}>Наші подорожі</p>
                <div className={styles.travel__text}>
                    <p className={styles.travel__textTitle}>Ми подорожуємо світом</p>
                </div>
            </div>
            <div className={styles.travel__geoText}>
                <p>Лондон, Греція, Болгарія, Польша, різні міста України.</p>
                <p>{travelTest}</p>
            </div>
            <ImageGallery/>
        </div>
    );
};

export default Travel;