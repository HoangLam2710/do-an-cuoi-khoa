import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles((theme) => {
    return {
        // start carousel
        nextArrow: {
            right: 30,
            "&:before": {
                fontSize: 40,
            },
        },
        prevArrow: {
            left: 30,
            "&:before": {
                fontSize: 40,
            },
        },
        bannerHome: {
            position: "relative",
            "&:hover": {
                "& $showHover": {
                    visibility: "visible",
                    opacity: 1,
                },
            },
        },
        bannerImg: {
            width: "100%",
            height: "600px",
        },
        backgroundLinear: {
            position: "absolute",
            width: "100%",
            height: "100%",
            background: "linear-gradient(to top,#000,transparent 20%)",
            top: 0,
        },
        playTrailer: {
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            zIndex: 3,
            fontSize: "4rem",
            color: "white",
            border: "2px solid white",
            padding: "1rem",
            borderRadius: "50%",
            backgroundColor: "rgba(0,0,0,.5)",
        },
        showHover: {
            visibility: "hidden",
            opacity: 0,
            transition: "all .2s",
        },
        // end carousel
        // start list film
        listMovie: {
            position: "relative",
            overflow: "hidden",
            borderRadius: 5,
            height: 320,
            cursor: "pointer",
            "&:hover": {
                "& $movieWrap": {
                    opacity: 1,
                    "&:after": {
                        width: "200%",
                    },
                },
            },
        },
        imgMovie: {
            width: "100%",
            height: 320,
            borderRadius: 5,
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
            "&::after": {
                content: `''`,
                display: "block",
                width: 0,
                height: "100%",
                background: `linear-gradient(to right,${theme.palette.primary.main},${theme.palette.primary.dark})`,
                position: "absolute",
                bottom: 0,
                left: "-50%",
                transform: "skewX(30deg)",
                transition: "all .5s",
                opacity: ".9",
            },
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
        movieTitle: {
            textAlign: "center",
            fontSize: "1rem",
            color: "black",
            margin: "10px auto",
            textOverflow: "ellipsis",
            overflow: "hidden",
            // display: "-webkit-box",
            // height: 42,
            // maxHeight: 42,
            // "-webkitBoxOrient": "vertical",
            // "-webkitLineClamp": 2,
        },
        pagination: {
            "& > *": {
                marginTop: theme.spacing(5),
                justifyContent: "center",
            },
        },
        // cinema
        cinema: {
            flexGrow: 1,
            backgroundColor: theme.palette.background.paper,
            display: "flex",
            height: 224,
        },
        tabs: {
            borderRight: `1px solid ${theme.palette.divider}`,
        },
    };
});

export default useStyle;
