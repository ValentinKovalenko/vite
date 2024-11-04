import styles from './DirectionsWork.module.scss'
import {services} from "../../consts";
import pict from '../../assets/images/pict.png'
import {useModal} from "../../context/ModalContext.tsx";

const DirectionsWork = () => {
    const { openModal } = useModal();
    return (
        <div id='directions' className={styles.work}>
            <div className={styles.work__textBlock}>
                <p className={styles.work__textWork}>Напрямки роботи</p>
                <div className={styles.work__text}>
                    <p className={styles.work__textTitle}>Що ти можеш у нас знайти?</p>
                </div>
            </div>
            <div className={styles.work__directionsBlock}>
                <img className={styles.work__directionsBlock__image} src={pict} alt='pict'/>
                <ul className={styles.work__servicesList}>
                    {services.map((service) =>
                        <li key={service.id}>
                            <span className={styles.number}>{service.id}</span>
                            <span className={styles.description}>{service.value}</span>
                        </li>
                    )}
                </ul>
                <img className={styles.work__directionsBlock__image} src={pict} alt='pict'/>
            </div>
            <div className={styles.work__buttonBlock}>
                <button onClick={openModal} className={styles.work__button}>Залишити заявку</button>
            </div>
        </div>
    );
};

export default DirectionsWork;