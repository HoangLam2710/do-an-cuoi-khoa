import React from "react";
import {
    AppBar,
    Toolbar,
    Container,
    Typography,
    Backdrop,
    Fade,
    Modal,
    Box,
} from "@material-ui/core";
import { NavLink } from "react-router-dom";
import useStyle from "./style";
import SignIn from "../SignIn";
import SignUp from "../SignUp";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionTypes } from "../../Store/actions/types";
import { createAction } from "../../Store/actions";

const Header = () => {
    const classes = useStyle();
    const dispatch = useDispatch();

    // biến login trên store quản lý việc bật tắt modal signin, signup
    const login = useSelector((state) => {
        return state.user.login;
    });

    const isSignIn = useSelector((state) => {
        return state.user.isSignIn;
    });

    const user = useSelector((state) => {
        return state.user.user;
    });

    const handleOpen = useCallback(
        (isSignIn) => {
            // set để bật popup
            dispatch(createAction(actionTypes.SET_LOGIN, true));
            // isSignIn để kiểm tra hiện SignIn hay SignUp
            dispatch(createAction(actionTypes.SET_SIGNIN, isSignIn));
        },
        [dispatch]
    );

    const handleClose = useCallback(() => {
        // set để tắt popup
        dispatch(createAction(actionTypes.SET_LOGIN, false));
    }, [dispatch]);

    const hideCinema = useCallback((open) => {
        return () => {
            let active = document.getElementById("sideMenu");
            open
                ? active.classList.add("active")
                : active.classList.remove("active");
        };
    }, []);

    const handleLogout = () => {
        window.location.reload();
        localStorage.removeItem("taiKhoan");
        localStorage.removeItem("t");
        dispatch(createAction(actionTypes.REMOVE_USER));
    };

    return (
        <AppBar position="sticky" className={classes.navbarHeader}>
            <Toolbar>
                <Container>
                    <NavLink exact to="/">
                        <div className={classes.logo}></div>
                    </NavLink>
                </Container>

                <Container className={classes.menu}>
                    <a href="/#listfilm" className={classes.navLink}>
                        Lịch chiếu
                    </a>
                    <a href="/#cinema" className={classes.navLink}>
                        Cụm rạp
                    </a>
                    <a href="/#app" className={classes.navLink}>
                        Ứng dụng
                    </a>
                </Container>

                <Container className={classes.signin}>
                    {user ? (
                        <>
                            <NavLink to="/user" className={classes.navLink}>
                                Hi, {user.hoTen?.toUpperCase()}
                            </NavLink>
                            <Typography
                                style={{
                                    margin: "0 -20px",
                                    color: "#9b9b9b",
                                }}
                            >
                                |
                            </Typography>
                            <Typography
                                onClick={handleLogout}
                                className={classes.navLink}
                            >
                                Đăng xuất
                            </Typography>
                        </>
                    ) : (
                        <>
                            <Typography
                                onClick={() => handleOpen(true)}
                                className={classes.navLink}
                            >
                                Đăng nhập
                            </Typography>
                            <Typography
                                style={{
                                    margin: "0 -20px",
                                    color: "#9b9b9b",
                                }}
                            >
                                |
                            </Typography>
                            <Typography
                                onClick={() => handleOpen(false)}
                                className={classes.navLink}
                            >
                                Đăng ký
                            </Typography>
                        </>
                    )}
                </Container>

                <Container className={classes.rightMenu}>
                    <img
                        src="../assets/img/menu-options.png"
                        alt="menu mobile"
                        onClick={hideCinema(true)}
                    />
                </Container>

                <Container
                    id="sideMenu"
                    className={classes.sideMenu}
                    onClick={hideCinema(false)}
                >
                    <Container className={classes.wrapMenuMobile}>
                        <Container className={classes.wrapFirst}>
                            {user ? (
                                <NavLink to="/user" className={classes.navLink}>
                                    Hi, {user.hoTen?.toUpperCase()}
                                </NavLink>
                            ) : (
                                <Box
                                    className={classes.titleMenuMobile}
                                    onClick={() => handleOpen(true)}
                                >
                                    <img
                                        src="../assets/img/avatar.png"
                                        alt="login"
                                    />
                                    <Typography
                                        variant="subtitle2"
                                        className={classes.navLink}
                                        component="span"
                                    >
                                        Đăng nhập
                                    </Typography>
                                </Box>
                            )}
                            <img
                                src="../assets/img/next-session.png"
                                alt="menu mobile"
                                className={classes.close}
                                onClick={hideCinema(false)}
                            />
                        </Container>
                        <a href="/#listfilm" className={classes.navLinkMobile}>
                            Lịch chiếu
                        </a>
                        <NavLink to="/cinema" className={classes.navLinkMobile}>
                            Cụm rạp
                        </NavLink>
                        <a href="/#app" className={classes.navLinkMobile}>
                            Ứng dụng
                        </a>
                    </Container>
                </Container>
            </Toolbar>

            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={login}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={login}>
                    <div className={classes.paper}>
                        {isSignIn ? <SignIn /> : <SignUp />}
                    </div>
                </Fade>
            </Modal>
        </AppBar>
    );
};

export default Header;
