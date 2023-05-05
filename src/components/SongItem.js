import React from "react";

function SongItem( {name, duration, genre} ){
    console.log(name)

    return(
        <div>
            <h2>{name}</h2>
            <p>{genre}</p>
            <p>{duration}</p>
        </div>
    );
};

export default SongItem;