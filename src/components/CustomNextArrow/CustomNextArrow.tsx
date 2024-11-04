import {CustomNextArrowProps} from "./types.ts";
import styles from './CustomNextArrow.module.scss'
import next from '../../assets/icon/next.png'

const CustomNextArrow: React.FC<CustomNextArrowProps> = (
    {
        className,
        style,
        onClick,
        borderColor = 'white',
        iconColor = 'white',
    }) => {
    return (
        <div
            className={`${className} ${styles.customArrow}`}
            style={{
                ...style,
                display: "block",
                borderRadius: "50%",
                right: '-50px',
                zIndex: 10,
                justifyContent: 'center',
                alignItems: 'center',
                border: `2px solid ${borderColor}`,
                padding: '10px'
            }}
            onClick={onClick}
        >
            <img className={`${iconColor === '#DE742B' ? styles.customArrow__colorIcon : ''}`} src={next} alt="Prev"/>
        </div>
    );
};

export default CustomNextArrow;