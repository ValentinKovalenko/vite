import styles from './CourseCard.module.scss'
import {CourseCardProps} from "./types.ts";
const CourseCard:React.FC<CourseCardProps> = ({number, title, value}) => {
    return (
        <div className={styles.course}>
            <div className={styles.course__number}>
                <span>{number}</span>
            </div>
            <div className={styles.course__textBlock}>
                <p className={styles.course__textBlock__title}>{title}</p>
                <p className={styles.course__textBlock__text}>{value}</p>
            </div>
        </div>
    );
};

export default CourseCard;