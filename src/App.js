import { Route, Switch } from "react-router";
import Contact from "./components/Contact/Contact";
import DashBoard from "./components/DashBoard/DashBoard";
import Departments from "./components/Departments/Departments";
import Home from "./components/Home/Home";
import ForgetPassword from "./components/Login/ForgetPassword";
import Login from "./components/Login/Login";
import Registration from "./components/Login/Registration";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Order from "./pages/Order";
import Mentors from "./pages/Mentors";
import "./styles/styles.scss";
import Advisors from "./pages/Advisors";
import Gallery from "./pages/Gallery";
import News from "./pages/News";
import Stories from "./pages/Stories";
import Courses from "./components/DashBoard/Courses";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/courses/:name">
          <Departments />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/registration">
          <Registration />
        </Route>
        <Route exact path="/forget-password">
          <ForgetPassword />
        </Route>
        <Route exact path="/cart">
          <Cart />
        </Route>
        <Route exact path="/order">
          <Order />
        </Route>
        <Route exact path="/dashboard">
          <DashBoard />
        </Route>
        <Route exact path="/all-courses">
          <Courses />
        </Route>
        <Route exact path="/about-digital-learning">
          <About />
        </Route>
        <Route exact path="/mentors">
          <Mentors />
        </Route>
        <Route exact path="/advisors-and-management">
          <Advisors />
        </Route>
        <Route exact path="/gallery">
          <Gallery />
        </Route>
        <Route exact path="/news-and-events">
          <News />
        </Route>
        <Route exact path="/success-stories">
          <Stories />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
