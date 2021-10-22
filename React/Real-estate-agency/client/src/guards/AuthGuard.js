import { useContext, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router';

import { UserContext } from '../store/user-context';

const AuthGuard = ({ children }) => {
    const { user } = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();



    useEffect(() => {
        if (!user.username) {
            history.push('/login');
            return null;
        }

        if (user.username && (location.pathname === '/login' || location.pathname === '/register')) {
            history.push('/');
            return null;
        }
    }, [location.pathname, history, user.username]);

    return children;
};

export default AuthGuard;