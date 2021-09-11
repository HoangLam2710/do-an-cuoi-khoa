import { createAction } from "./index";
import { actionTypes } from "./types";
import { request } from "../../API/request";

export const signInUser = (user, callback) => () => {
    request({
        url: "https://movienew.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy",
        method: "POST",
        data: user,
    })
        .then((res) => {
            callback();
        })
        .catch((err) => console.log(err));
};

export const signUpUser = (user, callback) => (dispatch) => {
    request({
        url: "https://movienew.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
        method: "POST",
        data: user,
    })
        .then((res) => {
            dispatch(createAction(actionTypes.SET_USER, res.data.content));
            localStorage.setItem("t", res.data.content.accessToken);
            localStorage.setItem("taiKhoan", res.data.content.taiKhoan);
            callback();
        })
        .catch((err) => console.log(err));
};

export const getUser = (dispatch) => {
    request({
        url: "https://movienew.cybersoft.edu.vn/api/QuanLyNguoiDung/ThongTinTaiKhoan",
        method: "POST",
        data: {
            taiKhoan: localStorage.getItem("taiKhoan"),
        },
    })
        .then((res) => {
            console.log(res);
            dispatch(createAction(actionTypes.SET_USER, res.data.content));
        })
        .catch((err) => console.log(err));
};
