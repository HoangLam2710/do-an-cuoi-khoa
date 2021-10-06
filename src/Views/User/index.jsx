import React, { Fragment, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Container,
    Box,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    IconButton,
    Collapse,
} from "@material-ui/core";
import { Tabs } from "antd";
import {
    Email,
    PhoneIphone,
    Person,
    KeyboardArrowDown,
    KeyboardArrowUp,
} from "@material-ui/icons";

import { getUser } from "../../Store/actions/auth";
import { createAction } from "../../Store/actions";
import { actionTypes } from "../../Store/actions/types";

import * as dayjs from "dayjs";
import numeral from "numeral";

import useStyle from "./style";

const { TabPane } = Tabs;

const Ticket = (props) => {
    const classes = useStyle();
    const { ticket } = props || {};
    const [open, setOpen] = useState(false);

    return (
        <Fragment>
            <TableRow>
                <TableCell component="th" scope="row">
                    {ticket.maVe}
                </TableCell>
                <TableCell align="right">{ticket.tenPhim}</TableCell>
                <TableCell align="right" className={classes.hiddenMobile}>
                    {ticket.thoiLuongPhim} phút
                </TableCell>
                <TableCell align="right" className={classes.hiddenMobile}>
                    {dayjs(ticket.ngayDat).format("HH:mm DD/MM/YYYY")}
                </TableCell>
                <TableCell align="right" className={classes.hiddenMobile}>
                    {numeral(ticket.giaVe * ticket.danhSachGhe.length).format(
                        "0,0"
                    )}
                </TableCell>
                <TableCell align="right">
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
                    </IconButton>
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell
                    style={{
                        paddingBottom: 0,
                        paddingTop: 0,
                    }}
                    colSpan={6}
                >
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box margin={1}>
                            <Table size="small" aria-label="purchases">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Hệ thống rạp</TableCell>
                                        <TableCell align="right">
                                            Tên rạp
                                        </TableCell>
                                        <TableCell align="right">
                                            Số ghế
                                        </TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {ticket.danhSachGhe.map((ghe) => {
                                        return (
                                            <TableRow key={ghe.maGhe}>
                                                <TableCell
                                                    component="th"
                                                    scope="row"
                                                >
                                                    {ghe.tenHeThongRap}
                                                </TableCell>
                                                <TableCell align="right">
                                                    {ghe.tenRap}
                                                </TableCell>
                                                <TableCell align="right">
                                                    {ghe.tenGhe}
                                                </TableCell>
                                            </TableRow>
                                        );
                                    })}
                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </Fragment>
    );
};

const User = (props) => {
    const classes = useStyle();
    const dispatch = useDispatch();

    const [keyTab, setKeyTab] = useState("tai-khoan");

    const user = useSelector((state) => {
        return state.user.user;
    });

    useEffect(() => {
        dispatch(createAction(actionTypes.SHOW_LOADING));
        window.scroll({ top: 0, behavior: "smooth" });

        dispatch(getUser);
        setKeyTab(props.match.params.id);

        setTimeout(() => {
            dispatch(createAction(actionTypes.HIDDEN_LOADING));
        }, 2000);
    }, [dispatch, props.match.params.id]);

    const handleTabClick = (key) => {
        setKeyTab(key);
    };

    return (
        <>
            {user && (
                <Container className={classes.user} maxWidth="md">
                    <Tabs
                        activeKey={keyTab}
                        tabPosition="left"
                        onChange={handleTabClick}
                    >
                        <TabPane tab="Thông tin tài khoản" key="tai-khoan">
                            <Box>
                                <List
                                    component="nav"
                                    aria-label="main mailbox folders"
                                >
                                    <ListItem>
                                        <ListItemIcon>
                                            <Person />
                                        </ListItemIcon>
                                        <ListItemText primary={user.hoTen} />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemIcon>
                                            <Email />
                                        </ListItemIcon>
                                        <ListItemText primary={user.email} />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemIcon>
                                            <PhoneIphone />
                                        </ListItemIcon>
                                        <ListItemText primary={user.soDT} />
                                    </ListItem>
                                </List>
                            </Box>
                        </TabPane>
                        <TabPane tab="Thông tin đặt vé" key="dat-ve">
                            <TableContainer component={Paper}>
                                <Table
                                    className={classes.table}
                                    aria-label="ticket"
                                >
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Mã vé</TableCell>
                                            <TableCell align="right">
                                                Tên phim
                                            </TableCell>
                                            <TableCell
                                                align="right"
                                                className={classes.hiddenMobile}
                                            >
                                                Thời lượng
                                            </TableCell>
                                            <TableCell
                                                align="right"
                                                className={classes.hiddenMobile}
                                            >
                                                Ngày đặt
                                            </TableCell>
                                            <TableCell
                                                align="right"
                                                className={classes.hiddenMobile}
                                            >
                                                Giá vé
                                            </TableCell>
                                            <TableCell align="right">
                                                Chi tiết vé
                                            </TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {user.thongTinDatVe?.map((ticket) => {
                                            return (
                                                <Ticket
                                                    key={ticket.maVe}
                                                    ticket={ticket}
                                                />
                                            );
                                        })}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </TabPane>
                    </Tabs>
                </Container>
            )}
        </>
    );
};

export default User;
