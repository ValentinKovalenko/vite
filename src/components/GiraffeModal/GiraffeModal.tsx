import React, {FC, useState} from 'react';
import Modal, { Styles } from 'react-modal';
import { useModal } from '../../context/ModalContext.tsx';
import InputField from '../InputField';
import styles from './GiraffeModal.module.scss';
import {GiraffeModalProps} from "./types.ts";

const modalStyle:Styles  = {
    overlay: {
        position: 'fixed',
        zIndex: 1020,
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        background: 'rgba(0, 0, 0, 0.75)',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    content: {
        display: 'flex',
        justifyContent: 'center',
        background: 'white',
        width: '25%',
        minHeight: '30%',
        maxWidth: 'calc(100vw - 1rem)',
        maxHeight: 'calc(100vh - 1rem)',
        position: 'relative',
        overflow: 'hidden',
        borderRadius: '40px',
    }
};

Modal.setAppElement('#root');

const GiraffeModal: FC<GiraffeModalProps> = () => {
    const { isModalOpen, closeModal } = useModal();
    const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
    const [name, setName] = useState<string>("");
    const [phone, setPhone] = useState<string>("");
    const [isPhoneValid, setIsPhoneValid] = useState<boolean>(false);

    const validatePhone = (value: string): boolean => {
        const phoneRegex = /^\+380\d{9}$/;
        setIsPhoneValid(phoneRegex.test(value));
        return isPhoneValid;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!name || !phone || !validatePhone(phone)) return;
        setIsSubmitted(true);
        setName("");
        setPhone("");
    };

    return (
        isModalOpen && (
            <Modal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                contentLabel="Giraffe Club Modal"
                style={modalStyle}
            >
            <button onClick={closeModal} className={styles.closeButton}>✕</button>
            {!isSubmitted ? (
                <form onSubmit={handleSubmit}>
                    <h2>Отримай консультацію</h2>
                    <InputField
                        autoFocus={true}
                        type="text"
                        placeholder="Ім'я"
                        value={name}
                        onChange={setName}
                        required={true}
                    />
                    <InputField
                        type="tel"
                        placeholder="+380XXXXXXXXX"
                        value={phone}
                        onChange={setPhone}
                        required={true}
                        validate={validatePhone}
                    />
                    <div className={styles.buttonStyle}>
                    <button type="submit" className={styles.submitButton}>
                        Надіслати
                    </button>
                    </div>
                </form>
            ) : (
                <div className={styles.successMessage}>
                    <h3>Дякую!</h3>
                    <p>Ваш запит надіслано. Чекайте дзвінка.</p>
                </div>
            )}
            </Modal>
        )
    );
};

export default GiraffeModal;