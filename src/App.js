import "./App.css";
import Navbar from "./Components/Navbar/Navbar.js";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home/Home.js";
import Company from "./Components/Company/Company.js";
import Products from "./Components/Products/Products.js";
import RND from "./Components/R&D/R&D.js";
import Careers from "./Components/Careers/Careers.js";
import License from "./Components/License/License.js";
import Contact from "./Components/Contact/Contact.js";
import Footer from "./Components/Footer/Footer.js";

function App() {
  return (
    <Router>
      <div className="App ">
        <Navbar />

        <div>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>

            <Route path="/company" exact>
              <Company />
            </Route>

            <Route path="/products" exact>
              <Products />
            </Route>

            <Route path="/rd" exact>
              <RND />
            </Route>

            <Route path="/careers" exact>
              <Careers />
            </Route>

            <Route path="/license" exact>
              <License />
            </Route>

            <Route path="/contact" exact>
              <Contact />
            </Route>
          </Switch>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
