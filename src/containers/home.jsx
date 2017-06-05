import React from 'react';

import Header from '../components/header/header.jsx';
import Navigation from '../components/navigation/navigation.jsx';

class Home extends React.Component {
  render() {
    return (
      <section>
        <Header />
        <Navigation />
      </section>
    );
  }
}

export default Home;
