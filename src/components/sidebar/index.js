import React, { useState } from "react";

import { Layout, Menu, Button } from "antd";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  AreaChartOutlined,
  CommentOutlined,
  UserAddOutlined,
} from "@ant-design/icons";
import _ from "lodash";
import Leadslogo from "../../images/Leadslogo.jpg";

const { Header, Sider, Content } = Layout;

const MENU = [
  {
    name: "Insights<br>hhhhhhh",

    url: "/insight",
    icon: AreaChartOutlined,
    position: "fixed",
  },
  {
    name: "Comments",
    url: "/post",
    icon: CommentOutlined,
  },
  {
    name: "Profile",
    url: "/profile",
    icon: UserAddOutlined,
  },
];
const Sidebar = (props) => {
  const { children, logout } = props;
  const [collapsed, setCollapsed] = useState(false);

  const toggle = () => {
    collapsed ? setCollapsed(false) : setCollapsed(true);
  };

  const createIcon = (string) => {
    let component = React.createElement(string);
    return component;
  };
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["0"]}
          className="sidebar"
        >
          <div className="logo" style={{ margin: "13px", height: "38px" }}>
            <img
              src={Leadslogo}
              alt="Logo"
              style={{ height: "-webkit-fill-available" }}
            />
          </div>
          {_.map(MENU, (data, index) => {
            return (
              <Menu.Item key={index}>
                <Link to={data.url}>
                  {createIcon(data.icon)}
                  <span>{data.name}</span>
                </Link>
              </Menu.Item>
            );
          })}
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header
          className="site-layout-background fl-right"
          style={{ padding: 0, zIndex: 1 }}
        >
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: toggle,
            }
          )}
          <Button danger type="primary" className="cus-btn" onClick={logout}>
            Logout
          </Button>
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: "24px 6px",
            padding: 24,
            height: "100%",
            minHeight: "580px",
            overflow: "hidden",
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default Sidebar;
