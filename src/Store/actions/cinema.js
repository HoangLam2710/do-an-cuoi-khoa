import { createAction } from "./index";
import { actionTypes } from "./types";
import { request } from "../../API/request";

export const fetchCinemas = (dispatch) => {
    request({
        url: "https://movienew.cybersoft.edu.vn/api/QuanLyRap/LayThongTinHeThongRap",
        method: "GET",
    })
        .then((res) => {
            dispatch(
                createAction(actionTypes.SET_CINEMALIST, res.data.content)
            );
        })
        .catch((err) => console.log(err));
};

export const fetchCumRap = (maHeThongRap) => (dispatch) => {
    request({
        url: "https://movienew.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuHeThongRap",
        method: "GET",
        params: {
            maHeThongRap,
            maNhom: "GP01",
        },
    })
        .then((res) => {
            dispatch(createAction(actionTypes.SET_CUMRAP, res.data.content));
        })
        .catch((err) => console.log(err));
};
