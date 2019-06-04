import React, { Component } from 'react';
import Form from '../../Containers/Form/Form';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
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
          <Header />
          <Form />
          <Instructions />
          <Footer />
      </section>
    )
  }
}

export default Home;