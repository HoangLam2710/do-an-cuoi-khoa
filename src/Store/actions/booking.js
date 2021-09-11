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
      dispatch(createAction(actionTypes.SET_MOVIE_ROOM, res.data.content));
    })
    .catch((err) => console.log(err));
};

export const bookingSeatAction = (seat) => (dispatch) => {
  dispatch(createAction(actionTypes.BOOKING_SEAT, seat));
};
