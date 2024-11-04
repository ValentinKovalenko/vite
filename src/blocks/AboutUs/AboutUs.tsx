import styles from './AboutUs.module.scss'
import calendar from '../../assets/images/calendar.png'
import book from '../../assets/images/open-book.png'
import female from '../../assets/images/female.png'
import success from '../../assets/images/success.png'
import handshake from '../../assets/images/handshake.png'
import student from '../../assets/images/student.png'
const AboutUs = () => {
    return (
        <div id='about' className={styles.about}>
            <div className={styles.about__textBlock}>
                <p className={styles.about__textAbout}>Про нас</p>
                <div className={styles.about__textSkool}>
                    <p className={styles.about__textTitle}>Мовних шкіл багато - лідер один!</p>
                </div>
            </div>
            <div className={styles.about__imagesBlock}>
                <div className={styles.about__imageBlockAndText}>
                    <img className={styles.about__image} src={calendar} alt='calendar'/>
                    <p className={styles.about__imageText}>6 років успішної роботи</p>
                </div>
                <div className={styles.about__imageBlockAndText}>
                    <img className={styles.about__image} src={book} alt='open book'/>
                    <p className={styles.about__imageText}>Сучасні програми й навчальні матеріали</p>
                </div>
                <div className={styles.about__imageBlockAndText}>
                    <img className={styles.about__image} src={female} alt='female'/>
                    <p className={styles.about__imageText}>Професійні викладачи</p>
                </div>
                <div className={styles.about__imageBlockAndText}>
                    <img className={styles.about__image} src={success} alt='success'/>
                    <p className={styles.about__imageText}>Переможець «Народний Бренд» (2018, 2019, 2020) </p>
                </div>
                <div className={styles.about__imageBlockAndText}>
                    <img className={styles.about__image} src={handshake} alt='handshake'/>
                    <p className={styles.about__imageText}>Топ партнер Cambridge Assessment English</p>
                </div>
                <div className={styles.about__imageBlockAndText}>
                    <img className={styles.about__image} src={student} alt='student'/>
                    <p className={styles.about__imageText}>Сотні наших випускників з високим рівнем</p>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;