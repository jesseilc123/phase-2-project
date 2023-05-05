import React, { useEffect, useState } from "react";
import SongItem from "./SongItem"

function SongsList () {
    const [songs, setSongs] = useState([])

    useEffect(() => {
        fetch("http://localhost:3000/songs")
            .then(r => r.json())
            .then(data => setSongs(data))
    }, [])

    return (
        <div id="songList">
            <h1>Songs List</h1>
            <div>
                {songs.map((song) => (
                    <SongItem 
                        key={song.id}
                        id={song.id}
                        name={song.name}
                        duration={song.duration}
                        genre={song.genre}
                    />
                ))}
            </div>
        </div>
    );
}

export default SongsList;