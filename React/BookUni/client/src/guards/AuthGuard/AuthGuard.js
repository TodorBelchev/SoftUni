
import { useContext, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router';

import { UserContext } from '../../context/userContext';

const AuthGuard = ({ children }) => {
    const { user } = useContext(UserContext);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (!user.username) {
            navigate('/login');
            return null;
        }

        if (user.username && (location.pathname === '/login' || location.pathname === '/register')) {
            navigate('/');
            return null;
        }
    }, [location.pathname, navigate, user.username]);

    return children;
};

export default AuthGuard;