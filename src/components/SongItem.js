import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function SongItem( { id, name, duration, genre } ) {
    return (
        <div>
            <h2>{name}</h2>
            <p>{genre}</p>
            <p>{duration}</p>
            <Link to={`/songslist/${id}`}>See more</Link>
        </div>
    );
};

export default SongItem;