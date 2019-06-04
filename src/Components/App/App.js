import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../../Components/Home/Home';
import RecipeCard from '../RecipeCard/RecipeCard';
import Header from '../../Components/Header/Header';
import Form from '../../Containers/Form/Form';
import Recipes from '../../Containers/Recipes/Recipes';

function App() {
  return (
    <div className="App">
      <Header />
      <Form />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/recipes' component={Recipes} />
        {/* <Route path='/recipes/:id' component={RecipeCard} /> */}
    {/* <Route exact path='/favorites' component={Favorites} /> */}
      </Switch>
    {/* <Route path='/results/:id' render={ ( { match } ) => {
          const { id } = match.params
          const recipe = this.props.recipes.find(r => parseIntr.name === id)
          console.log(recipe)
          if (recipe) {
            console.log(recipe)
            return <RecipeCard {...recipe}/>
          }
        }
      } /> */}
    </div>
  );
}

export default App;
