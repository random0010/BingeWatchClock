import React, { FunctionComponent, useState } from "react";
import { Menu } from 'antd';
import ModalAbout from './ModalAbout';

interface INavbar {
  setMenuVisibility: (visibility: boolean) => void
}

const Navbar: FunctionComponent<INavbar> = (props) => {
  const activeMenuItem = "app";
  const [modalVisibility, setModalVisibility] = useState(false);
  
  return (
    <>
      <Menu selectedKeys={[activeMenuItem]} mode="horizontal">
        <Menu.Item key="burger" onClick={() => {props.setMenuVisibility(true)}}>
          <i className="fas fa-bars"></i>
        </Menu.Item>
        <Menu.Item key="app" onClick={() => {setModalVisibility(true)}}>
          <i className="fas fa-stopwatch"></i>
          &nbsp;&nbsp;<b>BingeWatchClock</b>
        </Menu.Item>
      </Menu>
      <ModalAbout visibility={modalVisibility} setVisibility={setModalVisibility} />
    </>
  );
};

export default Navbar;
