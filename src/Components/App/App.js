import React from 'react';
import Header from '../Header/Header';
import Results from '../../Containers/Results/Results';
import Form from '../../Containers/Form/Form';
import Footer from '../Footer/Footer';

function App() {
  return (
    <div className="App">
    <Header />
    <Form />
    <Results />
    <Footer />
    </div>
  );
}

export default App;
