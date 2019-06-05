import React, { Component } from 'react'
import RecipeCard from '../../Components/RecipeCard/RecipeCard';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { addFavorite } from '../../actions/index'


export class Recipes extends Component {

  favoriteRecipe = () => {

  }
  
  render () {
    let { recipes, addFavorite } = this.props
    let displayCards = recipes.map(r => (<RecipeCard {...r} key={r.idMeal} />))
    return (
      <section className="Recipes">
        { displayCards }
      </section>
    )
  }
}


Recipes.propTypes = {
  recipes: PropTypes.array
}

export const mapStateToProps = state => ({
    recipes: state.recipes
});

export const mapDispatchToProps = dispatch => ({
  addFavorite: fave => dispatch(addFavorite(fave))
});

export default connect(mapStateToProps, mapDispatchToProps)(Recipes);
  