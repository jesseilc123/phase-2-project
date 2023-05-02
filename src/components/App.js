import Header from "./Header"
import React, {useEffect, useState} from "react";

function App() {
  const [songs, setSongs] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/songs")
      .then(response => response.json())
      .then((data) => setSongs(data))
  }, [])

  return (
    <div>
      <Header />
      <p>{songs.map((song)=> song.image)}</p>
    </div>
  );
}

export default App;
