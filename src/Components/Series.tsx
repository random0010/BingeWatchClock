import React, { FunctionComponent } from 'react';
import Serie from './Serie';

type ISeries = {
  series: [],
  setTime: (time: number) => void
}

const Series:FunctionComponent<ISeries> = (props) => {

  // Slice 3 car on ne peut pas limiter le nombre de résultat de l'API
  return (
    <td className="series">
      {props.series.slice(0,3).map((serie:any) => (
        <Serie {...serie} setTime={props.setTime} key={serie.id} />
      ))}
    </td>
  );
}

export default Series;