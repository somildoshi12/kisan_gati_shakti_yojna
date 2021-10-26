import './App.css';
import Form from './Components/Form';
import Homepage from './Components/Homepage';
import Intro from './Components/Intro';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      {/* <Intro/>
      <Homepage/> */}
      <Form/>
    </div>
  );
}

export default App;
