import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles((theme) => {
    return {
        user: {
            margin: "5rem auto",
            "& .ant-tabs-tab": {
                "&:hover": {
                    color: theme.palette.primary.main,
                },
            },
            "& .ant-tabs-tab-active": {
                "& .ant-tabs-tab-btn": {
                    color: theme.palette.primary.main,
                },
            },
            "& .ant-tabs-ink-bar": {
                background: theme.palette.primary.main,
            },
            [theme.breakpoints.down("sm")]: {
                margin: "2rem auto",
                "& .ant-tabs-left": {
                    flexDirection: "column",
                    "& .ant-tabs-tab": {
                        padding: 0,
                        "& .ant-tabs-tab-btn": {
                            fontSize: 18,
                        },
                    },
                    "& .ant-tabs-tabpane": {
                        padding: "20px 0 !important",
                    },
                },
            },
        },
        table: {
            minWidth: 650,
            [theme.breakpoints.down("xs")]: {
                minWidth: 320,
            },
        },
        hiddenMobile: {
            [theme.breakpoints.down("xs")]: {
                display: "none",
            },
        },
    };
});

export default useStyle;
