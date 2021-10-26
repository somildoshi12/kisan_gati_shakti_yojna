import './App.css';
import Form from './Components/Form';
import Homepage from './Components/Homepage';
import Intro from './Components/Intro';
import Navbar from './Components/Navbar';
// import temp from './Components/temp';

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

          <Switch>
            <Route exact path="/">
              <Intro />
              <Homepage />
              <Form />
            </Route>

            <Route exact path="/home">
              <Homepage />
            </Route>

            <Route exact path="/form">
              <Form />
            </Route>

          </Switch>

        </div>
      </Router>
    </div>
  );
}

export default App;
