import React from "react";
import Header from "./Header"
import Home from "./Home";
import NavBar from "./NavBar";
import NewSong from "./NewSong";
import SongDetail from "./SongDetail";
import SongsList from "./SongsList";
import { Switch , Route } from "react-router-dom";

function App () {
  return (
    <div style={{backgroundColor: "lavenderblush"}}>
      <Header />
      <NavBar />
      <Switch>
        <Route path="/songslist/:id" component={SongDetail}/>
        <Route path="/songslist" component={SongsList}/>
        <Route path="/newsong" component={NewSong}/>
        <Route exact path="/" component={Home}/>
        <Route path="*"><h1>404 Page not found</h1></Route>
      </Switch>
    </div>
  );
};

export default App;
