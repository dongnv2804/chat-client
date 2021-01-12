import React, { useState } from "react";
import { Row, Tabs } from "antd";
import "./index.css";
import LoginPage from "../../containers/Login";
import RegisterPage from "../../containers/Register";

const HomePage = () => {
  const [activekey, setActiveKey] = useState("1");
  return (
    <Row className="main" justify="center" align="middle">
      <Tabs
        className="tab-style"
        activeKey={activekey}
        defaultActiveKey="1"
        centered
        onChange={(activekey) => setActiveKey(activekey)}
      >
        <Tabs.TabPane tab="Login" key="1">
          <LoginPage changeTab={setActiveKey} />
        </Tabs.TabPane>
        <Tabs.TabPane tab="Register" key="2">
          <RegisterPage changeTab={setActiveKey} />
        </Tabs.TabPane>
      </Tabs>
    </Row>
  );
};

export default HomePage;
