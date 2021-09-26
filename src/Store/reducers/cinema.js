import { actionTypes } from "../actions/types";

const initialState = {
    cinema: [],
    cinemaList: [],
    listCumRap: [],
};

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case actionTypes.SET_CINEMA:
            state.cinema = payload;
            return { ...state };
        case actionTypes.SET_CINEMALIST:
            state.cinemaList = payload;
            return { ...state };
        case actionTypes.SET_CUMRAP:
            state.listCumRap = payload;
            return { ...state };
        default:
            return state;
    }
};

export default reducer;
