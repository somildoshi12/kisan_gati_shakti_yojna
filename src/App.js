import './App.css';
import Form from './Components/Form';
import Homepage from './Components/Homepage';
import Intro from './Components/Intro';
import Navbar from './Components/Navbar';
import Temp from './Components/Temp';
import Harvesting from './Components/Harvesting';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Navbar />
          {/* <Form/> */}
          {/* <p>Outside value {a}</p> */}

          <Switch>
            <Route exact path="/">
              {/* <Harvesting /> */}
              {/* <Intro /> */}
              {/* <Homepage /> */}
              <Form />
            </Route>

            <Route exact path="/home">
              <Homepage />
            </Route>
            <div>
              <p>hello</p>
            </div>
            <Route exact path="/form">
              <Form />
            </Route>

            <Route exact path="/harvesting">
              <Harvesting />
            </Route>

          </Switch>

        </div>
      </Router>
    </div>
  );
}

export default App;
