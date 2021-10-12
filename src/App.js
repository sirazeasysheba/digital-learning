import { Route, Switch } from "react-router";
import Contact from "./components/Contact/Contact";
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
import NavigationBar from "./components/Navbar/NavigationBar";
import Footer from "./components/Footer/Footer";
import Workshops from "./pages/Workshops";
import Web from "./components/Services/Web";
import DM from "./components/Services/DM";
import Design from "./components/Services/Design";

function App() {
  return (
    <div className="App">
      <NavigationBar />
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
        <Route exact path="/workshops">
          <Workshops />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/services/web-development">
          <Web />
        </Route>
        <Route exact path="/services/digital-marketing">
          <DM />
        </Route>
        <Route exact path="/services/design">
          <Design />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
