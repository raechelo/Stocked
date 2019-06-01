import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { fetchRecipes } from '../../thunks/fetchRecipes';
import RecipeCard from '../../Components/RecipeCard/RecipeCard';
import Instructions from '../../Components/Instructions/Instructions';

export class Results extends Component {
  componentDidMount() {
    const url = 'https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata';
    // this.props.fetchRecipes(url)
  }
  render() {
    const displayCards = this.props.results.map(r => (<RecipeCard {...r} key={r.idMeal}  />))

    return (
      <div>
        {this.props.results.length ? displayCards : <Instructions />}
      </div>
    )
  }
}

Results.propTypes = {
  fetchRecipes: PropTypes.func
}

export const mapStateToProps = state => ({
  results: state.results
})

export const mapDispatchToProps = dispatch => ({
  fetchRecipes: (url) => dispatch(fetchRecipes(url))
})

export default connect(mapStateToProps, mapDispatchToProps)(Results);