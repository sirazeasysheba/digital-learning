import { Route, Switch } from "react-router";
import Contact from "./components/Contact/Contact";
import Departments from "./components/Departments/Departments";
import Home from "./components/Home/Home";
import ForgetPassword from "./components/Login/ForgetPassword";
import Login from "./components/Login/Login";
import Registration from "./components/Login/Registration";
import './styles/styles.scss';

function App() {
  return (
    <div className="App">
       <Switch>
       <Route exact path="/courses">
        <Departments/>
        </Route>
        <Route exact path="/contact">
        <Contact/>
        </Route>
        <Route exact path="/login">
        <Login/>
        </Route>
        <Route exact path="/registration">
        <Registration/>
        </Route>
        <Route exact path="/forget-password">
        <ForgetPassword/>
        </Route>
        <Route exact path="/">
        <Home/>
        </Route>
        
      </Switch>
    </div>
  );
}

export default App;
