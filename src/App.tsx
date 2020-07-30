import React, { useState, FunctionComponent, useEffect } from 'react';
import 'antd/dist/antd.css';
import './App.css';
import { Button, Tag } from 'antd';
import Navbar from './Components/Navbar';
import SerieBrowser from './Components/SerieBrowser';

declare const ButtonTypes: ["default", "primary", "ghost", "dashed", "link"];
export declare type ButtonType = typeof ButtonTypes[number];

const App:FunctionComponent = () => {
  const [session, setSession] = useState(0);
  const [selected, setSelected] = useState(2);
  const [time, setTime] = useState(0);
  const [typeButton1, setTypeButton1] = useState("primary");
  const [typeButton2, setTypeButton2] = useState("default");
  const [typeButton3, setTypeButton3] = useState("default");
  const [typeButton4, setTypeButton4] = useState("default");
  const [typeButton5, setTypeButton5] = useState("default");

  useEffect(() => {
    let session = (time/selected);
    setSession(Math.floor(session));
  }, [session,time,selected,setSession]);

  const setActiveSession = (id:number) => {
    if(id === 1){
      setTypeButton1("primary"); setTypeButton2("default"); setTypeButton3("default"); setTypeButton4("default"); setTypeButton5("default");
      setSelected(2);
    }else if(id === 2){
      setTypeButton1("default"); setTypeButton2("primary"); setTypeButton3("default"); setTypeButton4("default"); setTypeButton5("default");
      setSelected(3);
    }else if(id === 3){
      setTypeButton1("default"); setTypeButton2("default"); setTypeButton3("primary"); setTypeButton4("default"); setTypeButton5("default");
      setSelected(4);
    }else if(id === 4){
      setTypeButton1("default"); setTypeButton2("default"); setTypeButton3("default"); setTypeButton4("primary"); setTypeButton5("default");
      setSelected(8);
    }else if(id === 5){
      setTypeButton1("default"); setTypeButton2("default"); setTypeButton3("default"); setTypeButton4("default"); setTypeButton5("primary");
      setSelected(12);
    }
  }

  return (
    <div className="App">
      <Navbar />
      <br/>
      <p>Cliquer sur une série pour afficher le temps de visionnage.</p>
      <SerieBrowser setTime={setTime} />
      <div id="container-informations">
        <p>Diviser le temps en sessions</p>
        <div className="buttons-group">
          <Button type={typeButton1 as ButtonType} size="large" onClick={() => setActiveSession(1)}>2h</Button>&nbsp;&nbsp;
          <Button type={typeButton2 as ButtonType} size="large" onClick={() => setActiveSession(2)}>3h</Button>&nbsp;&nbsp;
          <Button type={typeButton3 as ButtonType} size="large" onClick={() => setActiveSession(3)}>4h</Button>&nbsp;&nbsp;
          <Button type={typeButton4 as ButtonType} size="large" onClick={() => setActiveSession(4)}>8h</Button>&nbsp;&nbsp;
          <Button type={typeButton5 as ButtonType} size="large" onClick={() => setActiveSession(5)}>12h</Button>&nbsp;&nbsp;
        </div>
        <br/>
        <div className="tags-group">
          <Tag color="#108ee9" style={{fontSize:"150%", padding:"1% 1% 1% 1%", marginTop:"1%"}}>Temps de visionnage : {time}h</Tag>
          <Tag color="geekblue" style={{fontSize:"150%", padding:"1% 1% 1% 1%", marginTop:"1%"}}>{session} sessions de {selected}h</Tag>
        </div>
        <br/><br/>
      </div>
    </div>
  );
}
export default App;

//@todo responsive, vérifier le calcul(pas possible), plus le temps en jour min