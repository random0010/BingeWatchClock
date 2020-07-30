import React, { useState, useEffect, FunctionComponent } from 'react';
import SearchInput from './Search';
import Series from './Series';

interface ISerieBrowser {
  setTime: (time: number) => void
}

const SerieBrowser: FunctionComponent<ISerieBrowser> = (props) => {

  const [series, setSeries] = useState([] as any);
  const [query, setQuery] = useState("");

  const onInput = (query:string) => {
    if(query !== ""){
      setQuery(query);
      const url = `https://api.themoviedb.org/3/search/tv?query=${query}&api_key=cfe422613b250f702980a3bbf9e90716&language=fr`;
      fetch (url)
        .then(response => response.json())
        .then(data => {
          setSeries(data.results);
        });
    }else{
      setQuery("");
      getPopularSeries();
    }
  }
  
  const getPopularSeries = () => {
    let url = 'https://api.themoviedb.org/3/tv/popular?api_key=cfe422613b250f702980a3bbf9e90716&language=fr';
    fetch (url)
      .then(response => response.json())
      .then(data => {
        setSeries(data.results);
      });
  }
  
  useEffect(() => getPopularSeries(), []);


  let isSearched = (query:string) => (item:any) => !query || item.name.toLowerCase().includes(query.toLowerCase());
  
  return (
    <div className="container-content">
      <SearchInput query={query} onInput={onInput} />
      <div id="container-table">
        <table>
          <tbody>
            <tr>
              <Series series={series.filter(isSearched(query))} setTime={props.setTime} />
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default SerieBrowser;