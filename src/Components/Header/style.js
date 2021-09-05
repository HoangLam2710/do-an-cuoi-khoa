import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles((theme) => {
    return {
        navbarHeader: {
            backgroundColor: "#fff",
            boxShadow: "0 0 15px rgb(0 0 0 / 30%)",
            "& .MuiToolbar-gutters": {
                padding: 0,
            },
        },
        logo: {
            backgroundImage: 'url("../logo.svg")',
            height: 40,
            width: 180,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            [theme.breakpoints.down("sm")]: {
                marginLeft: 0,
            },
        },
        menu: {
            display: "flex",
            justifyContent: "center",
            gap: 30,
            [theme.breakpoints.down("sm")]: {
                display: "none",
            },
        },
        navLink: {
            fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
            textDecoration: "none",
            fontSize: 16,
            fontWeight: 500,
            lineHeight: 1.4,
            transition: "all .5s",
            color: "#9b9b9b",
            cursor: "pointer",
            "&:hover": {
                color: theme.palette.primary.main,
            },
            "&.active": {
                color: theme.palette.primary.main,
            },
            [theme.breakpoints.down("xs")]: {
                color: "black",
            },
        },
        signin: {
            display: "flex",
            justifyContent: "flex-end",
            gap: 30,
            [theme.breakpoints.down("xs")]: {
                display: "none",
            },
        },
        // menu mobile
        rightMenu: {
            display: "none",
            "&.MuiContainer-root": {
                padding: 0,
            },
            [theme.breakpoints.down("xs")]: {
                display: "initial",
                position: "absolute",
                top: "50%",
                right: 20,
                transform: "translateY(-50%)",
                width: 30,
                zIndex: 1,
                "& img": {
                    width: "100%",
                },
            },
        },
        sideMenu: {
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "transparent",
            pointerEvents: "none",
            zIndex: 10,
            overflow: "hidden",
            transition: "all .4s",
            "&.active": {
                backgroundColor: "rgba(0,0,0,.8)",
                pointerEvents: "inherit",
                "& $wrapMenuMobile": {
                    right: 0,
                },
            },
        },
        wrapMenuMobile: {
            position: "absolute",
            top: 0,
            right: "-70%",
            width: "70%",
            height: "100%",
            background: "#fff",
            transition: "all .4s",
            overflow: "hidden",
            overflowY: "scroll",
        },
        wrapFirst: {
            padding: "10px 0",
            position: "relative",
        },
        close: {
            position: "absolute",
            right: 0,
            top: "50%",
            transform: "translateY(-50%)",
            width: 15,
            height: 15,
        },
        titleMenuMobile: {
            "& img": {
                width: 36,
                height: 36,
                borderRadius: "50%",
                margin: "0 5px",
            },
        },
        navLinkMobile: {
            display: "block",
            padding: 20,
            paddingLeft: 0,
            position: "relative",
            width: "calc(100% - 40px)",
            fontSize: 18,
            color: "black",
        },
        // modal popup sign in
        modal: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
        },
        paper: {
            backgroundColor: theme.palette.background.paper,
            boxShadow: theme.shadows[5],
            padding: theme.spacing(2, 4, 3),
            [theme.breakpoints.down("xs")]: {
                width: "90%",
            },
        },
    };
});

export default useStyle;
