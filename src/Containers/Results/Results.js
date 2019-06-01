import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { fetchRecipes } from '../../thunks/fetchRecipes';
import RecipeCard from '../../Components/RecipeCard/RecipeCard';
import Instructions from '../../Components/Instructions/Instructions';

export class Results extends Component {

  render() {
    const displayCards = this.props.recipes.map(r => (<RecipeCard {...r}  />))

    return (
      <section className="Results">
        {this.props.recipes.length ? displayCards : <Instructions />}
      </section>
    )
  }
}

Results.propTypes = {
  fetchRecipes: PropTypes.func
}

export const mapStateToProps = state => ({
  recipes: state.recipes
})

export default connect(mapStateToProps)(Results);