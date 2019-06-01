import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { fetchRecipes } from '../../thunks/fetchRecipes';
import RecipeCard from '../../Components/RecipeCard/RecipeCard';
import Instructions from '../../Components/Instructions/Instructions';

export class Results extends Component {

  componentDidMount() {
    // this.props.fetchRecipes(url)
  }
  render() {
    const displayCards = this.props.results.map(r => (<RecipeCard {...r}  />))

    return (
      <section className="Results">
        {this.props.results.length ? displayCards : <Instructions />}
      </section>
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
  fetchResults: (url) => dispatch(fetchRecipes(url))
})

export default connect(mapStateToProps, mapDispatchToProps)(Results);