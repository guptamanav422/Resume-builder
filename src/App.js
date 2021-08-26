import Login from "./components/login";
import Navbar from "./components/navbar";
import Signup from "./components/signup";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom"
import Home from "./components/home";
function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route path="/login"> <Login /></Route>
        <Route path="/signup"> <Signup /></Route>
        <Route path="/"> <Home /></Route>
      </Switch>
    </Router>
    </>
  );
}

export default App;
