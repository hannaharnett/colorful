import React from 'react';
import styles from '../styles/Button.module.css';

function Button(props) {
    const { filled, text, onClick } = props;
    const btnStyle = filled ? `${styles.filled}` : `${styles.outlined}`;
    return (
        <button className={`${styles.btn} ${btnStyle}`} onClick={onClick}>{text}</button>
    )
}

export default Button;