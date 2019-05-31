import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { fetchRecipes } from '../../thunks/fetchRecipes';
import RecipeCard from '../../Components/RecipeCard/RecipeCard';

export class Results extends Component {
  componentDidMount() {
    const url = 'https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata';
    this.props.fetchRecipes(url)
  }
  render() {
    const displayCards = this.props.recipes.map(r => (<RecipeCard {...r} key={r.idMeal}  />))

    return (
      <div>
        {displayCards}
      </div>
    )
  }
}

Results.propTypes = {
  fetchRecipes: PropTypes.func
}

export const mapStateToProps = state => ({
  recipes: state.recipes
})

export const mapDispatchToProps = dispatch => ({
  fetchRecipes: (url) => dispatch(fetchRecipes(url))
})

export default connect(mapStateToProps, mapDispatchToProps)(Results);