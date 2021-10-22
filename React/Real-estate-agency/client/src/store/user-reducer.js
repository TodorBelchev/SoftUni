const initialState = {};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN':
            return action;
        case 'LOGOUT':
            return initialState;
        default:
            return initialState;
    }
};

export default userReducer;