import React, { Component } from 'react';
import Footer from '../../Components/Footer/Footer';
import Instructions from '../../Components/Instructions/Instructions';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      isExpanded: false
    }
  }

  render() {
    return (
      <section>
          <Instructions />
          <Footer />
      </section>
    )
  }
}

export default Home;