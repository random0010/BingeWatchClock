import React, { FunctionComponent } from 'react';
import { Tag } from 'antd';
import { StarTwoTone } from '@ant-design/icons';

interface ISerie {
  id: number,
  name: string,
  vote_average: number,
  poster_path: string,
  setTime: (time: number) => void
}

const Serie:FunctionComponent<ISerie> = (props) => {

  const defineImagePath = (path:string) => {
    if(path === null){
      return "./notfound.png";
    }else{
      return "https://image.tmdb.org/t/p/w300_and_h450_bestv2"+path;
    }
  }

  const getDatas = (id:number) => {
    document.getElementById("container-informations")!.style.opacity = "1";
    let url = 'https://api.themoviedb.org/3/tv/'+id+'?api_key=cfe422613b250f702980a3bbf9e90716&language=fr';
    fetch (url)
      .then(response => response.json())
      .then(data => {
        let runtime = data.episode_run_time[0];
        //let season = data.number_of_seasons;
        let episode = data.number_of_episodes;
        let dynamicId = 'serie-'+id;
        let movie = document.getElementsByClassName("poster") as HTMLCollectionOf<HTMLElement>;
        for(let i = 0; i < movie.length; i++){
          if(movie[i].id === dynamicId){
            document.getElementById(dynamicId)!.style.outline = "solid 5px #1890FF";
            props.setTime(Math.floor((runtime * episode)/60));
          }else{
            movie[i].style.outline = "solid 0px black";
          }
        }
      });
  }

  return (
    <div className="serie" onClick={() => getDatas(props.id)}>
      <figure className="figure">
        <img src={defineImagePath(props.poster_path)} className="poster" id={"serie-"+props.id.toString()} alt="img" />
        <h2 className="name">{props.name}</h2>
        <Tag color="geekblue" style={{fontSize:"150%", padding:"1% 1% 1% 1%", marginTop:"1%"}}>{props.vote_average/2}&nbsp;<StarTwoTone/></Tag>
      </figure>
    </div>
  );
}

export default Serie;