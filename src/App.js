import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./header";
import Home from "./components/home";
import About from "./components/about";
import Contact from "./components/contact";
import Resume from "./components/resume";
import Portfolio from "./components/portfolio";

import Footer from "./footer";

function App() {
  return (
    <Router>
      <Header />
      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/resume" component={Resume} />
      <Route path="/portfolio" component={Portfolio} />
      <Footer />
    </Router>
  );
}

export default App;
