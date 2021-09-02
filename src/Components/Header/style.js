import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles((theme) => {
    return {
        navbarHeader: {
            backgroundColor: "#fff",
            boxShadow: "0 0 15px rgb(0 0 0 / 30%)",
        },
        logo: {
            backgroundImage: 'url("../logo.svg")',
            height: 40,
            width: 180,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            marginLeft: 40,
        },
        menu: {
            display: "flex",
            justifyContent: "flex-end",
        },
        navLink: {
            marginRight: theme.spacing(3),
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
        },
        modal: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
        },
        paper: {
            backgroundColor: theme.palette.background.paper,
            boxShadow: theme.shadows[5],
            padding: theme.spacing(2, 4, 3),
        },
    };
});

export default useStyle;
