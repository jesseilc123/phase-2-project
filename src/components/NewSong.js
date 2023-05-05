// Will add new song to website, controlled form
import React, { useState } from "react";

function NewSong () {
    const [name, setName] = useState("")
    const [duration, setDuration] = useState("")
    const [genre, setGenre] = useState("")
    const [description, setDescription] = useState("")

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
            .then(data => console.log(data))
    }

    return (
        <section id="form">
            <h3>Add New Song</h3>
            <form onSubmit={handleFormSubmit}>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" value={name} onChange={e => setName(e.target.value)} />

                <label>Duration:</label>
                <input type="text" id="duration" value={duration} onChange={e => setDuration(e.target.value)} />

                <label>Genre:</label>
                <input type="text" id="genre" value={genre} onChange={e => setGenre(e.target.value)} />

                <label>Description:</label>
                <input type="text" id="description" value={description} onChange={e => setDescription(e.target.value)} />

                <button type="submit">Submit</button>
            </form>
        </section>
    );
};

export default NewSong;