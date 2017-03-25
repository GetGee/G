import React from 'react';
import Navigation from './components/navigation.jsx';

const Layout = ({content = () => null }) => (
  <div>
    <header>
    </header>

    <div>
    {content()}
    </div>

    <footer>
    <small>This is a footer.</small>
    </footer>
  </div>
);

export default Layout;
