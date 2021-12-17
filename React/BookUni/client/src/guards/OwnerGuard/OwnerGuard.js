
import { useContext, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router';

import { UserContext } from '../../context/userContext';

const OwnerGuard = ({ children }) => {
    const { user } = useContext(UserContext);
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        if (!user.offeredHotels.includes(id)) {
            navigate('/');
            return null;
        }
    }, [navigate, user.offeredHotels, id]);

    return children;
};

export default OwnerGuard;