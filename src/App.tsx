import React, { useState, FunctionComponent, useEffect } from 'react';
import 'antd/dist/antd.css';
import './App.css';
import { Button, Tag, Tabs, Timeline } from 'antd';
import Navbar from './Components/Navbar';
import SideMenu from './Components/SideMenu';
import SerieBrowser from './Components/SerieBrowser';

declare const ButtonTypes: ["default", "primary", "ghost", "dashed", "link"];
export declare type ButtonType = typeof ButtonTypes[number];

const { TabPane } = Tabs;

const App:FunctionComponent = () => {
  const [session, setSession] = useState(0);
  const [selected, setSelected] = useState(2);
  const [time, setTime] = useState(0);
  const [seasonNumber, setSeasonNumber] = useState(0);
  const [episodeNumber, setEpisodeNumber] = useState(0);
  const [runTime, setRunTime] = useState(0);
  const [status, setStatus] = useState("inconnu");
  const [menuVisibility, setMenuVisibility] = useState(false);
  const [typeButton1, setTypeButton1] = useState("primary");
  const [typeButton2, setTypeButton2] = useState("default");
  const [typeButton3, setTypeButton3] = useState("default");
  const [typeButton4, setTypeButton4] = useState("default");
  const [typeButton5, setTypeButton5] = useState("default");
  //const [typeButton6, setTypeButton6] = useState("default");

  useEffect(() => {
    let session = parseFloat((time/selected).toFixed(2));
    setSession(session);
  }, [session,time,selected,setSession]);

  const setActiveSession = (id:number) => {
    if(id === 1){
      setTypeButton1("primary"); setTypeButton2("default"); setTypeButton3("default"); setTypeButton4("default"); setTypeButton5("default"); //setTypeButton6("default")
      setSelected(2);
    }else if(id === 2){
      setTypeButton1("default"); setTypeButton2("primary"); setTypeButton3("default"); setTypeButton4("default"); setTypeButton5("default"); //setTypeButton6("default")
      setSelected(3);
    }else if(id === 3){
      setTypeButton1("default"); setTypeButton2("default"); setTypeButton3("primary"); setTypeButton4("default"); setTypeButton5("default"); //setTypeButton6("default")
      setSelected(4);
    }else if(id === 4){
      setTypeButton1("default"); setTypeButton2("default"); setTypeButton3("default"); setTypeButton4("primary"); setTypeButton5("default"); //setTypeButton6("default")
      setSelected(6);
    }else if(id === 5){
      setTypeButton1("default"); setTypeButton2("default"); setTypeButton3("default"); setTypeButton4("default"); setTypeButton5("primary"); //setTypeButton6("default")
      setSelected(8);
    }/*else if(id === 6){
      setTypeButton1("default"); setTypeButton2("default"); setTypeButton3("default"); setTypeButton4("default"); setTypeButton5("default"); setTypeButton6("primary")
      setSelected(12);
    }*/
  }

  const timeInformation = () => {
    if(isNaN(time)){
      return "Informations manquantes"
    }else{
      return time + "h";
    }
  }

  const sessionInformation = () => {
    if(isNaN(time)){
      return "X"
    }else{
      return session;
    }
  }

  const convertToDayHourMin = () => {
    if(!isNaN(time)){
      let num = time * 60;
      let d = Math.floor(num/1440);
      let h = Math.floor((num-(d*1440))/60);
      let m = Math.round(num%60);
    
      return(d + " jour(s), " + h + " heure(s), "+m+" minute(s)");
    }else{
      return "Informations manquantes"
    }
  }

  const textFormatter = (text:string) => {
    let textToReturn = ""
    if(text === "season"){
      if(seasonNumber > 1){
        textToReturn = seasonNumber + " saisons";
      }else{
        textToReturn = seasonNumber + " saison";
      }
    }
    else if(text === "episode"){
      if(episodeNumber > 1){
        textToReturn = episodeNumber + " épisodes";
      }else{
        textToReturn = episodeNumber + " épisode";
      }
    }
    else if(text === "runtime"){
      if(runTime > 1){
        textToReturn = runTime + " minutes par épisode";
      }else{
        textToReturn = "Information manquante sur la durée des épisodes.";
      }
    }
    return textToReturn;
  }

  return (
    <div className="App">
      <Navbar setMenuVisibility={setMenuVisibility} />
      <SideMenu visibility={menuVisibility} setMenuVisibility={setMenuVisibility} />
      <br/>
      <p className="instruction">Cliquer sur une série pour commencer...</p>
      <SerieBrowser setTime={setTime} setSeasonNumber={setSeasonNumber} setEpisodeNumber={setEpisodeNumber} setRunTime={setRunTime} setStatus={setStatus}/>
      
      <Tabs defaultActiveKey="1" type="card">
        <TabPane tab="Temps de visionnage" key="1">
          <div className="container-information">
            <p>Diviser le temps en sessions</p>
            <div className="buttons-group">
              <Button type={typeButton1 as ButtonType} onClick={() => setActiveSession(1)}>2h</Button>&nbsp;&nbsp;
              <Button type={typeButton2 as ButtonType} onClick={() => setActiveSession(2)}>3h</Button>&nbsp;&nbsp;
              <Button type={typeButton3 as ButtonType} onClick={() => setActiveSession(3)}>4h</Button>&nbsp;&nbsp;
              <Button type={typeButton4 as ButtonType} onClick={() => setActiveSession(4)}>6h</Button>&nbsp;&nbsp;
              <Button type={typeButton5 as ButtonType} onClick={() => setActiveSession(5)}>8h</Button>&nbsp;&nbsp;
              {/*<Button type={typeButton6 as ButtonType} onClick={() => setActiveSession(6)}>12h</Button>&nbsp;&nbsp;*/}
            </div>
            <br/>
            <div style={{marginTop: "-10px"}}>
              <Tag color="#108ee9" style={{padding:"8px 8px 8px 8px"}}>{sessionInformation()} session(s) de {selected}h</Tag>
              <div className="tags-group">
                <Tag color="geekblue" style={{padding:"8px 8px 8px 8px", marginTop:"10px", marginBottom:"5px"}}>{convertToDayHourMin()}</Tag>
                <Tag color="geekblue" style={{padding:"8px 8px 8px 8px", marginTop:"10px", marginBottom:"5px"}}>{timeInformation()}</Tag>
              </div>
            </div>
          </div>
        </TabPane>
        <TabPane tab="Informations" key="2">
          <div className="container-timeline">
            <Timeline>
              <Timeline.Item>Statut : {status}</Timeline.Item>
              <Timeline.Item>{textFormatter("season")}</Timeline.Item>
              <Timeline.Item>{textFormatter("episode")}</Timeline.Item>
              <Timeline.Item>{textFormatter("runtime")}</Timeline.Item>
            </Timeline>
          </div>
        </TabPane>
      </Tabs>
    </div>
  );
}
export default App;