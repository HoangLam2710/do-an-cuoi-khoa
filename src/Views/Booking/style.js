import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles((theme) => {
  return {
    bookBtnWrapper: {
      width: "100%",
      marginTop: "40px",
    },
    bookBtn: {
      width: "100%",
      color: "white",
      padding: "10px 0",
      background: theme.palette.primary.dark,
      "&:hover": {
        background: theme.palette.primary.main,
      },
    },
    bookingInfoContainer: {
      boxShadow: "rgba(252, 252, 252, 0.486) 0px 8px 24px",
      borderRadius: "4px",
      minHeight: "600px",
      background: "rgba(0,0,0,0.5)",
    },
    bookingInfoItemWrapper: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      width: "100%",
      padding: "10px 0",
      borderBottom: "1px dotted white",
    },
    bookingInfoItem: {
      fontSize: "16px",
      fontWeight: "500",
      display: "flex",
      flexWrap: "wrap",
      [theme.breakpoints.down("xs")]: {
        fontSize: "14px",
      },
    },
    bookingSeatList: {
      alignItems: "flex-start !important",
    },
    customCard: {
      borderRadius: "0px !important",
    },
    movieName: {
      color: "white",
      fontSize: "22px",
      fontWeight: "500",
    },
    movieNameWrapper: {
      textAlign: "center !important",
      width: "100%",
      borderBottom: "1px dotted white",
    },
    normalSeat: {
      width: "40px",
      height: "40px",
      background: "#a2a2a2",
      margin: "5px",
      cursor: "pointer",
      borderRadius: "8px",
      [theme.breakpoints.down("xs")]: {
        width: "35px",
        height: "35px",
      },
    },
    normalSeatNote: {
      width: "30px",
      height: "30px",
      background: "#a2a2a2",
      margin: "5px",
      cursor: "pointer",
      borderRadius: "8px",
    },
    alreadyBookedSeat: {
      background: "rgb(240, 76,76) !important",
      cursor: "no-drop",
    },
    bookingSeat: {
      background: "green !important",
    },
    vipSeat: {
      background: "orangered",
    },
    otherBookingSeat: {
      background: "navy !important",
      cursor: "no-drop",
    },
    seatsContainer: {
      textAlign: "center",
    },
    seatNote: {
      marginTop: "40px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      [theme.breakpoints.down("xs")]: {
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gridGap: "10px 0px",
      },
    },
    seatNoteItem: {
      display: "flex",
      alignItems: "center",
      paddingRight: "15px",
      fontSize: "16px",
      [theme.breakpoints.down("xs")]: {
        fontSize: "14px",
      },
    },

    paper: {
      position: "absolute",
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: "2px solid #000",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      textAlign: "center",
    },

    break: {
      display: "block",
      [theme.breakpoints.down("xs")]: {
        display: "none",
      },
      [theme.breakpoints.down("md")]: {
        display: "none",
      },
    },
  };
});

export default useStyle;
