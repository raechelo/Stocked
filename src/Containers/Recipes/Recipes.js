import React, { Component } from 'react'
import RecipeCard from '../../Components/RecipeCard/RecipeCard';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';


export class Recipes extends Component {
  render () {
    let { recipes } = this.props
    let displayCards = recipes.map(r => (<RecipeCard {...r} key={r.idMeal} />))
    return (
      <section>
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
})

export default connect(mapStateToProps)(Recipes);
  