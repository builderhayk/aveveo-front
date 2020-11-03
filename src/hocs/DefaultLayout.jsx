import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const DefaultLayout = ({children, ...props}) => {
    return (
        <>
            <Header/>
            {children}
            <Footer/>
        </>
    )
};
export default DefaultLayout;
