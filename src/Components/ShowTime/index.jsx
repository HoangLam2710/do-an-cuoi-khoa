import React from "react";
import { Typography, Box } from "@material-ui/core";
import useStyle from "./style";
import { AccessTime } from "@material-ui/icons";

const ShowTime = (props) => {
    const classes = useStyle();
    const { hot, hinhAnh, tenPhim, lstLichChieuTheoPhim } = props.phim || {};
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
                    {lstLichChieuTheoPhim.map((lichchieu) => {
                        return (
                            <Typography
                                key={lichchieu.maLichChieu}
                                className={classes.time}
                            >
                                {lichchieu.ngayChieuGioChieu
                                    .split("T")[1]
                                    .slice(0, 5)}
                            </Typography>
                        );
                    })}
                </Box>
            </Box>
        </Box>
    );
};

export default ShowTime;
