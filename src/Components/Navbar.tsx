import React, { FunctionComponent } from "react";
import { Menu } from 'antd';
import { ClockCircleTwoTone } from '@ant-design/icons';


const Navbar: FunctionComponent = props => {
  const activeMenuItem = "app";
  
  return (
    <>
      <Menu selectedKeys={[activeMenuItem]} mode="horizontal">
        <Menu.Item key="app" onClick={() => {}}>
          <ClockCircleTwoTone />
          <span>BingeWatchClock</span>
        </Menu.Item>
      </Menu>
    </>
  );
};

export default Navbar;
