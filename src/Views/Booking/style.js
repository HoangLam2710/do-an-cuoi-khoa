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
      width: "35px",
      height: "35px",
      background: "#cccccc",
      margin: "5px",
      cursor: "pointer",
      borderRadius: "8px",
    },
    normalSeatNote: {
      width: "25px",
      height: "25px",
      background: "#cccccc",
      margin: "5px",
      cursor: "pointer",
      borderRadius: "8px",
    },
    alreadyBookedSeat: {
      background: "rgb(232, 76,76)",
      cursor: "no-drop",
    },
    bookingSeat: {
      background: "green !important",
    },
    vipSeat: {
      background: "orangered",
    },
    seatsContainer: {
      textAlign: "center",
    },
    seatNote: {
      marginTop: "40px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    seatNoteItem: {
      display: "flex",
      alignItems: "center",
      marginRight: "15px",
    },
  };
});

export default useStyle;
