import { createAction } from "./index";
import { actionTypes } from "./types";
import { request } from "../../API/request";

export const getMovieRoomData = (id) => (dispatch) => {
    request({
        url: "https://movienew.cybersoft.edu.vn/api/QuanLyDatVe/LayDanhSachPhongVe",
        method: "GET",
        params: {
            MaLichChieu: id,
        },
    })
        .then((res) => {
            dispatch(
                createAction(actionTypes.SET_MOVIE_ROOM, res.data.content)
            );
        })
        .catch((err) => console.log(err));
};

export const bookingSeatAction =
    (seat, maLichChieu) => async (dispatch, getState) => {
        dispatch(createAction(actionTypes.BOOKING_SEAT, seat));

        // let bookingSeat = getState().booking.bookingSeat;
        // let userName = getState().user.user.taiKhoan;

        // bookingSeat = JSON.stringify(bookingSeat);

        // connection.invoke("datGhe", userName, bookingSeat, maLichChieu);
    };

export const bookingTicket = (ticketList) => async (dispatch) => {
  request({
    url: "https://movienew.cybersoft.edu.vn/api/QuanLyDatVe/DatVe",
    method: "POST",
    data: ticketList,
  })
        .then(async (res) => {
            dispatch(
                createAction(actionTypes.BOOKING_TICKET, res.data.content)
            );
            await dispatch(getMovieRoomData(ticketList.maLichChieu));
        })
        .catch((err) => console.log(err));
};

export const otherBookingSeatAction = (otherSeats) => (dispatch) => {
    console.log(otherSeats);
    dispatch(createAction(actionTypes.OTHER_BOOKING_SEAT, otherSeats));
};
