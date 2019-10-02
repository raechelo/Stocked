import React, { Component } from 'react'
import RecipeCard from '../../Components/RecipeCard/RecipeCard';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { addFavorite, deleteFavorite } from '../../actions/index';
import Loading from '../../Components/Loading/Loading';

export class Recipes extends Component {

  favoriteRecipe = (fave) => {
    if (this.props.favorites.includes(fave)) {
      this.props.deleteFavorite(fave.idMeal)
    } else {
      this.props.addFavorite(fave)
    }
  }
  
  render () {
    let { recipes } = this.props
    let displayCards = recipes.map(r => (<RecipeCard {...r} key={r.idMeal} addFavorite={this.favoriteRecipe} />))
    return (
      <section className="Recipes">
        { this.props.isLoading ? <Loading /> : displayCards }
      </section>
    )
  }
}

Recipes.propTypes = {
  recipes: PropTypes.array,
  isLoading: PropTypes.bool
}

export const mapStateToProps = state => ({
    recipes: state.recipes,
    isLoading: state.isLoading,
    favorites: state.favorites
});

export const mapDispatchToProps = dispatch => ({
  addFavorite: favorite => dispatch(addFavorite(favorite)),
  deleteFavorite: id => dispatch(deleteFavorite(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Recipes);
  