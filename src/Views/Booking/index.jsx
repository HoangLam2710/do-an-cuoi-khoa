import React, { Fragment, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
    Container,
    Grid,
    Typography,
    Box,
    Button,
    Modal,
} from "@material-ui/core";
import ClearIcon from "@material-ui/icons/Clear";
import { CustomCard } from "@tsamantanis/react-glassmorphism";

import {
    getMovieRoomData,
    bookingSeatAction,
    bookingTicket,
} from "../../Store/actions/booking";
import { createAction } from "../../Store/actions";
import { actionTypes } from "../../Store/actions/types";

import classNames from "classnames";
import useStyle from "./style";
import "@tsamantanis/react-glassmorphism/dist/index.css";

const Booking = (props) => {
    const classes = useStyle();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(createAction(actionTypes.SHOW_LOADING));
        window.scroll({ top: 0, behavior: "smooth" });

        dispatch(getMovieRoomData(props.match.params.id));

        setTimeout(() => {
            dispatch(createAction(actionTypes.HIDDEN_LOADING));
        }, 2000);

        // connection.on("loadDanhSachGheDaDat", (dsGheKhachDat) => {
        //   // dsGheKhachDat = dsGheKhachDat.filter(
        //   //   (item) => item.taiKhoan !== userInfoData.taiKhoan
        //   // );

        //   // let otherBookedSeat = dsGheKhachDat.reduce((res, item, index) => {
        //   //   let arrSeat = JSON.parse(item.danhSachGhe);
        //   console.log("dansachghedadat", dsGheKhachDat);
        //   //   return [...res, ...arrSeat];
        //   // }, []);
        //   // dispatch(otherBookingSeatAction(otherBookedSeat));
        // });

        // connection.on("loadDanhSachGheDaDat", (dsGheKhachDat) => {
        //   console.log("dsGheKhachDat", dsGheKhachDat);
        // });
    }, [dispatch, props.match.params.id]);

    const movieRoomData = useSelector((state) => {
        return state.booking.movieRoomData;
    });

    const bookingSeatData = useSelector((state) => {
        return state.booking.bookingSeat;
    });

    const otherBookingSeatData = useSelector((state) => {
        return state.booking.otherBookingSeat;
    });

    const userInfoData = useSelector((state) => {
        return state.user?.user;
    });

    const bookTicketStatus = useSelector((state) => {
        return state.booking?.bookTicketStatus;
    });

    const { thongTinPhim, danhSachGhe } = movieRoomData;
    const { tenPhim, tenRap, hinhAnh, ngayChieu, gioChieu, tenCumRap } =
        thongTinPhim;

    const handleBookingSeat = (seat) => {
        dispatch(bookingSeatAction(seat, props.match.params.id));
    };

    const numberWithCommas = (x) => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    };

    const renderSeats = () => {
        return danhSachGhe?.map((seat, index) => {
            const vipSeatClass = seat.loaiGhe === "Vip" ? classes.vipSeat : "";
            const alreadyBookedSeatClass =
                seat.daDat === true ? classes.alreadyBookedSeat : "";

            let bookingSeatIndex = bookingSeatData.findIndex(
                (item) => item.maGhe === seat.maGhe
            );
            const bookingSeatClass =
                bookingSeatIndex !== -1 ? classes.bookingSeat : "";

            let otherBookingSeatIndex = otherBookingSeatData.findIndex(
                (item) => item.maGhe === seat.maGhe
            );

            const otherBookingSeatClass =
                otherBookingSeatIndex !== -1 ? classes.otherBookingSeat : "";
            return (
                <Fragment key={index}>
                    <button
                        key={index}
                        onClick={() => handleBookingSeat(seat)}
                        disabled={seat.daDat || otherBookingSeatClass !== ""}
                        className={classNames(
                            classes.normalSeat,
                            vipSeatClass,
                            alreadyBookedSeatClass,
                            bookingSeatClass,
                            otherBookingSeatClass
                        )}
                    >
                        {seat.daDat ? (
                            <ClearIcon
                                style={{ fontSize: "16px", fontWeight: "700" }}
                            />
                        ) : otherBookingSeatClass !== "" ? (
                            "~"
                        ) : (
                            seat.tenGhe
                        )}
                    </button>
                    {(index + 1) % 16 === 0 ? (
                        <br className={classes.break} />
                    ) : (
                        ""
                    )}
                </Fragment>
            );
        });
    };

    const handleBookTicket = (ticketList) => {
        dispatch(bookingTicket(ticketList));
    };

    function getModalStyle() {
        const top = 50;
        const left = 50;

        return {
            top: `${top}%`,
            left: `${left}%`,
            transform: `translate(-${top}%, -${left}%)`,
        };
    }

    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const status = useRef(bookTicketStatus);

    useEffect(() => {
        if (bookTicketStatus !== "") {
            status.current = bookTicketStatus;
            handleOpen();
        }
        dispatch({
            type: "REMOVE_BOOK_STATUS",
        });
    }, [bookTicketStatus, dispatch, status]);

    const [modalStyle] = React.useState(getModalStyle);

    const body = (
        <div style={modalStyle} className={classes.paper}>
            <h2 id="simple-modal-title">{status.current}</h2>
        </div>
    );

    return (
        <>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                {body}
            </Modal>
            <div
                style={{
                    backgroundImage: `url(${hinhAnh})`,
                    minHeight: "100vh",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <CustomCard
                    effectColor="#000000" // required
                    color="#fff" // default color is white
                    blur={7} // default blur value is 10px
                    borderRadius={0} // default border radius value is 10px
                    style={{ minHeight: "100vh" }}
                    className={classes.customCard}
                >
                    <Container
                        id="detailContainer"
                        style={{
                            margin: "20px auto",
                        }}
                    >
                        <Grid container spacing={8}>
                            <Grid item xs={12} sm={12} md={12} lg={8}>
                                <Box>
                                    <div>
                                        <img
                                            width="100%"
                                            height="100%"
                                            alt="complex"
                                            src="../assets/img/screen.png"
                                            className={classes.movieImg}
                                        />
                                    </div>
                                </Box>
                                <div className={classes.seatsContainer}>
                                    {renderSeats()}
                                </div>
                                <div className={classes.seatNote}>
                                    <div className={classes.seatNoteItem}>
                                        <button
                                            className={classes.normalSeatNote}
                                        ></button>{" "}
                                        <span
                                            className={
                                                classes.normalSeatNoteTxt
                                            }
                                        >
                                            Ghế thường
                                        </span>
                                    </div>
                                    <div className={classes.seatNoteItem}>
                                        <button
                                            className={classNames(
                                                classes.normalSeatNote,
                                                classes.vipSeat
                                            )}
                                        ></button>{" "}
                                        <span>Ghế VIP</span>
                                    </div>
                                    <div className={classes.seatNoteItem}>
                                        <button
                                            className={classNames(
                                                classes.normalSeatNote,
                                                classes.bookingSeat
                                            )}
                                        ></button>{" "}
                                        <span>Ghế đang chọn</span>
                                    </div>
                                    <div className={classes.seatNoteItem}>
                                        <button
                                            className={classNames(
                                                classes.normalSeatNote,
                                                classes.alreadyBookedSeat
                                            )}
                                        >
                                            <ClearIcon
                                                style={{ fontSize: "14px" }}
                                            />
                                        </button>{" "}
                                        <span>Ghế đã chọn</span>
                                    </div>
                                    <div className={classes.seatNoteItem}>
                                        <button
                                            className={classNames(
                                                classes.normalSeatNote,
                                                classes.otherBookingSeat
                                            )}
                                        >
                                            ~
                                        </button>{" "}
                                        <span>Ghế đang có người chọn</span>
                                    </div>
                                </div>
                            </Grid>

                            <Grid
                                item
                                xs={12}
                                sm={12}
                                md={12}
                                lg={4}
                                container
                                className={classes.bookingInfoContainer}
                            >
                                <div className={classes.movieNameWrapper}>
                                    <Typography
                                        variant="h5"
                                        component="h1"
                                        className={classes.movieName}
                                    >
                                        {tenPhim}
                                    </Typography>
                                </div>

                                <div className={classes.bookingInfoItemWrapper}>
                                    <Typography
                                        variant="body2"
                                        className={classes.bookingInfoItem}
                                    >
                                        Ngày chiếu/ giờ chiếu
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        className={classes.bookingInfoItem}
                                    >
                                        {ngayChieu} | {"  "}
                                        <span style={{ color: "orangered" }}>
                                            {" "}
                                            {gioChieu}
                                        </span>
                                    </Typography>
                                </div>
                                <div className={classes.bookingInfoItemWrapper}>
                                    <Typography
                                        variant="body2"
                                        className={classes.bookingInfoItem}
                                    >
                                        Cụm rạp
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        className={classes.bookingInfoItem}
                                    >
                                        {tenCumRap}
                                    </Typography>
                                </div>
                                <div className={classes.bookingInfoItemWrapper}>
                                    <Typography
                                        variant="body2"
                                        className={classes.bookingInfoItem}
                                    >
                                        Rạp
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        className={classes.bookingInfoItem}
                                    >
                                        {tenRap}
                                    </Typography>
                                </div>

                                <div
                                    className={classNames(
                                        classes.bookingInfoItemWrapper,
                                        classes.bookingSeatList
                                    )}
                                >
                                    <Typography
                                        variant="body2"
                                        className={classes.bookingInfoItem}
                                    >
                                        Ghế chọn
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        className={classNames(
                                            classes.bookingInfoItem
                                        )}
                                    >
                                        {bookingSeatData
                                            .sort(
                                                (seat1, seat2) =>
                                                    seat1.maGhe - seat2.maGhe
                                            )
                                            .map((item, index) => {
                                                return (
                                                    <div key={index}>
                                                        <span
                                                            style={{
                                                                color: "orangered",
                                                            }}
                                                        >
                                                            {item.tenGhe}
                                                        </span>{" "}
                                                        {numberWithCommas(
                                                            `${item.giaVe}`
                                                        )}
                                                        đ,
                                                    </div>
                                                );
                                            })}
                                    </Typography>
                                </div>
                                <div className={classes.bookingInfoItemWrapper}>
                                    <Typography
                                        variant="body2"
                                        className={classes.bookingInfoItem}
                                    >
                                        Ưu đãi
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        className={classes.bookingInfoItem}
                                    >
                                        0%
                                    </Typography>
                                </div>
                                <div className={classes.bookingInfoItemWrapper}>
                                    <Typography
                                        variant="body2"
                                        className={classes.bookingInfoItem}
                                    >
                                        Tổng tiền
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        className={classes.bookingInfoItem}
                                    >
                                        {numberWithCommas(
                                            bookingSeatData.reduce(
                                                (sum, seat) =>
                                                    (sum += seat.giaVe),
                                                0
                                            )
                                        )}
                                        đ
                                    </Typography>
                                </div>
                                <div className={classes.bookBtnWrapper}>
                                    {" "}
                                    <Button
                                        variant="contained"
                                        className={classes.bookBtn}
                                        onClick={() =>
                                            handleBookTicket({
                                                maLichChieu:
                                                    props.match.params.id,
                                                danhSachVe: bookingSeatData,
                                                taiKhoanNguoiDung:
                                                    userInfoData?.taiKhoan,
                                            })
                                        }
                                    >
                                        BOOKING TICKET
                                    </Button>
                                </div>
                            </Grid>
                        </Grid>
                    </Container>
                </CustomCard>
            </div>
        </>
    );
};

export default Booking;
