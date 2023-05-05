import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function SongItem( { id, name, duration, genre } ) {
    return (
        <div id="songItem">
            <h2>{name}</h2>
            <p>Duration: {duration}</p>
            <div className="genre">{genre}</div>
            <Link to={`/songslist/${id}`}>See more</Link>
        </div>
    );
};

export default SongItem;