import React, { Fragment } from 'react';
import { BrowserRouter as Router,NavLink, Switch, Route } from "react-router-dom";
import Home from './Home/Home';
import About from './About/About';
import Review from './Testimonials/Review';
import Gallery from './Gallery/Gallery';
import Contact from './Contact/Contact';

const sections = () => {
  return (
    
      <div >
        <Home />

        <Router>
            <Switch>
              <Route path="/home" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/review" component={Review} />
              <Route path="/gallery" component={Gallery} />
              <Route path="/contact" component={Contact} />
            </Switch>
        </Router>

        
      </div>
  );
};

export default sections;
