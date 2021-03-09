import React, { Fragment } from 'react';

import Home from './Home/Home';
import About from './About/About';
import Testimonials from './Testimonials/Testimonials';
import Gallery from './Gallery/Gallery';
import Contact from './Contact/Contact';

const sections = () => {
  return (
    <Fragment>
      <Home />
      <About />
      <Testimonials/>
      <Gallery/>
      <Contact />
    </Fragment>
  );
};

export default sections;
