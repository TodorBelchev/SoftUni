
import { useContext, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router';

import { UserContext } from '../../context/userContext';

const ProfileGuard = ({ children }) => {
    const { user } = useContext(UserContext);
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        if (user._id !== id) {
            navigate('/');
            return null;
        }
    }, [navigate, user._id, id]);

    return children;
};

export default ProfileGuard;