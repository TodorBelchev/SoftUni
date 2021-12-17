const Notification = ({ text }) => {
    return (
        <div>
            <div className="notification errorBox">
                <span>{text}</span>
            </div>
        </div>
    )
};

export default Notification;