import React from "react";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import Loading from "../../Components/Loading";

const Layout = (props) => {
    return (
        <>
            <Header />
            {props.children}
            <Footer />
            <Loading />
        </>
    );
};

export default Layout;
