import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import useStyle from "./style";

const Loading = () => {
  const classes = useStyle();

  return (
    <div className={classes.loading}>
      <CircularProgress />
    </div>
  );
};

export default Loading;
