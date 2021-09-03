import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovieId, fetchShowtimes } from "../../Store/actions/movie";
import { CustomCard } from "@tsamantanis/react-glassmorphism";
import "@tsamantanis/react-glassmorphism/dist/index.css";
import ModalVideo from "react-modal-video";
import { Container, Grid, Typography, Box } from "@material-ui/core";
import { PlayArrow } from "@material-ui/icons";
import useStyle from "./style";
import classNames from "classnames";
import { Rate } from "antd";
import { Tabs } from "antd";
import "./index.scss";
import moment from "moment";
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

  const [isOpen, setOpen] = useState(false);

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
            backgroundSize: "100%",
            backgroundRepeat: "no-repeat",
            minHeight: "300px",
            backgroundPosition: "center",
          }}
        >
          <CustomCard
            style={{
              background:
                "linear-gradient(to top, rgb(10, 32, 41), transparent 100%)",
            }}
            effectColor="linear-gradient(to top, rgb(10, 32, 41), transparent 100%)" // required
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
                <Grid item>
                  <Box className={classes.listMovie}>
                    <img width="250" height="350" alt="complex" src={hinhAnh} />

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
                <Grid item xs={12} sm container>
                  <Grid item xs container direction="column" spacing={2}>
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
                        <b>Ngày khởi chiếu:</b> {ngayKhoiChieu}
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
                >
                  {cinemaSys.cumRapChieu.map((item) => {
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
                              <p
                                key={index}
                                className={classes.timeShowingItem}
                              >
                                {moment(lc.ngayChieuGioChieu).format("hh:mm A")}
                              </p>
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
      </div>
    </>
  );
};

export default Detail;
