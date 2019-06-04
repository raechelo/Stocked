import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../Header/Header';
import Home from '../../Components/Home/Home';
import Form from '../../Containers/Form/Form';
import Footer from '../Footer/Footer';
import RecipeCard from '../RecipeCard/RecipeCard';
import Recipes from '../../Containers/Recipes/Recipes';
import Instructions from '../Instructions/Instructions';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/recipes' component={Recipes} />
        <Route path='/recipes/:id' component={RecipeCard} />
      </Switch>
    {/* <Route exact path='/favorites' component={Favorites} /> */}
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
