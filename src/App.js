import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.css';
import Portfolio from './Pages/Portfolio';
import Home from './Pages/Home';
import Navbar from './Components/Navbar/Navbar';
import Footer from "./Components/Footer/Footer";
import background from "./Assets/memphis-colorful.png"


function App() {
  return (
    <div className="App" style={{ backgroundImage: `url(${background})` }}>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <Home />
          </Route>
          <Route exact path="/portfolio">
            <Portfolio/>
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
