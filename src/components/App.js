import Header from "./Header"
import NavBar from "./NavBar";
import Home from "./Home";
import SongsList from "./SongsList";
import { Switch , Route } from "react-router-dom";

function App() {

  return (
    <div>
      <Header />
      <NavBar />
      <Switch>
      <Route exact path="/songslist">
          <SongsList />
      </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
