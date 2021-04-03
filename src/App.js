import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.css';
import Portfolio from './Pages/Portfolio';
import Home from './Pages/Home';
import Navbar from './Components/Navbar/Navbar'
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={Home} />
          <Route exact path="/portfolio" component={Portfolio} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
