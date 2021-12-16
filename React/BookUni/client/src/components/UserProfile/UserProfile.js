import { useContext } from 'react';

import { UserContext } from '../../context/userContext';

const UserProfile = () => {
    const { user } = useContext(UserContext);
    return (
        <section id="viewhotelDetails">
            <div className="profile">
                <img src="/img/profile.png" alt="default user" />
                <h3>User Info:</h3>
                <div className="flex">
                    <p>Username: </p>
                    <p>{user.username}</p>
                </div>
                <div className="flex">
                    <p>Email: </p>
                    <p>{user.email}</p>
                </div>
                <div className="flex">
                    <p>Reservations: </p>
                    <p>
                        <span>
                            {user.bookedHotels.join(', ') || 'none'}
                        </span>
                    </p>
                </div>
            </div>
        </section>
    )
};

export default UserProfile;