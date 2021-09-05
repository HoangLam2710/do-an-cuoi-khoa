import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles((theme) => {
    return {
        cinema: {
            "& img": {
                width: 50,
            },
            "& .MuiTypography-body1": {
                display: "inline-block",
                paddingLeft: 10,
            },
        },
        // css phần cụm rạp
        selectLocationCinema: {
            display: "flex",
            margin: "0 0 10px",
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
            fontSize: 12,
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
    };
});

export default useStyle;
