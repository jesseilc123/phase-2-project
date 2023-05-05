import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function SongDetail () {
    const [indivSong, setIndivSong] = useState(null);
    const { id } = useParams()


    useEffect(() => {
        fetch(`http://localhost:3000/songs/${id}`)
            .then(r => r.json())
            .then(data => setIndivSong(data))
    }, [id])

    if(!indivSong) return <h1>loading...</h1>

    const {name, duration, genre } = indivSong

    return (
        <div>
            <h1>{name}</h1>
            <p>{duration}</p>
            <p>{genre}</p>
        </div>
    );
};

export default SongDetail;