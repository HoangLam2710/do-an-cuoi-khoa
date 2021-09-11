import React, { Fragment } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CustomCard } from "@tsamantanis/react-glassmorphism";
import "@tsamantanis/react-glassmorphism/dist/index.css";
import { Container, Grid, Typography, Box, Button } from "@material-ui/core";
import useStyle from "./style";
import {
  getMovieRoomData,
  bookingSeatAction,
} from "../../Store/actions/booking";
import classNames from "classnames";

const Booking = (props) => {
  const classes = useStyle();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovieRoomData(props.match.params.id));
  }, [dispatch, props.match.params.id]);
  console.log(props.match.params.id);

  const movieRoomData = useSelector((state) => {
    return state.booking.movieRoomData;
  });

  const bookingSeatData = useSelector((state) => {
    return state.booking.bookingSeat;
  });

  const userInfoData = useSelector((state) => {
    return state.user.user.content;
  });

  const { thongTinPhim, danhSachGhe } = movieRoomData;
  const { tenPhim, tenRap, hinhAnh, ngayChieu, gioChieu, tenCumRap } =
    thongTinPhim;

  const handleBookingSeat = (seat) => {
    dispatch(bookingSeatAction(seat));
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
      return (
        <Fragment key={index}>
          <button
            key={index}
            onClick={() => handleBookingSeat(seat)}
            className={classNames(
              classes.normalSeat,
              vipSeatClass,
              alreadyBookedSeatClass,
              bookingSeatClass
            )}
          ></button>
          {(index + 1) % 16 === 0 ? <br /> : ""}
        </Fragment>
      );
    });
  };

  const handleBookTicket = (ticketList) => {
    console.log(ticketList);
  };

  return (
    <>
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
              <Grid item xs={12} sm={6} md={4} lg={8}>
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
                <div className={classes.seatsContainer}>{renderSeats()}</div>
                <div className={classes.seatNote}>
                  <div className={classes.seatNoteItem}>
                    <button className={classes.normalSeatNote}></button>{" "}
                    <span>Ghế thường</span>
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
                      X
                    </button>{" "}
                    <span>Ghế đã chọn</span>
                  </div>
                </div>
              </Grid>

              <Grid
                item
                xs={12}
                sm={12}
                md={8}
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
                    <span style={{ color: "orangered" }}> {gioChieu}</span>
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
                    className={classNames(classes.bookingInfoItem)}
                  >
                    {bookingSeatData
                      .sort((seat1, seat2) => seat1.maGhe - seat2.maGhe)
                      .map((item, index) => {
                        return (
                          <div key={index}>
                            <span style={{ color: "orangered" }}>
                              {item.tenGhe}
                            </span>{" "}
                            {numberWithCommas(`${item.giaVe}`)}đ,
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
                        (sum, seat) => (sum += seat.giaVe),
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
                        maLichChieu: props.match.params.id,
                        danhSachVe: bookingSeatData,
                        taiKhoanNguoiDung: userInfoData?.taiKhoan,
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
