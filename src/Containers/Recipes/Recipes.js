import React, { Component } from 'react'
import RecipeCard from '../../Components/RecipeCard/RecipeCard';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { addFavorite } from '../../actions/index'


export class Recipes extends Component {

  favoriteRecipe = (fave) => {
    this.props.addFavorite(fave)
  }
  
  render () {
    let { recipes } = this.props
    let displayCards = recipes.map(r => (<RecipeCard {...r} key={r.idMeal} addFavorite={this.favoriteRecipe} />))
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
  addFavorite: favorite => dispatch(addFavorite(favorite))
});

export default connect(mapStateToProps, mapDispatchToProps)(Recipes);
  