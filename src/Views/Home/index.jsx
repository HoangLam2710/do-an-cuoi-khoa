import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { Container, Typography, Grid, Box, Button } from "@material-ui/core";
import { Rating } from "@material-ui/lab";
import Pagination from "@material-ui/lab/Pagination";
import { PlayArrow } from "@material-ui/icons";

import { fetchBanner, fetchMovies } from "../../Store/actions/movie";
import { fetchCinemas, fetchCumRap } from "../../Store/actions/cinema";
import { createAction } from "../../Store/actions";
import { actionTypes } from "../../Store/actions/types";
import ShowTime from "../../Components/ShowTime";

import Slider from "react-slick";
import { Tabs } from "antd";
import { ToastContainer } from "react-toastify";

import useStyle from "./style";
import classNames from "classnames";

import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import "../../../node_modules/antd/dist/antd.css";

function NextArrow(props) {
    const { className, style, onClick } = props;
    const classes = useStyle();
    return (
        <div
            className={classNames(className, classes.nextArrow)}
            style={{ ...style }}
            onClick={onClick}
        />
    );
}

function PrevArrow(props) {
    const { className, style, onClick } = props;
    const classes = useStyle();
    return (
        <div
            className={classNames(className, classes.prevArrow)}
            style={{ ...style }}
            onClick={onClick}
        />
    );
}

const { TabPane } = Tabs;

const Home = (props) => {
    const classes = useStyle();
    const dispatch = useDispatch();

    // setting slider homepage
    const settings = {
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };

    // setting slider mobile app
    const settings_mobile = {
        infinite: true,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 3000,
    };

    const page = useSelector((state) => {
        return state.movie.page;
    });

    const movieList = useSelector((state) => {
        return state.movie.movieList;
    });

    const banner = useSelector((state) => {
        return state.movie.banner;
    });

    const cinemaList = useSelector((state) => {
        return state.cinema.cinemaList;
    });

    const listCumRap = useSelector((state) => {
        return state.cinema.listCumRap;
    });

    useEffect(() => {
        dispatch(createAction(actionTypes.SHOW_LOADING));
        window.scroll({ top: 0, behavior: "smooth" });

        dispatch(fetchMovies(1));
        dispatch(fetchBanner);
        dispatch(fetchCinemas);
        dispatch(fetchCumRap("BHDStar"));

        setTimeout(() => {
            dispatch(createAction(actionTypes.HIDDEN_LOADING));
        }, 2000);
    }, [dispatch]);

    const hanldChangePage = useCallback(
        (event, value) => {
            dispatch(createAction(actionTypes.SET_PAGE, value));
            dispatch(fetchMovies(value));
            let slider = document
                .getElementById("slider")
                .getBoundingClientRect();
            window.scroll({
                top: slider.y + window.scrollY,
                behavior: "smooth",
            });
        },
        [dispatch]
    );

    const directDetail = useCallback(
        (maPhim) => {
            return () => {
                props.history.push(`/detail/${maPhim}/`);
            };
        },
        [props.history]
    );

    const selectCinema = useCallback(
        (maHeThongRap) => {
            return () => {
                dispatch(fetchCumRap(maHeThongRap));
            };
        },
        [dispatch]
    );

    return (
        <>
            <Container maxWidth="false" style={{ padding: 0 }}>
                {/* slider */}
                <Slider {...settings}>
                    {banner.map((item) => {
                        return (
                            <Box
                                key={item.maBanner}
                                onClick={directDetail(item.maPhim)}
                                className={classes.bannerHome}
                            >
                                <img
                                    className={classes.bannerImg}
                                    src={item.hinhAnh}
                                    alt="slider"
                                />
                                <div className={classes.backgroundLinear}></div>

                                <PlayArrow
                                    className={classNames(
                                        classes.playTrailer,
                                        classes.showHover
                                    )}
                                />
                            </Box>
                        );
                    })}
                </Slider>

                <Container id="slider"></Container>
                {/* list film */}
                <Container
                    id="listfilm"
                    maxWidth="md"
                    className={classes.listMovieWrap}
                >
                    <Grid container spacing={3}>
                        {movieList.items?.map((movie) => {
                            return (
                                <Grid
                                    key={movie.maPhim}
                                    item
                                    xs={12}
                                    sm={4}
                                    md={3}
                                    lg={3}
                                >
                                    <Box className={classes.listMovie}>
                                        <img
                                            className={classes.imgMovie}
                                            src={movie.hinhAnh}
                                            alt={movie.tenPhim}
                                        />

                                        <Box
                                            className={classes.movieWrap}
                                            onClick={directDetail(movie.maPhim)}
                                        >
                                            <Box
                                                className={
                                                    classes.movieReadmore
                                                }
                                            >
                                                <PlayArrow
                                                    className={
                                                        classes.buttonReadmore
                                                    }
                                                ></PlayArrow>
                                            </Box>
                                        </Box>
                                        {movie.hot && (
                                            <Box>
                                                <img
                                                    src="../assets/img/hot.png"
                                                    alt="hot"
                                                    className={classes.hotLabel}
                                                />
                                            </Box>
                                        )}
                                    </Box>
                                    <Box style={{ textAlign: "center" }}>
                                        <Typography
                                            className={classes.movieTitle}
                                        >
                                            {movie.tenPhim}
                                        </Typography>
                                        <Box>
                                            <Rating
                                                name="read-only"
                                                value={movie.danhGia / 2}
                                                precision={0.5}
                                                readOnly
                                            />
                                        </Box>
                                    </Box>
                                </Grid>
                            );
                        })}
                    </Grid>

                    <Pagination
                        count={movieList.totalPages}
                        className={classes.pagination}
                        onChange={hanldChangePage}
                        defaultPage={page}
                    />
                </Container>

                {/* cinema */}
                <Container
                    id="cinema"
                    maxWidth="md"
                    style={{ padding: "6rem 0" }}
                    className={classes.cinemaList}
                >
                    <Tabs
                        tabPosition="left"
                        type="card"
                        className={classes.brandCinema}
                    >
                        {cinemaList &&
                            cinemaList.map((cinema) => {
                                return (
                                    <TabPane
                                        tab={
                                            <img
                                                src={cinema.logo}
                                                alt={cinema.maHeThongRap}
                                                onClick={selectCinema(
                                                    cinema.maHeThongRap
                                                )}
                                            />
                                        }
                                        key={cinema.maHeThongRap}
                                    >
                                        <Tabs
                                            tabPosition="left"
                                            type="card"
                                            className={classes.locationCinema}
                                            style={{ height: 426 }}
                                        >
                                            {listCumRap &&
                                                listCumRap[0]?.lstCumRap.map(
                                                    (cumrap) => {
                                                        return (
                                                            <TabPane
                                                                tab={
                                                                    <Box
                                                                        className={
                                                                            classes.selectLocationCinema
                                                                        }
                                                                    >
                                                                        <img
                                                                            src={
                                                                                cumrap.hinhAnh
                                                                            }
                                                                            alt={
                                                                                cumrap.tenCumRap
                                                                            }
                                                                        />
                                                                        <Box
                                                                            className={
                                                                                classes.contentLocationCinema
                                                                            }
                                                                        >
                                                                            <Typography>
                                                                                <Typography
                                                                                    variant="body2"
                                                                                    color="primary"
                                                                                >
                                                                                    {
                                                                                        cumrap.tenCumRap.split(
                                                                                            "-"
                                                                                        )[0]
                                                                                    }
                                                                                </Typography>
                                                                                <Typography
                                                                                    variant="body2"
                                                                                    color="textSecondary"
                                                                                >
                                                                                    &nbsp;-{" "}
                                                                                    {
                                                                                        cumrap.tenCumRap.split(
                                                                                            "-"
                                                                                        )[1]
                                                                                    }
                                                                                </Typography>
                                                                            </Typography>
                                                                            <Typography
                                                                                variant="caption"
                                                                                color="textSecondary"
                                                                            >
                                                                                {
                                                                                    cumrap.diaChi
                                                                                }
                                                                            </Typography>
                                                                            <NavLink
                                                                                variant="caption"
                                                                                color="primary"
                                                                                to={`/cinema/${cumrap.maCumRap}`}
                                                                            >
                                                                                [chi
                                                                                tiết]
                                                                            </NavLink>
                                                                        </Box>
                                                                    </Box>
                                                                }
                                                                key={
                                                                    cumrap.maCumRap
                                                                }
                                                                style={{
                                                                    height: 426,
                                                                    overflowY:
                                                                        "scroll",
                                                                }}
                                                            >
                                                                {cumrap.danhSachPhim.map(
                                                                    (phim) => {
                                                                        return (
                                                                            <ShowTime
                                                                                key={
                                                                                    phim.maPhim
                                                                                }
                                                                                phim={
                                                                                    phim
                                                                                }
                                                                            />
                                                                        );
                                                                    }
                                                                )}
                                                            </TabPane>
                                                        );
                                                    }
                                                )}
                                        </Tabs>
                                    </TabPane>
                                );
                            })}
                    </Tabs>

                    {/* Toast dùng để mở popupt thông báo nằm trong ShowTiem */}
                    <ToastContainer />
                </Container>

                {/* app */}
                <Container id="app" maxWidth="false" className={classes.app}>
                    <Container maxWidth="md">
                        <Grid container spacing={3}>
                            <Grid xs={12} sm={6} className={classes.appLeft}>
                                <Typography
                                    style={{
                                        fontSize: 32,
                                        fontWeight: 700,
                                        lineHeight: "46px",
                                    }}
                                    gutterBottom
                                >
                                    Ứng dụng tiện lợi dành cho người yêu điện
                                    ảnh
                                </Typography>
                                <Typography
                                    style={{
                                        fontSize: 16,
                                        lineHeight: "23px",
                                        margin: "30px 0",
                                    }}
                                >
                                    Không chỉ đặt vé, bạn còn có thể bình luận
                                    phim, chấm điểm rạp và đổi quà hấp dẫn.
                                </Typography>
                                <Button variant="contained" color="primary">
                                    <a
                                        href="https://www.apple.com/app-store/"
                                        style={{
                                            color: "white",
                                        }}
                                    >
                                        App miễn phí - Tải về ngay!
                                    </a>
                                </Button>
                                <Typography
                                    style={{
                                        marginTop: 20,
                                        fontSize: 14,
                                        lineHeight: "20px",
                                    }}
                                >
                                    MStar có hai phiên bản{" "}
                                    <a
                                        href="https://www.apple.com/app-store/"
                                        style={{
                                            color: "white",
                                        }}
                                    >
                                        iOS
                                    </a>{" "}
                                    '&'{" "}
                                    <a
                                        href="https://play.google.com/store"
                                        style={{
                                            color: "white",
                                        }}
                                    >
                                        Android
                                    </a>
                                </Typography>
                            </Grid>
                            <Grid xs={12} sm={6} className={classes.appRight}>
                                <img
                                    className={classes.phoneImg}
                                    src="../assets/img/mobile.png"
                                    alt="phone"
                                />
                                <Slider
                                    {...settings_mobile}
                                    className={classes.sliderScreen}
                                >
                                    <img
                                        src="../assets/img/slide1.jpeg"
                                        alt="slider"
                                    />
                                    <img
                                        src="../assets/img/slide2.jpeg"
                                        alt="slider"
                                    />
                                    <img
                                        src="../assets/img/slide3.jpeg"
                                        alt="slider"
                                    />
                                    <img
                                        src="../assets/img/slide4.jpeg"
                                        alt="slider"
                                    />
                                </Slider>
                            </Grid>
                        </Grid>
                    </Container>
                </Container>
            </Container>
        </>
    );
};

export default Home;
