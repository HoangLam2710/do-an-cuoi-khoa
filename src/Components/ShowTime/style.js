import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles((theme) => {
    return {
        // css cho các lịch chiếu
        showtimeWrap: {
            display: "flex",
            padding: "20px 0",
            borderBottom: "1px solid #f0f0f0",
            [theme.breakpoints.down("xs")]: {
                "& img": {
                    width: "20%",
                    height: 100,
                    objectFit: "cover",
                },
            },
        },
        showtimeCinema: {
            paddingLeft: 10,
            "& .MuiTypography-body2": {
                "& span": {
                    backgroundColor: theme.palette.primary.main,
                    padding: 5,
                    borderRadius: 5,
                    color: theme.palette.primary.contrastText,
                    fontSize: 12,
                    fontWeight: 600,
                },
                [theme.breakpoints.down("xs")]: {
                    fontSize: 18,
                    lineHeight: "25px",
                    marginBottom: 20,
                },
            },
        },
        showtime: {
            marginTop: 10,
            "& svg": {
                width: 14,
                height: 10,
            },
            [theme.breakpoints.down("xs")]: {
                "& svg": {
                    display: "none",
                },
                "& .MuiTypography-caption": {
                    display: "none",
                },
            },
        },
        time: {
            fontSize: 14,
            display: "inline-block",
            marginLeft: 5,
            padding: "7px 10px",
            letterSpacing: 2,
            color: "#717171",
            borderRadius: 5,
            backgroundColor: "#d8d8d8",
            transition: "all .5s",
            marginBottom: 10,
            "&:hover": {
                backgroundColor: theme.palette.primary.main,
                color: theme.palette.primary.contrastText,
            },
            [theme.breakpoints.down("xs")]: {
                marginBottom: 5,
            },
        },
    };
});

export default useStyle;
