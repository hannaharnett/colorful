import React, { createContext, useEffect, createRef } from 'react';
import { createPortal } from 'react-dom';
import styles from '../styles/Modal.module.css';

const modalContext = createContext();

export default function Modal({ children, onModalClose }) {
    useEffect(() => {
        const keyListener = ((e) => {
            const listener = keyListenersMap.get(e.keyCode || e.key); // cross-browser
            return listener && listener(e);
        });
        document.addEventListener("keydown", keyListener);
        return () => document.removeEventListener("keydown", keyListener);
    });

    const modalRef = createRef();

    const handleTabPress = (e) => {
        const focusableElements = modalRef.current.querySelectorAll(
            'a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select'
        );
        const firstEl = focusableElements[0];
        const lastEl = focusableElements[focusableElements.length - 1];

        if (!e.shiftKey && document.activeElement !== firstEl) {
            firstEl.focus();
            return e.preventDefault();
        }
        if (e.shiftKey && document.activeElement !== lastEl) {
            lastEl.focus();
            return e.preventDefault();
        }
    };

    const keyListenersMap = new Map([[27, onModalClose], ["Escape", onModalClose], [9, handleTabPress]]);

    return createPortal(
        <div className={styles.modalContainer} role="dialog" aria-modal="true">
            <div className={styles.modalContent} ref={modalRef}>
                <modalContext.Provider value={{ onModalClose }}>
                    {children}
                </modalContext.Provider>
            </div>
        </div>,
        document.body
    );
}