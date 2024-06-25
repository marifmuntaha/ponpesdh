import React from "react";
import Head from "./head";

const Layout = ({title, ...props}) => {

    return (
        <>
            <Head title={!title && 'Loading'} />
            <div className="nk-app-root">
                <div className="nk-wrap nk-wrap-nosidebar">
                    <div className="nk-content">
                        {props.children}
                    </div>
                </div>
            </div>
        </>
    );
};
export default Layout;
