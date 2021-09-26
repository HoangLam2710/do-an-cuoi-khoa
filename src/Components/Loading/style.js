import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles((theme) => {
    return {
        loading: {
            position: "fixed",
            height: "100%",
            background: "rgb(255,255,255)",
            width: "100%",
            top: "0",
            left: "0",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: "99999",
        },
    };
});

export default useStyle;
