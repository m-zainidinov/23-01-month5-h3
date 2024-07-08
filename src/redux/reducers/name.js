const ADD_NAME = 'ADD_NAME';
const SET_NAMES = 'SET_NAMES'

const initState = {
    names: [],
};

export default function (state = initState, action) {
    switch (action.type) {
        case ADD_NAME: {
            const newName = {
                name: action.name,
            };

            return {
                ...state,
                names: [newName, ...state.names]
            };
        }
        
        case SET_NAMES: {
            return {
                ...state,
                names: action.names,
            };
        }

        default: {
            return state
        }
    }
}

export const addName = (name) => {
    return (dispatch) => {
        return dispatch({ type: ADD_NAME, name })
    };
};

export const setNames = (names) => {
    return {
        type: SET_NAMES,
        names,
    };
};