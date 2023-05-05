import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function SongDetail () {
    const [indivSong, setIndivSong] = useState(null);
    const params = useParams()

    useEffect(() => {
        fetch(`http://localhost:3000/songs/1`)
            .then(r => r.json())
            .then(data => setIndivSong(data))
    }, [])

    const {name, duration, genre } = indivSong

    return (
        <div>{name}</div>
    );
};

export default SongDetail;