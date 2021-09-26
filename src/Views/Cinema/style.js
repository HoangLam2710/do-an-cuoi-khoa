import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles((theme) => {
    return {
        glassBackground: {
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            minHeight: 300,
            backgroundPosition: "center",
            padding: 0,
            [theme.breakpoints.down("xs")]: {
                background: "none !important",
            },
        },
        customBox: {
            height: "auto",
            minWidth: 100,
            padding: "6rem 0 2rem",
            backdropFilter: "blur(8px)",
            background:
                "linear-gradient(to top, rgb(255, 255, 255), transparent 100%) !important",
            [theme.breakpoints.down("xs")]: {
                padding: 0,
                "& .MuiContainer-root": {
                    padding: 0,
                },
            },
        },
        cinemaImg: {
            "& img": {
                borderRadius: 4,
                width: "100%",
                height: 320,
                boxShadow: "0 0 16px 0 rgb(0 0 0 / 50%)",
                [theme.breakpoints.down("xs")]: {
                    height: 180,
                    objectFit: "cover",
                },
            },
        },
        cinemaName: {
            display: "flex",
            alignItems: "center",
            [theme.breakpoints.down("xs")]: {
                padding: "10px 20px !important",
                "& .MuiTypography-h5": {
                    fontSize: "1.2rem",
                },
                "& button": {
                    display: "none",
                },
            },
        },
        cinemaButton: {
            marginTop: 20,
            padding: "5px 20px",
        },
        showTime: {
            backgroundColor: "white",
            padding: "2rem 0 4rem",
            [theme.breakpoints.down("xs")]: {
                display: "none",
            },
        },
        locationCinema: {
            "& .ant-tabs-nav": {
                width: "30% !important",
                border: "1px solid #f0f0f0",
                "& .ant-tabs-tab": {
                    padding: 0,
                    background: "transparent",
                    border: "none",
                    display: "block",
                    width: "100%",
                    opacity: 0.5,
                    "&:hover": {
                        opacity: "1 !important",
                    },
                    "&.ant-tabs-tab-active": {
                        "& $selectLocationCinema": {
                            opacity: "1 !important",
                        },
                    },
                },
            },
            // css cho các lịch chiếu
            "& .ant-tabs-content-holder": {
                width: "calc(100% - 30%)",
                border: "1px solid #f0f0f0",
                "& .ant-tabs-tabpane": {
                    "& img": {
                        width: 80,
                        height: 120,
                        borderRadius: 5,
                    },
                },
            },
        },
        // css phần cụm rạp
        selectLocationCinema: {
            display: "flex",
            margin: "5px 20px 0",
            paddingTop: 10,
            paddingBottom: 15,
            borderBottom: "1px solid #f0f0f0",
            transition: "all .5s",
            "& img": {
                padding: "0px !important",
                width: "50px !important",
                height: 50,
                border: "none !important",
                alignSelf: "center",
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
        },
        showTimeMobile: {
            display: "none",
            [theme.breakpoints.down("xs")]: {
                display: "block",
                marginBottom: 30,
                "& .ant-collapse-header": {
                    padding: "0 !important",
                },
            },
        },
    };
});

export default useStyle;
