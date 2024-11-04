import styles from './Footer.module.scss';
import facebook from '../../assets/icon/facebook.png';
import icon from '../../assets/icon/IconInstagram.png';

const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.logoFooter}>Giraffe Club</div>
            <div className={styles.footerText}>
                <p>Номер телефону:</p>
                <a href='tel:+38 050 843 91 68'>+38 050 843 91 68</a>
            </div>
            <div className={styles.footerText}>
                <p>Email:</p>
                <a href='mailto:info@giraffe.in.ua'>info@giraffe.in.ua</a>
            </div>
            <div className={styles.footerText}>
                <p>Адреса:</p>
                <div>м. Кропивницький, вул. Соборна, 1а</div>
            </div>
            <div className={styles.footerText}>
                <p>Соціальні мережі:</p>
                <span className={styles.footerImg}><img src={facebook} alt='facebook'/><img src={icon} alt='IconInstagram'/></span>
            </div>
        </footer>
    );
};

export default Footer;