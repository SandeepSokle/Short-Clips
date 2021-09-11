import { createContext, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Message from "./Message";
import Navbar from "./Navbar";
import Profile from "./Profile";
import Search from "./Search";
import Upload from "./Upload";
import "./CSS/App.css"
import Posts from "./Posts";
import About from "./About";
let userContext = createContext();

function App() {
  let [user, setUser] = useState(null);
  let [videoCardStatus, setVideoCardStatus] = useState("all");

  return (
    <div className="App">
      <userContext.Provider value={user}>
        <Router>
          <div className="navbar">
            <Navbar />
          </div>
          <div className="grid">
            <Switch>
              <Route path="/login">
                <Login setUser={setUser} />
              </Route>
              <Route path="/profile/:id">
                <Profile />
              </Route>
              <Route path="/search">
                <Search />
              </Route>
              <Route path="/about">
                <About/>
              </Route>
              <Route path="/upload">
                <Upload />
              </Route>
              <Route path="/messanger">
                <Message />
              </Route>
              <Route path="/posts/:id">
                <Posts />
              </Route>
              <Route exact path="/">
                <Home />
              </Route>
            </Switch>
          </div>
        </Router>
      </userContext.Provider>
    </div>
  );
}

export { userContext };
export default App;
