import styles from './Education.module.scss'
import {courseFormatList, educationList} from "../../consts";
import lesson from '../../assets/images/lesson.png'
import CourseCard from "../../components/CourseCard";
const Education = () => {
    return (
        <div id='education' className={styles.education}>
            <p className={styles.education__text}>Навчання</p>
            <div className={styles.education__firstBlock}>
                <div>
                    <p className={styles.education__textTitle}>Вивчення іноземної мови</p>
                    <ul className={styles.education__educationList}>
                        {educationList.map((service) =>
                            <li key={service.id}>
                                <span className={styles.educationNumber}>{service.id}</span>
                                <span className={styles.description}>{service.value}</span>
                            </li>
                        )}
                    </ul>
                </div>
                <img className={styles.education__imageLesson} src={lesson} alt='lesson'/>
            </div>
            <div>
                <div className={styles.education__courseFormats}>
                    <p className={styles.education__textTitle}>Формати курсів:</p>
                </div>
                <div className={styles.education__listBlock}>
                    {courseFormatList.map((item)=>
                        <CourseCard key={item.id} number={item.id} title={item.title} value={item.value}/>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Education;