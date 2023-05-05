import React from "react";
import Header from "./Header"
import NavBar from "./NavBar";
import Home from "./Home";
import SongsList from "./SongsList";
import SongDetail from "./SongDetail";
import NewSong from "./NewSong";
import { Switch , Route } from "react-router-dom";

function App () {
  return (
    <div style={{backgroundColor: "lavenderblush"}}>
      <Header />
      <NavBar />
      <Switch>
        <Route exact path="/songslist">
            <SongsList />
        </Route>
        <Route exact path="/songslist/:id">
            <SongDetail />
        </Route>
        <Route exact path="/newsong">
            <NewSong />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="*">
          <h1>404 Page not found</h1>
        </Route>
      </Switch>
    </div>
  );
};

export default App;
