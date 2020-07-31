import React, { FunctionComponent, useState, useEffect } from "react";
import { Drawer } from 'antd';

interface ISideMenu {
  visibility: boolean,
  setMenuVisibility: (visibility : boolean) => void
}

const SideMenu: FunctionComponent<ISideMenu> = (props) => {
  const [visibility,setVisibility] = useState(false);
  
  const openMenu = () => {setVisibility(true);}

  const closeMenu = () => {setVisibility(false); props.setMenuVisibility(false); }

  useEffect(() => {
    if(props.visibility === true){openMenu()}
  });

  return (
    <>
      <Drawer
        title="Basic Drawer"
        placement={"left"}
        visible={visibility}
        key={"left"}
        onClose={closeMenu}
        mask={false}
        footer={<><p>footer</p></>}
      >
      </Drawer>
    </>
  );
};

export default SideMenu;