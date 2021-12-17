import React, { useState } from "react";

export const UserContext = React.createContext();

const initialState = {
    _id: '',
    email: '',
    username: '',
    bookedHotels: [],
    offeredHotels: []
};

const UserProvider = props => {
    const [user, setUser] = useState(initialState);

    const login = (user) => {
        setUser(user);
    };

    const logout = () => {
        setUser(initialState);
    };

    const onAddedHotel = (hotelId) => {
        setUser(state => {
            return {
                ...state,
                offeredHotels: [...state.offeredHotels, hotelId]
            }
        });
    };

    const onBookHotel = (hotelId) => {
        setUser(state => {
            return {
                ...state,
                bookedHotels: [...state.bookedHotels, hotelId]
            }
        });
    }

    return (
        <UserContext.Provider value={{ user, login, logout, onAddedHotel, onBookHotel }}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserProvider;