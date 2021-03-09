import React, { Fragment } from 'react';

import Header from '../UI/Header/Header';
import Sections from '../sections/Sections';

const Layout = () => {
  return (
    <Fragment>
      <Header />
      <main>
        <Sections />
      </main>
    </Fragment>
  );
};

export default Layout;
