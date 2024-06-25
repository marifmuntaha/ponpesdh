import React from "react";
import Layout from "../../../layouts";
import Content from "../../../layouts/content";
import Head from "../../../layouts/head";

const BlankPage = ({ ...props }) => {
    return (
        <Layout>
            <Head title="Blank Page" />
            <Content>
                <p>Starter Page for general layout</p>
            </Content>
        </Layout>
    );
};

export default BlankPage;
