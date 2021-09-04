import React from "react";
import { Container, Typography, Grid, Box } from "@material-ui/core";
import Pagination from "@material-ui/lab/Pagination";
//import { NavLink } from "react-router-dom";
import useStyle from "./style";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBanner, fetchMovies } from "../../Store/actions/movie";
import { useCallback } from "react";
import { createAction } from "../../Store/actions";
import { actionTypes } from "../../Store/actions/types";
import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import { PlayArrow } from "@material-ui/icons";
import classNames from "classnames";
import { Rating } from "@material-ui/lab";
import { Tabs } from "antd";
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

  const settings = {
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
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

  useEffect(() => {
    dispatch(fetchMovies(page));
    dispatch(fetchBanner);
  }, [dispatch, page]);

  const hanldChangePage = useCallback(
    (event, value) => {
      dispatch(createAction(actionTypes.SET_PAGE, value));
      dispatch(fetchMovies(value));
      let listFilm = document
        .getElementById("listFilm")
        .getBoundingClientRect();
      window.scroll({
        top: listFilm.y + window.scrollY - 100,
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

  return (
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
                className={classNames(classes.playTrailer, classes.showHover)}
              />
            </Box>
          );
        })}
      </Slider>

      {/* list film */}
      <Container id="listFilm" maxWidth="md" style={{ margin: "50px auto" }}>
        <Grid container spacing={3}>
          {movieList.items?.map((movie) => {
            return (
              <Grid key={movie.maPhim} item xs={12} sm={6} md={4} lg={3}>
                <Box className={classes.listMovie}>
                  <img
                    className={classes.imgMovie}
                    src={movie.hinhAnh}
                    alt={movie.tenPhim}
                  />

                  <Box className={classes.movieWrap}>
                    <Box className={classes.movieReadmore}>
                      <PlayArrow
                        className={classes.buttonReadmore}
                        onClick={directDetail(movie.maPhim)}
                      ></PlayArrow>
                    </Box>
                  </Box>
                </Box>
                <Box style={{ textAlign: "center" }}>
                  <Typography className={classes.movieTitle}>
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
      <Container id="cinema" maxWidth="md" style={{ margin: "50px auto" }}>
        <Tabs tabPosition="left">
          <TabPane tab="Tab 1" key="1">
            Content of Tab 1
          </TabPane>
          <TabPane tab="Tab 2" key="2">
            Content of Tab 2
          </TabPane>
          <TabPane tab="Tab 3" key="3">
            Content of Tab 3
          </TabPane>
        </Tabs>
      </Container>
    </Container>
  );
};

export default Home;
