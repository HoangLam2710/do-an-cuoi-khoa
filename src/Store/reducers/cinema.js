import { actionTypes } from "../actions/types";

const initialState = {
  cinemaList: [],
  listCumRap: [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.SET_CINEMAS:
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
