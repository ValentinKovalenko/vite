import {CustomPrevArrowProps} from "./types.ts";
import styles from './CustomPrevArrow.module.scss';
import prev from '../../assets/icon/prev.png';

const CustomPrevArrow: React.FC<CustomPrevArrowProps> = (
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
                left: '-50px',
                zIndex: 10,
                justifyContent: 'center',
                alignItems: 'center',
                border: `2px solid ${borderColor}`,
                padding: '10px',
            }}
            onClick={onClick}
        >
            <img className={`${iconColor === '#DE742B' ? styles.customArrow__colorIcon : ''}`} src={prev} alt="Prev"/>
        </div>
    );
};

export default CustomPrevArrow;