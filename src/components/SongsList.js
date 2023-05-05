import React, { useEffect, useState } from "react";

function SongsList() {
    const [songs, setSongs] = useState([])

    useEffect(() => {
        fetch("http://localhost:3000/songs")
            .then(r => r.json())
            .then(data => setSongs(data))
    }, [])

    console.log(songs)
    return (
        <div>
            <h1>SongsList</h1>
        </div>
    );
}

export default SongsList;