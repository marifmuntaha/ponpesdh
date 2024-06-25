import React from "react";
import Sidebar from "./sidebar";
import Head from "./head";
import Header from "./header";
import Footer from "./footer";
import AppRoot from "./global/AppRoot";
import AppMain from "./global/AppMain";
import AppWrap from "./global/AppWrap";
const Layout = ({title, ...props}) => {
    return (
        <>
            <Head title={!title && 'Loading'} />
            <AppRoot>
                <AppMain>
                    <Sidebar fixed />
                    <AppWrap>
                        <Header fixed />
                        {props.children}
                        <Footer />
                    </AppWrap>
                </AppMain>
            </AppRoot>
        </>
    );
};
export default Layout;
