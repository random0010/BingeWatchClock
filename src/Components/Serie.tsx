import React, { FunctionComponent } from 'react';

interface ISerie {
  id: number,
  name: string,
  vote_average: number,
  poster_path: string,
  setTime: (time: number) => void,
  setSeasonNumber: (seasonNumber: number) => void,
  setEpisodeNumber: (episodeNumber: number) => void,
  setRunTime: (runTime: number) => void,
  setStatus: (status: string) => void,
  addToSideMenu: (data: INotificationData) => void
}

interface INotificationData {
  title: string,
  time: number
}

const Serie:FunctionComponent<ISerie> = (props) => {

  const defineImagePath = (path:string) => {
    if(path === null){
      return "./notfound.png";
    }else{
      return "https://image.tmdb.org/t/p/w300_and_h450_bestv2"+path;
    }
  }

  const setRunTime = (runTime:number) => {
    props.setRunTime(runTime);
  }

  const setStatus = (status:string) => {
    let text = "";
    if(status === "Returning Series"){text = "en cours"}
    else{text="terminée"}
    props.setStatus(text);
  }

  const getDatas = (id:number) => {
    let url = 'https://api.themoviedb.org/3/tv/'+id+'?api_key=cfe422613b250f702980a3bbf9e90716&language=fr';
    fetch (url)
      .then(response => response.json())
      .then(data => {
        let runtime = data.episode_run_time;
        let episode = data.number_of_episodes;
        let dynamicId = 'serie-'+id;
        let movie = document.getElementsByClassName("poster") as HTMLCollectionOf<HTMLElement>;
        for(let i = 0; i < movie.length; i++){
          if(movie[i].id === dynamicId){
            document.getElementById(dynamicId)!.style.boxShadow = "0 0 1pt 2pt #1890FF";
            props.setTime(parseFloat(((runtime * episode)/60).toFixed(2)));
            props.setSeasonNumber(data.number_of_seasons);
            props.setEpisodeNumber(data.number_of_episodes);
            setStatus(data.status);
            setRunTime(runtime);
          }else{
            movie[i].style.boxShadow = "0 0 5px";
          }
        }
      });
  }

  /*const addToSideMenu = (id:number, title:string) => {
    let url = 'https://api.themoviedb.org/3/tv/'+id+'?api_key=cfe422613b250f702980a3bbf9e90716&language=fr';
    fetch (url)
      .then(response => response.json())
      .then(data => {
        let runtime = data.episode_run_time[0];
        let episode = data.number_of_episodes;
        let time = (runtime * episode)/60;
        let INotificationData : INotificationData = {title,time};
        props.addToSideMenu(INotificationData);  
      })
  }*/

  return (
    <div className="serie" onClick={() => getDatas(props.id)}>
      <figure className="figure">
        <img src={defineImagePath(props.poster_path)} className="poster" id={"serie-"+props.id.toString()} alt="img" />
        <h5 className="name">{props.name}</h5>
        {/*<Tag color="geekblue" style={{padding:"2px px 4px 2px", marginTop:"2px"}}>{(props.vote_average/2).toFixed(1)}&nbsp;<StarTwoTone/></Tag>*/}
        {/*<br/><br/><Button type="primary" onClick={() => addToSideMenu(props.id, props.name)}><i className="fas fa-calculator"></i>&nbsp; Ajouter</Button>*/}
      </figure>
    </div>
  );
}

export default Serie;