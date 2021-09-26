import React, { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { createAction } from "../../Store/actions";
import { actionTypes } from "../../Store/actions/types";
import { fetchCinemas, fetchCumRap } from "../../Store/actions/cinema";
import { Collapse } from "antd";
import { Box, Typography } from "@material-ui/core";
import useStyle from "./style";

const { Panel } = Collapse;

const CinemaMobile = () => {
    const classes = useStyle();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(createAction(actionTypes.SHOW_LOADING));
        window.scroll({ top: 0, behavior: "smooth" });

        dispatch(fetchCinemas);
        dispatch(fetchCumRap("BHDStar"));

        setTimeout(() => {
            dispatch(createAction(actionTypes.HIDDEN_LOADING));
        }, 2000);
    }, [dispatch]);

    const cinemaList = useSelector((state) => {
        return state.cinema.cinemaList;
    });

    const listCumRap = useSelector((state) => {
        return state.cinema.listCumRap;
    });

    const selectCinema = useCallback(
        (maHeThongRap) => {
            return () => {
                dispatch(fetchCumRap(maHeThongRap));
            };
        },
        [dispatch]
    );

    return (
        <div>
            <Collapse
                accordion
                defaultActiveKey="BHDStar"
                expandIconPosition="right"
            >
                {cinemaList &&
                    cinemaList.map((cinema) => {
                        return (
                            <Panel
                                header={
                                    <Box
                                        className={classes.cinema}
                                        onClick={selectCinema(
                                            cinema.maHeThongRap
                                        )}
                                    >
                                        <img
                                            src={cinema.logo}
                                            alt={cinema.maHeThongRap}
                                        />
                                        <Typography variant="body1">
                                            {cinema.tenHeThongRap.toUpperCase()}
                                        </Typography>
                                    </Box>
                                }
                                key={cinema.maHeThongRap}
                            >
                                {listCumRap &&
                                    listCumRap[0]?.lstCumRap.map((cumrap) => {
                                        return (
                                            <NavLink
                                                className={
                                                    classes.selectLocationCinema
                                                }
                                                to={`/cinema/${cumrap.maCumRap}`}
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
                                        );
                                    })}
                            </Panel>
                        );
                    })}
            </Collapse>
        </div>
    );
};

export default CinemaMobile;
