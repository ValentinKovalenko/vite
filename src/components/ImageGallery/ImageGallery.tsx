import styles from './ImageGallery.module.scss'
import image1 from '../../assets/images/1.png'
import image2 from '../../assets/images/2.png'
import image3 from '../../assets/images/3.png'
import image4 from '../../assets/images/4.png'
import image5 from '../../assets/images/5.png'
import image6 from '../../assets/images/6.png'
import image7 from '../../assets/images/7.png'
import image8 from '../../assets/images/8.png'

const ImageGallery = () => {
    return (
        <div className={styles.container}>
            <img className={styles.img1} src={image1} alt="Image 1"/>
            <img className={styles.img2} src={image2} alt="Image 2"/>
            <img className={styles.img3} src={image3} alt="Image 3"/>
            <img className={styles.img4} src={image4} alt="Image 4"/>
            <img className={styles.img5} src={image5} alt="Image 5"/>
            <div className={styles.block}>
                <img className={styles.img6} src={image6} alt="Image 6"/>
                <div className={styles.smallBlock}>
                    <img className={styles.img7} src={image7} alt="Image 7"/>
                    <img className={styles.img8} src={image8} alt="Image 8"/>
                </div>
            </div>
        </div>
    );
};

export default ImageGallery;