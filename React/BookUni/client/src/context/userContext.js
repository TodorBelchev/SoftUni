import React, { useState } from "react";

export const UserContext = React.createContext();

const UserProvider = props => {
    const [user, setUser] = useState({});
    const login = (user) => {
        setUser(user);
    }
    const logout = () => {
        setUser({});
    }

    return (
        <UserContext.Provider value={{ user, login, logout }}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserProvider;