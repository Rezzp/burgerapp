import React, { Fragment } from 'react';
import styles from './Modal.module.css';
import ReactDOM from 'react-dom';


const Backdrop = props => {
    return (
        <div className={styles.backdrop} onClick={props.onClick} key={1}></div>
    );
};

const ModalDisplay = props => {
    return (
        <div className={styles.modal}>
            <div className={styles.content}>
                {props.children}
            </div>
        </div>
    );
};


const Modal = props => {
    return (
        <Fragment>
            {ReactDOM.createPortal(<Backdrop onClick={props.onClick}></Backdrop>, document.getElementById('overlay'))}

            {ReactDOM.createPortal(<ModalDisplay>{props.children}</ModalDisplay>, document.getElementById('overlay'))}
        </Fragment>
    );
};
export default Modal;