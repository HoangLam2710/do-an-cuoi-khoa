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
            cursor: "pointer",
            "&:hover": {
                "& $showHover": {
                    visibility: "visible",
                    opacity: 1,
                },
            },
            [theme.breakpoints.down("xs")]: {
                display: "none !important",
            },
        },
        bannerImg: {
            width: "100%",
            height: 600,
            [theme.breakpoints.down("sm")]: {
                height: 400,
            },
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
        listMovieWrap: {
            paddingTop: "6rem",
            [theme.breakpoints.down("xs")]: {
                padding: "4rem 16px",
            },
        },
        listMovie: {
            position: "relative",
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
            [theme.breakpoints.down("xs")]: {
                height: 450,
            },
        },
        imgMovie: {
            width: "100%",
            height: 320,
            borderRadius: 5,
            [theme.breakpoints.down("xs")]: {
                height: 450,
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
            overflow: "hidden",
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
        hotLabel: {
            position: "absolute",
            top: -13,
            left: -10,
            width: "70%",
            [theme.breakpoints.down("xs")]: {
                top: -20,
            },
        },
        movieTitle: {
            textAlign: "center",
            fontSize: "1rem",
            color: "black",
            margin: "10px auto",
            textOverflow: "ellipsis",
            overflow: "hidden",
        },
        pagination: {
            "& > *": {
                marginTop: theme.spacing(5),
                justifyContent: "center",
                "& .Mui-selected": {
                    backgroundColor: theme.palette.primary.main,
                    color: theme.palette.primary.contrastText,
                },
            },
        },
        // end list film
        // start cinema
        cinemaList: {
            position: "relative",
            "& .ant-tabs-content": {
                "& .ant-tabs-tabpane": {
                    paddingLeft: "0 !important",
                },
            },
            [theme.breakpoints.down("xs")]: {
                display: "none",
            },
        },
        loadingTable: {
            width: "100%",
            height: 440,
            position: "absolute",
            top: 0,
            left: 0,
            backgroundColor: "rgba(255,255,255,.9)",
            zIndex: 2,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        },
        // css phần các thương hiệu cinema
        brandCinema: {
            border: "1px solid #f0f0f0",
            borderRadius: 5,
            "& .ant-tabs-nav": {
                width: 92,
                "& .ant-tabs-tab": {
                    padding: 0,
                    background: "transparent",
                    border: "none",
                    display: "block",
                    width: "100%",
                    "& img": {
                        padding: 10,
                        width: 70,
                        borderBottom: "1px solid #f0f0f0",
                        opacity: 0.5,
                        transition: "all .5s",
                        "&:hover": {
                            opacity: 1,
                        },
                    },
                },
                "& .ant-tabs-tab-active": {
                    "& img": {
                        opacity: "1 !important",
                    },
                },
            },
        },
        locationCinema: {
            "& .ant-tabs-nav": {
                width: "30% !important",
                "& .ant-tabs-tab-btn": {
                    width: "100%",
                },
            },
            // css cho các lịch chiếu
            "& .ant-tabs-content-holder": {
                width: "calc(100% - 92px - 30%)",
                paddingLeft: 20,
                "& .ant-tabs-tabpane": {
                    "& img": {
                        width: 80,
                        height: 120,
                        borderRadius: 5,
                    },
                },
            },
            "& .ant-tabs-tab": {
                "&.ant-tabs-tab-active": {
                    "& $selectLocationCinema": {
                        opacity: "1 !important",
                    },
                },
            },
        },
        // css phần cụm rạp
        selectLocationCinema: {
            display: "flex",
            margin: "5px 20px 0",
            paddingBottom: 5,
            borderBottom: "1px solid #f0f0f0",
            opacity: 0.8,
            transition: "all .5s",
            "& img": {
                padding: "0px !important",
                width: "50px !important",
                height: 50,
                border: "none !important",
                alignSelf: "center",
                opacity: 1,
            },
            "&:hover": {
                opacity: 1,
            },
        },
        // css cho phần nội dung trong cụm rạp
        contentLocationCinema: {
            paddingLeft: 10,
            fontSize: 14,
            textAlign: "left",
            overflow: "hidden",
            "& .MuiTypography-body2": {
                display: "inline-block",
            },
            "& .MuiTypography-caption": {
                display: "block",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                maxWidth: "100%",
            },
            "& a": {
                color: theme.palette.primary.main,
                "&:hover": {
                    color: theme.palette.primary.dark,
                },
            },
        },
        // end cinema
        // start app
        app: {
            backgroundImage: "url('../assets/img/backapp.jpeg')",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            padding: "120px 0 80px",
            color: theme.palette.primary.contrastText,
        },
        appLeft: {
            alignSelf: "center",
            [theme.breakpoints.down("xs")]: {
                textAlign: "center",
                marginBottom: theme.spacing(3),
            },
        },
        appRight: {
            position: "relative",
            padding: 0,
        },
        phoneImg: {
            padding: "0 28%",
            width: "100%",
        },
        sliderScreen: {
            position: "absolute",
            padding: "1.5% 29.3% 0 29.3%",
            top: 0,
            left: 0,
            width: "100%",
            "& .slick-list": {
                borderRadius: 20,
                "& img": {
                    width: "100%",
                },
            },
            "& .slick-arrow": {
                display: "none !important",
            },
        },
        // end app
    };
});

export default useStyle;
