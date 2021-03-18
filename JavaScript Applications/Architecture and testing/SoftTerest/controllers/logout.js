import { logoutReq } from '../data/api.js';
import { getUserData, removeUserData } from '../data/userData.js';

export const logout = () => {
    const userData = getUserData();
    logoutReq(userData.token);
    removeUserData();
};