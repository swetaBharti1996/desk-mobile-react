import React from "react";
import PageWrapper from "../UI/wrapper/pageWrapper";
import Header from "../components/header";
import Footer from "../components/footer";
import Sidebar from "../components/sidebar";
import { Button } from "antd";
import Card from "./card";
export default class Store extends React.Component {
  render() {
    const { home } = this.props;

    return (
      <PageWrapper>
        <Sidebar />
        {home.map((item, index) => (
          <Card home={item} />
        ))}

        <Footer />
      </PageWrapper>
    );
  }
}
