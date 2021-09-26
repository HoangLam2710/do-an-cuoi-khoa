import { actionTypes } from "../actions/types";

const initialState = {
    movieRoomData: { thongTinPhim: {} },
    bookingSeat: [],
    otherBookingSeat: [],
    bookTicketStatus: "",
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

        case actionTypes.BOOKING_TICKET:
            state.bookTicketStatus = payload;
            state.bookingSeat = [];
            return { ...state };
        case actionTypes.OTHER_BOOKING_SEAT:
            state.otherBookingSeat = payload;
            return { ...state };
        case "REMOVE_BOOK_STATUS":
            state.bookTicketStatus = "";
            return { ...state };
        default:
            return state;
    }
};

export default reducer;
