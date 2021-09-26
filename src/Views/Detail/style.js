import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles((theme) => {
    return {
        root: {
            width: "100%",
            paddingTop: "50px",
        },
        heading: {
            fontSize: theme.typography.pxToRem(15),
            fontWeight: theme.typography.fontWeightRegular,
        },
        detailItem: {
            marginBottom: "20px",
            fontSize: "16px",
            lineHeight: "22px",
            color: "#fff",
            textAlign: "justify",
            textJustify: "inter-word",
            [theme.breakpoints.down("xs")]: {
                fontSize: "14px",
            },
        },
        glassBackground: {
            backgroundSize: "100%",
            backgroundRepeat: "no-repeat",
            minHeight: "300px",
            backgroundPosition: "center",
            [theme.breakpoints.down("sm")]: {
                backgroundPosition: "top",
                backgroundSize: "cover",
            },
            [theme.breakpoints.down("xs")]: {
                backgroundPosition: "top",
                backgroundSize: "cover",
            },
        },
        tabCinemaContainer: {
            height: "705px",
            "& .ant-tabs-ink-bar": {
                background: theme.palette.primary.main,
            },
            [theme.breakpoints.down("sm")]: {
                display: "none",
            },
        },
        scroll: {
            height: "705px",
            overflowY: "auto",
        },
        cinemaClusterInfoWrapper: {
            paddingLeft: "10px",
        },
        cinemaClusterInfo: {
            fontSize: "16px",
            lineHeight: "1.4",
            color: "black",
            [theme.breakpoints.down("xs")]: {
                fontSize: "14px",
            },
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
            display: "inline-block",
            [theme.breakpoints.down("xs")]: {
                fontSize: "16px",
            },
        },
        movie: {
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
        movieName: {
            fontSize: "28px",
            fontWeight: "600",
            lineHeight: "28px",
            [theme.breakpoints.down("xs")]: {
                fontSize: "22px",
            },
            [theme.breakpoints.down("sm")]: {
                fontSize: "22px",
            },
            [theme.breakpoints.down("md")]: {
                fontSize: "22px",
            },
        },
        movieImg: {
            [theme.breakpoints.down("xs")]: {
                width: "100%",
            },
            [theme.breakpoints.down("sm")]: {
                width: "100%",
            },
            [theme.breakpoints.down("md")]: {
                width: "100%",
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
            background:
                "linear-gradient(to top, rgb(10, 32, 41), transparent 100%) !important",
            borderRadius: "0px !important",
            [theme.breakpoints.down("xs")]: {
                background:
                    "linear-gradient(to top, rgb(10, 32, 41), transparent 100%) !important",
            },
            [theme.breakpoints.down("sm")]: {
                background:
                    "linear-gradient(to top, rgb(10, 32, 41), transparent 100%) !important",
            },
        },

        timeShowingItem: {
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
        accordionSummary: {
            display: "flex",
            alignItems: "center",
        },
        accordionContainer: {
            [theme.breakpoints.up("md")]: {
                display: "none",
            },
        },
        removePadding: {
            [theme.breakpoints.down("sm")]: {
                padding: "20px 0 !important",
            },
            [theme.breakpoints.up("sm")]: {
                padding: "30px !important",
            },
        },
    };
});

export default useStyle;
