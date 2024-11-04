import pict from '../../assets/images/pict.png';
import styles from './Main.module.scss';
import polygon from "../../assets/images/Polygon 2.png";
import {useModal} from "../../context/ModalContext.tsx";

const Main = () => {
    const { openModal } = useModal();
    return (
        <>
           <div className={styles.main}>
               <img className={styles.imagePolygon} src={polygon} alt='polygon'/>
               <div className={styles.textBlock}>
                   <h1>Giraffe Club</h1>
                   <p>Офіційний сертифікований центр підготовки до міжнародних екзаменів Cambrige</p>
                   <button className={styles.button} onClick={openModal}>Отримати консультацію</button>
               </div>
               <div className={styles.imageBlock}>
                   <img className={styles.image} src={pict} alt='pict'/>
               </div>
           </div>
        </>
    );
};

export default Main;