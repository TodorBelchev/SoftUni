export const getUserData = () => {
    return JSON.parse(sessionStorage.getItem('userData'));
}

export const saveUserData = (userData) => {
    sessionStorage.setItem('userData', JSON.stringify({
        email: userData.email, token: userData.accessToken, _id: userData._id
    }));
}

export const removeUserData = () => {
    sessionStorage.removeItem('userData');
}