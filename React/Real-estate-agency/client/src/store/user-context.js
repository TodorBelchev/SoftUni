import React, { useState } from "react";

export const UserContext = React.createContext({
    user: {},
    login: (user) => { }
});

const UserProvider = props => {
    const [user, setUser] = useState({});
    const login = (user) => {
        setUser(user);
    }

    return (
        <UserContext.Provider value={{ user, login }}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserProvider;