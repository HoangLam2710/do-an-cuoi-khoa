import { actionTypes } from "../actions/types";

const initialState = {
    loading: false,
};

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case actionTypes.SHOW_LOADING:
            state.loading = true;
            return { ...state };
        case actionTypes.HIDDEN_LOADING:
            state.loading = false;
            return { ...state };
        default:
            return state;
    }
};

export default reducer;
