// Will add new song to website, controlled form
import React, { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function NewSong () {
    const [name, setName] = useState("");
    const [duration, setDuration] = useState("");
    const [genre, setGenre] = useState("");
    const [description, setDescription] = useState("");

    const history = useHistory();

    function handleFormSubmit(e){
        e.preventDefault()
        const formData = { name, duration, genre, description }
        fetch("http://localhost:3000/songs", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
            .then(r => r.json())
            .then(data => {
                history.push(`/songslist/${data.id}`)
                console.log(data)
            })
    }

    return (
        <section id="form">
            <form onSubmit={handleFormSubmit}>
                <h3>Add New Song</h3>
    
                <label>Name:</label>
                <input type="text" id="name" value={name} placeholder="Enter song name..." onChange={e => setName(e.target.value)} />

                <label>Duration:</label>
                <input type="text" id="duration" value={duration} placeholder="Enter song duration..." onChange={e => setDuration(e.target.value)} />

                <label>Genre:</label>
                <input type="text" id="genre" value={genre} placeholder="Enter song genre..." onChange={e => setGenre(e.target.value)} />

                <label>Description:</label>
                <textarea type="text" id="description" value={description} placeholder="Enter song description..." onChange={e => setDescription(e.target.value)} />

                <button type="submit">Submit</button>
            </form>
        </section>
    );
};

export default NewSong;