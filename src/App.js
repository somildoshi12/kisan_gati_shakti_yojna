import './App.css';
import Form from './Components/Form';
import Homepage from './Components/Homepage';
import Intro from './Components/Intro';
import Navbar from './Components/Navbar';
import Temp from './Components/Temp';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Harvesting from './Components/Harvesting';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Navbar />

          <Switch>
            <Route exact path="/">
              <Harvesting />
              {/* <Intro />
              <Homepage /> */}
            </Route>

            <Route exact path="/home">
              <Homepage />
            </Route>

            <Route exact path="/form">
              <Form />
            </Route>

            <Route exact path="/temp">
              <Temp />
            </Route>

          </Switch>

        </div>
      </Router>
    </div>
  );
}

export default App;
