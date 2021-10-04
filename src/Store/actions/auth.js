import { createAction } from "./index";
import { actionTypes } from "./types";
import { request } from "../../API/request";
import { toast } from "react-toastify";

export const signUpUser = (user, callback) => () => {
    request({
        url: "https://movienew.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy",
        method: "POST",
        data: user,
    })
        .then((res) => {
            callback();
        })
        .catch((err) => {
            toast.warn(err.response.data.content, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        });
};

export const signInUser = (user, callback) => (dispatch) => {
    request({
        url: "https://movienew.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
        method: "POST",
        data: user,
    })
        .then((res) => {
            dispatch(createAction(actionTypes.SET_USER, res.data.content));
            localStorage.setItem("t", res.data.content.accessToken);
            localStorage.setItem("taiKhoan", res.data.content.taiKhoan);
            // clear localStorage after one hour
            setTimeout(function () {
                localStorage.clear();
            }, 1000 * 60 * 60);
            callback();
        })
        .catch((err) => {
            toast.warn(err.response.data.content, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        });
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
