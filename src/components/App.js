import Header from "./Header"
import NavBar from "./NavBar";
import Home from "./Home";
import Songs from "./Songs";
import { Switch , Route } from "react-router-dom";

function App() {

  return (
    <div>
      <Header />
      <NavBar />
      <Switch>
      <Route exact path="/songs">
          <Songs />
      </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
