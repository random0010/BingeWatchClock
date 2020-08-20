import React, { FunctionComponent, useState } from 'react';
import Serie from './Serie';
import NotificationAdd from './NotificationAdd';

interface ISeries {
  series: [],
  setTime: (time: number) => void,
  setSeasonNumber: (seasonNumber: number) => void,
  setEpisodeNumber: (episodeNumber: number) => void,
  setRunTime: (runTime: number) => void,
  setStatus: (status: string) => void
}
interface INotificationData {
  title: string,
  time: number
}

const Series:FunctionComponent<ISeries> = (props) => {

  const [notificationAddVisibility, setNotificationAddVisibility] = useState(false);
  const [titleNotification, setTitleNotification] = useState("");
  const seriesSideMenu = [];

  const addToSideMenu = (data:INotificationData) => {
    setTitleNotification(data.title);
    seriesSideMenu.push(data.title);

    if(seriesSideMenu.length === 1){
      setNotificationAddVisibility(true);
    }else{
      setNotificationAddVisibility(false);
    }
  }

  // Slice 8 car on ne peut pas limiter le nombre de résultat de l'API
  return (
    <td className="series">
      {props.series.slice(0,8).map((serie:any) => (
        <Serie {...serie} setTime={props.setTime} setSeasonNumber={props.setSeasonNumber} setEpisodeNumber={props.setEpisodeNumber} setRunTime={props.setRunTime} setStatus={props.setStatus} key={serie.id} addToSideMenu={addToSideMenu} />
      ))}
      <NotificationAdd visibility={notificationAddVisibility} setNotificationAddVisibility={setNotificationAddVisibility} title={titleNotification} />
    </td>
  );
}

export default Series;