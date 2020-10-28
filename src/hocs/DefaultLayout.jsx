import React from "react";
import Header from "../components/Header";

const DefaultLayout = ({children, ...props}) => {
    return (
        <>
            <Header/>
            {children}
        </>
    )
};
export default DefaultLayout;
