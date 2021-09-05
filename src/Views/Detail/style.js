import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles((theme) => {
  return {
    detailItem: {
      marginBottom: "20px",
      fontSize: "17px",
      color: "#fff",
    },
    movieName: {
      fontSize: "28px",
      lineHeight: "28px",
    },
    tabCinemaContainer: {
      height: "705px",
    },
    cinemaClusterInfoWrapper: {
      paddingLeft: "10px",
    },
    cinemaClusterInfo: {
      fontSize: "16px",
      lineHeight: "1.4",
      color: "black",
    },
    cinemaClusterAddress: {
      fontSize: "14px",
      lineHeight: "1.4",
      color: "#949494",
    },
    cinemaClusterImg: {},
    cinemaCluster: {
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      padding: "10px 0",
    },
    cinemaClusterWrapper: {
      padding: "10px",
      borderBottom: "1px solid rgba(238,238,238,.88)",
      cursor: "pointer",
      alignItems: "center",
    },
    cinemaSys: {
      marginLeft: "20px",
      fontSize: "18px",
    },
    listMovie: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 5,
      height: 320,
      cursor: "pointer",
      "&:hover": {
        "& $movieWrap": {
          opacity: 0.8,
        },
      },
    },
    movieWrap: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      opacity: 0,
      transition: "all .5s",
      display: "flex",
      alignItems: "center",
    },
    movieReadmore: {
      width: "100%",
      zIndex: 1,
      textAlign: "center",
    },
    buttonReadmore: {
      fontSize: "4rem",
      color: "white",
      border: "2px solid white",
      padding: "1rem",
      borderRadius: "50%",
      backgroundColor: "transparent",
      margin: "0 auto",
      transition: "all .5s",
    },
    customCard: {
      minHeight: "400px",
    },
    timeShowing: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
    },
    timeShowingItem: {
      fontSize: "20px",
      color: "green",
      fontWeight: "500",
      transition: "all 0.5s ease-in-out",
      "&:hover": {
        opacity: 0.5,
      },
    },
  };
});

export default useStyle;
