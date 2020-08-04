import React, { FunctionComponent, useState, useEffect } from "react";
import { Drawer, Button, Divider, Tag } from 'antd';

interface ISideMenu {
  visibility: boolean,
  setMenuVisibility: (visibility : boolean) => void
}

const SideMenu: FunctionComponent<ISideMenu> = (props) => {
  const [visibility,setVisibility] = useState(false);
  const [data, setData] = useState([] as string[]);
  
  const openMenu = () => {setVisibility(true);}

  const closeMenu = () => {setVisibility(false); props.setMenuVisibility(false); }

  useEffect(() => {
    if(props.visibility === true){openMenu()}
  });

  const deleteItem = (item:number) => {

  }

  const returnData = () => {
    let htmlToReturn:any = [];
    //setData(["Dragon Ball Z", "Umbrella Academy", "Friends", "Grey's Anatomy", "New York Unité Spéciale"]);
    htmlToReturn.push(<div><Tag color="#cd201f"><i className="fas fa-times"></i></Tag>&nbsp;<Tag>Umbrella Academy</Tag><Divider/></div>);
    htmlToReturn.push(<div><Tag color="#cd201f"><i className="fas fa-times"></i></Tag>&nbsp;<Tag>Dragon Ball Z</Tag><Divider/></div>);
    htmlToReturn.push(<div><Tag color="#cd201f"><i className="fas fa-times"></i></Tag>&nbsp;<Tag>New York Unité Spéciale</Tag><Divider/></div>);
    /*for(let i = 0; i < data.length; i++){
      htmlToReturn.push(
        <div>
          <span>{data[i]}</span><Button size={"small"} onClick={() => deleteItem(i)}><i className="fas fa-times"></i></Button>
        </div>
      );
    }*/
    return htmlToReturn;
  }

  return (
    <>
      <Drawer
        title="Liste de visionnages"
        placement={"left"}
        visible={visibility}
        key={"left"}
        onClose={closeMenu}
        mask={false}
        footer={<><b>5 jour(s), 6 heure(s), 6 minute(s)</b></>}
      >
        <>
          {/*data.map(function(data, index){
            return <li key={ index }>{data}</li>;
          })*/}
          {returnData()}
        </>
      </Drawer>
    </>
  );
};

export default SideMenu;