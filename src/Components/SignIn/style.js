import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles((theme) => {
    return {
        textField: {
            width: "400px",
            [theme.breakpoints.down("xs")]: {
                width: "100%",
            },
        },
        margin: {
            margin: "20px 0",
        },
    };
});

export default useStyle;
