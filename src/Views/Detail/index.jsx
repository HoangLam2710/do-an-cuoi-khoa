import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovieId, fetchShowtimes } from "../../Store/actions/movie";
import { CustomCard } from "@tsamantanis/react-glassmorphism";
import "@tsamantanis/react-glassmorphism/dist/index.css";
import ModalVideo from "react-modal-video";
import { Container, Grid, Typography, Box } from "@material-ui/core";
import { PlayArrow } from "@material-ui/icons";
import classNames from "classnames";
import { Rate, Tabs } from "antd";
import moment from "moment";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import useStyle from "./style";
import "./index.scss";
import { NavLink } from "react-router-dom";

const { TabPane } = Tabs;

const Detail = (props) => {
  const classes = useStyle();
  const dispatch = useDispatch();
  const movieDetail = useSelector((state) => {
    return state.movie.movieDetail;
  });
  const showTimes = useSelector((state) => {
    return state.movie.showtimes;
  });

  useEffect(() => {
    dispatch(fetchMovieId(props.match.params.id));
    dispatch(fetchShowtimes(props.match.params.id));
  }, [dispatch, props.match.params.id]);

  const { danhGia, hinhAnh, moTa, ngayKhoiChieu, tenPhim, trailer } =
    movieDetail || {};

  const [isOpen, setOpen] = useState(false); //handle open modal

  //get trailer video id
  const getTrailerId = (url) => {
    var regExp =
      /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    var match = url ? url.match(regExp) : "";
    return match && match[7].length === 11 ? match[7] : false;
  };

  return (
    <>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId={getTrailerId(trailer)}
        onClose={() => setOpen(false)}
      />
      {movieDetail && (
        <div
          style={{
            backgroundImage: `url(${hinhAnh})`,
          }}
          className={classes.glassBackground}
        >
          <CustomCard
            className={classes.customCard}
            effectColor="rgb(10, 32, 41)" // required
            color="#fff" // default color is white
            blur={8} // default blur value is 10px
            borderRadius={0} // default border radius value is 10px
          >
            <Container
              id="detailContainer"
              maxWidth="md"
              style={{
                margin: "20px auto",
              }}
            >
              <Grid container spacing={8}>
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={4}
                  lg={4}
                  className={classes.removePadding}
                >
                  <Box className={classes.movie}>
                    <div>
                      <img
                        width="250"
                        height="350"
                        alt="complex"
                        src={hinhAnh}
                        className={classes.movieImg}
                      />
                    </div>
                    <Box className={classes.movieWrap}>
                      <Box className={classes.movieReadmore}>
                        <PlayArrow
                          className={classes.buttonReadmore}
                          onClick={() => setOpen(true)}
                        ></PlayArrow>
                      </Box>
                    </Box>
                  </Box>
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={8}
                  lg={8}
                  container
                  className={classes.removePadding}
                >
                  <Grid item xs container direction="column">
                    <Grid item xs>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="h1"
                        className={classNames(
                          classes.detailItem,
                          classes.movieName
                        )}
                      >
                        {tenPhim}
                      </Typography>
                      <Typography
                        variant="body2"
                        gutterBottom
                        className={classes.detailItem}
                      >
                        <b>Nội dung:</b> {moTa}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        className={classes.detailItem}
                      >
                        <b>Ngày khởi chiếu:</b>{" "}
                        {ngayKhoiChieu.toString().substr(0, 10)}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        gutterBottom
                        className={classes.detailItem}
                      >
                        <b>Đánh giá:</b> {danhGia}/10
                        <br />
                        <Rate allowHalf defaultValue={danhGia / 2} />
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Container>
          </CustomCard>
        </div>
      )}
      <div
        style={{
          background: "rgb(10, 32, 41)",
          paddingBottom: "50px",
        }}
      >
        <Container id="detailContainer" maxWidth="md">
          <Tabs
            tabPosition="left"
            style={{
              color: "black",
              background: "white",
              borderRadius: "4px",
              borderColor: "rgba(238,238,238,.88)",
            }}
            className={classes.tabCinemaContainer}
          >
            {showTimes?.map((cinemaSys, index) => {
              return (
                <TabPane
                  tab={
                    <div>
                      <img
                        src={cinemaSys.logo}
                        width={50}
                        height={50}
                        alt={cinemaSys.logo}
                      />
                      <span className={classes.cinemaSys}>
                        {cinemaSys.tenHeThongRap}
                      </span>
                    </div>
                  }
                  key={index}
                  className={classes.scroll}
                >
                  {cinemaSys.cumRapChieu?.map((item) => {
                    return (
                      <div className={classes.cinemaClusterWrapper}>
                        <div className={classes.cinemaCluster}>
                          <img
                            src="https://s3img.vcdn.vn/123phim/2021/01/bhd-star-bitexco-16105952137769.png"
                            width={50}
                            height={50}
                            alt={cinemaSys.logo}
                            className={classes.cinemaClusterImg}
                          />
                          <div className={classes.cinemaClusterInfoWrapper}>
                            <div className={classes.cinemaClusterInfo}>
                              {item.tenCumRap}
                            </div>
                            <div className={classes.cinemaClusterAddress}>
                              L3-Bitexco Icon 68{" "}
                              <span style={{ color: "red" }}>[Bản đồ]</span>
                            </div>
                          </div>
                        </div>
                        <div className={classes.timeShowing}>
                          {item.lichChieuPhim?.slice(0, 10).map((lc, index) => {
                            return (
                              <NavLink
                                to={`/ticketroom/${lc.maLichChieu}`}
                                key={index}
                                className={classes.timeShowingItem}
                              >
                                {moment(lc.ngayChieuGioChieu).format("hh:mm A")}
                              </NavLink>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}
                </TabPane>
              );
            })}
          </Tabs>
        </Container>
        <Container
          id="detailContainer"
          maxWidth="md"
          className={classes.accordionContainer}
        >
          <div className={classes.root}>
            {showTimes?.map((cinemaSys, index) => {
              return (
                <Accordion key={index}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    className={classes.accordionSummary}
                  >
                    <img
                      src={cinemaSys.logo}
                      width={50}
                      height={50}
                      alt={cinemaSys.logo}
                    />
                    <span className={classes.cinemaSys}>
                      {cinemaSys.tenHeThongRap}
                    </span>
                  </AccordionSummary>
                  {cinemaSys.cumRapChieu?.map((item, index) => {
                    return (
                      <AccordionDetails>
                        <div className={classes.cinemaClusterWrapper}>
                          <div className={classes.cinemaCluster}>
                            <img
                              src="https://s3img.vcdn.vn/123phim/2021/01/bhd-star-bitexco-16105952137769.png"
                              width={50}
                              height={50}
                              alt={cinemaSys.logo}
                              className={classes.cinemaClusterImg}
                            />
                            <div className={classes.cinemaClusterInfoWrapper}>
                              <div className={classes.cinemaClusterInfo}>
                                {item.tenCumRap}
                              </div>
                              <div className={classes.cinemaClusterAddress}>
                                L3-Bitexco Icon 68{" "}
                                <span style={{ color: "red" }}>[Bản đồ]</span>
                              </div>
                            </div>
                          </div>
                          <div className={classes.timeShowing}>
                            {item.lichChieuPhim
                              ?.slice(0, 10)
                              .map((lc, index) => {
                                return (
                                  <NavLink
                                    key={index}
                                    to={`/ticketroom/${lc.maLichChieu}`}
                                    className={classes.timeShowingItem}
                                  >
                                    {moment(lc.ngayChieuGioChieu).format(
                                      "hh:mm A"
                                    )}
                                  </NavLink>
                                );
                              })}
                          </div>
                        </div>
                      </AccordionDetails>
                    );
                  })}
                </Accordion>
              );
            })}
          </div>
        </Container>
      </div>
    </>
  );
};

export default Detail;
