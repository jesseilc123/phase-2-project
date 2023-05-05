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

    const { name, duration, genre, description } = indivSong

    return (
        <div className="home">
            <h1>{name}</h1>
            <div className="body">
                <p style={{fontWeight: "bold"}}>Duration: 
                    <span style={{fontWeight: "normal"}}> {duration}</span>
                </p>
                <p style={{fontWeight: "bold"}}>Genre:
                    <span style={{fontWeight: "normal"}}> {genre}</span>
                </p>
                <p style={{fontWeight: "bold"}}>Song Description</p>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default SongDetail;