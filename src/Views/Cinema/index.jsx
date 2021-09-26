import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import { Container, Grid, Box, Typography, Button } from "@material-ui/core";
import { Tabs } from "antd";

import { createAction } from "../../Store/actions";
import { actionTypes } from "../../Store/actions/types";

import { fetchCumRap } from "../../Store/actions/cinema";
import ShowTime from "../../Components/ShowTime";
import { ToastContainer } from "react-toastify";

import useStyle from "./style";

const { TabPane } = Tabs;

const Cinema = (props) => {
    const dispatch = useDispatch();
    const classes = useStyle();

    //const [selectedCumRap, setSelectedCumRap] = useState([]);

    const selectedCumRap = useSelector((state) => {
        return state.cinema.listCumRap[0]?.lstCumRap.find(
            (item) => item.maCumRap === props.match.params.id
        );
    });

    const listCumRap = useSelector((state) => {
        return state.cinema.listCumRap;
    });

    useEffect(() => {
        dispatch(createAction(actionTypes.SHOW_LOADING));
        window.scroll({ top: 0, behavior: "smooth" });

        let tempRap = "";
        switch (props.match.params.id.split("-")[0]) {
            case "bhd":
                tempRap = "BHDStar";
                break;
            case "cgv":
                tempRap = "CGV";
                break;
            case "cns":
                tempRap = "CineStar";
                break;
            case "glx":
                tempRap = "Galaxy";
                break;
            case "lotte":
                tempRap = "LotteCinima";
                break;
            case "megags":
                tempRap = "MegaGS";
                break;
            default:
                break;
        }

        dispatch(fetchCumRap(tempRap));

        setTimeout(() => {
            dispatch(createAction(actionTypes.HIDDEN_LOADING));
        }, 2000);
    }, [dispatch, props.match.params.id]);

    return (
        <>
            {selectedCumRap && (
                <Container
                    style={{
                        backgroundImage: `url(${selectedCumRap.hinhAnh})`,
                    }}
                    className={classes.glassBackground}
                    maxWidth="false"
                >
                    <Box className={classes.customBox}>
                        <Container maxWidth="md">
                            <Grid container spacing={2}>
                                <Grid
                                    item
                                    xs={12}
                                    sm={4}
                                    md={3}
                                    className={classes.cinemaImg}
                                >
                                    <img
                                        alt={selectedCumRap.tenCumRap}
                                        src={selectedCumRap.hinhAnh}
                                    />
                                </Grid>
                                <Grid
                                    item
                                    xs={12}
                                    sm={8}
                                    md={9}
                                    className={classes.cinemaName}
                                >
                                    <Box>
                                        <Typography
                                            variant="h5"
                                            component="h1"
                                            gutterBottom
                                        >
                                            <b>{selectedCumRap.tenCumRap}</b>
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            gutterBottom
                                        >
                                            {" "}
                                            {selectedCumRap.diaChi}
                                        </Typography>

                                        <Button
                                            variant="contained"
                                            color="primary"
                                            className={classes.cinemaButton}
                                            onClick={() => {
                                                window.scroll({
                                                    top: 400,
                                                    behavior: "smooth",
                                                });
                                            }}
                                        >
                                            Mua vé
                                        </Button>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Container>
                    </Box>
                </Container>
            )}
            <Container maxWidth="md" className={classes.showTime}>
                <Tabs
                    tabPosition="left"
                    type="card"
                    className={classes.locationCinema}
                    style={{ height: 426 }}
                    defaultActiveKey={props.match.params.id}
                >
                    {listCumRap &&
                        listCumRap[0]?.lstCumRap.map((cumrap) => {
                            return (
                                <TabPane
                                    tab={
                                        <NavLink
                                            to={`/cinema/${cumrap.maCumRap}`}
                                            className={
                                                classes.selectLocationCinema
                                            }
                                        >
                                            <img
                                                src={cumrap.hinhAnh}
                                                alt={cumrap.tenCumRap}
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
                                                    {cumrap.diaChi}
                                                </Typography>
                                            </Box>
                                        </NavLink>
                                    }
                                    key={cumrap.maCumRap}
                                    style={{
                                        height: 426,
                                        overflowY: "scroll",
                                    }}
                                >
                                    {cumrap.danhSachPhim.map((phim) => {
                                        return (
                                            <ShowTime
                                                key={phim.maPhim}
                                                phim={phim}
                                            />
                                        );
                                    })}
                                </TabPane>
                            );
                        })}
                </Tabs>
                {/* Toast dùng để mở popupt thông báo nằm trong ShowTiem */}
                <ToastContainer />
            </Container>
            <Container maxWidth="md" className={classes.showTimeMobile}>
                <Box>
                    {selectedCumRap &&
                        selectedCumRap?.danhSachPhim.map((phim) => {
                            return <ShowTime key={phim.maPhim} phim={phim} />;
                        })}
                </Box>
                {/* Toast dùng để mở popupt thông báo nằm trong ShowTiem */}
                <ToastContainer />
            </Container>
        </>
    );
};

export default Cinema;
