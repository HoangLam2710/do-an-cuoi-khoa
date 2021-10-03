import React, { memo, useCallback } from "react";
import { useHistory } from "react-router";
import { Typography, Box, Button } from "@material-ui/core";
import { AccessTime } from "@material-ui/icons";
import * as dayjs from "dayjs";

import { toast } from "react-toastify";
import "../../../node_modules/react-toastify/dist/ReactToastify.css";

import useStyle from "./style";

const ShowTime = (props) => {
    const classes = useStyle();
    const { hot, hinhAnh, tenPhim, lstLichChieuTheoPhim } = props.phim || {};

    const history = useHistory();

    const alertSignIn = useCallback(
        (maLichChieu) => {
            if (!localStorage.getItem("t")) {
                return toast.warn("Xin vui lòng đăng nhập để đặt vé!!!", {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            }
            return history.push(`/ticketroom/${maLichChieu}`);
        },
        [history]
    );

    return (
        <Box className={classes.showtimeWrap}>
            <img src={hinhAnh} alt={tenPhim} />
            <Box className={classes.showtimeCinema}>
                <Typography variant="body2">
                    {hot && <span>BOM TẤN</span>} {tenPhim}
                </Typography>
                <Box className={classes.showtime}>
                    <AccessTime></AccessTime>
                    <Typography variant="caption">Thời gian chiếu</Typography>
                    <Box>
                        {lstLichChieuTheoPhim?.slice(0, 6).map((lichchieu) => {
                            return (
                                <Button
                                    key={lichchieu.maLichChieu}
                                    className={classes.time}
                                    onClick={() =>
                                        alertSignIn(lichchieu.maLichChieu)
                                    }
                                >
                                    {dayjs(lichchieu.ngayChieuGioChieu).format(
                                        "HH:mm"
                                    )}
                                </Button>
                            );
                        })}
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default memo(ShowTime);
