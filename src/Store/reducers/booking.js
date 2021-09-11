import { actionTypes } from "../actions/types";

const initialState = {
  movieRoomData: { thongTinPhim: {} },
  bookingSeat: [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.SET_MOVIE_ROOM:
      state.movieRoomData = payload;
      return { ...state };

    case actionTypes.BOOKING_SEAT:
      const cloneBookingSeat = [...state.bookingSeat];
      let checkBooking = cloneBookingSeat.findIndex(
        (item) => item.maGhe === payload.maGhe
      );
      if (checkBooking !== -1) {
        cloneBookingSeat.splice(checkBooking, 1);
      } else {
        cloneBookingSeat.push(payload);
      }
      return { ...state, bookingSeat: cloneBookingSeat };
    default:
      return state;
  }
};

export default reducer;
