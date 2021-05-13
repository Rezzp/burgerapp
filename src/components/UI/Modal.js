import React, { Fragment } from 'react';
import styles from './Modal.module.css';
import ReactDOM from 'react-dom';


const Backdrop = props => {
    return (
        <div className={styles.backdrop}></div>
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
            {ReactDOM.createPortal(<Backdrop></Backdrop>, document.getElementById('overlay'))}

            {ReactDOM.createPortal(<ModalDisplay>{props.children}</ModalDisplay>, document.getElementById('overlay'))}
        </Fragment>
    );
};
export default Modal;