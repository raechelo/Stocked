import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../../Components/Home/Home';
import Header from '../../Components/Header/Header';
import Form from '../../Containers/Form/Form';
import Recipes from '../../Containers/Recipes/Recipes';
import NoMatch from '../NoMatch/NoMatch';

function App() {
  return (
    <div className="App">
      <Header />
      <Form />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/recipes' component={Recipes} />
        {/* <Route exact path='/favorites' component={Favorites} /> */}
        <Route component={NoMatch} />
      </Switch>
    </div>
  );
}

export default App;

