const initialState = {};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN':
            return action;
        default:
            return initialState;
    }
};

export default userReducer;