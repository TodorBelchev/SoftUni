import React from 'react';
import ReactDOM from 'react-dom';

import classes from './Notification.module.css';

const Notification = ({ message }) => {
    return (
        <React.Fragment>
            {ReactDOM.createPortal(
                <div>
                    <div class={classes.errorContainer}>
                        <p>{message}</p>
                    </div>
                </div>,
                document.getElementById('notification')
            )}
        </React.Fragment>
    )
};

export default Notification;