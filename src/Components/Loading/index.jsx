import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import useStyle from "./style";
import { useSelector } from "react-redux";

const Loading = () => {
    const classes = useStyle();

    const loading = useSelector((state) => {
        return state.layout.loading;
    });

    if (!loading) return null;

    return (
        <div className={classes.loading}>
            <CircularProgress />
        </div>
    );
};

export default Loading;
