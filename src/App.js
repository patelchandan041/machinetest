import './App.css';
import Navbar from './Navbar'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  } from "react-router-dom";
  import Login from './component/Login'
import Home from './Home'
import Taskbar from './Taskbar';
import User from './component/User'

function App() {
  return (
    <div className="App">
          <Router>
       
        <Switch>
           
        <Route exact path="/">
           <Login />
          </Route>


        <Route exact path="/home">
        <Navbar />
           <Home />
          </Route>

          <Route exact path="/taskbar">
          <Navbar />
         <Taskbar />
          </Route>

          <Route exact path="/user">
          <Navbar />
         <User />
          </Route>
          
           </Switch>
     
    </Router>
     
    </div>
  );
}

export default App;
