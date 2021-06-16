import React from 'react';

const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
        return lat>0?'Summer':'Winter';
    } else {
        return lat>0?'Winter':'Summer';
    }
}

const SeasonShow = ({lat, long}) => {
    const Season = getSeason (lat, new Date().getMonth());
    const text = Season === 'Summer' ? "It's quite hot" : "It's chilly"

    return (
        <div>
          <h1>Season: {Season}</h1>
          <h3>{text}</h3>
        </div>
    );
}
 
export default SeasonShow;