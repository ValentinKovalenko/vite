import React, {useState} from 'react';
import styles from './InputField.module.scss';
import {InputFieldProps} from './types.ts';

const InputField: React.FC<InputFieldProps> = ({
                                                   label,
                                                   type,
                                                   placeholder,
                                                   value,
                                                   onChange,
                                                   required = false,
                                                   validate,
                                                   autoFocus,
                                               }) => {
    const [error, setError] = useState<string>("");

    const handleBlur = () => {
        if (required && !value) {
            setError("Це поле обов'язкове");
            return;
        }
        if (validate && !validate(value)) {
            setError("Невірний формат");
            return;
        }
        setError("");
    };

    return (
        <div className={styles.inputContainer}>
            <label>{label}</label>
            <input
                autoFocus={autoFocus}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={(e) => {
                    onChange(e.target.value);
                    setError("");
                }}
                onBlur={handleBlur}
                className={error ? styles.errorInput : ""}
            />
            <div className={styles.blockError}>
                {error && <span className={styles.errorText}>{error}</span>}
            </div>
        </div>
    );
};

export default InputField;