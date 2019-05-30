import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { fetchRecipes } from '../../thunks/fetchRecipes';

export class Results extends Component {
  componentDidMount() {
    const url = 'https://www.themealdb.com/api/json/v1/1/list.php?a=list';
    this.props.fetchRecipes(url)
  }
  render() {
    return (
      <div>
        <p>recipes</p>
      </div>
    )
  }
}

Results.propTypes = {
  fetchRecipes: PropTypes.func
}

export const mapDispatchToProps = dispatch => ({
  fetchRecipes: (url) => dispatch(fetchRecipes(url))
})

export default connect(null, mapDispatchToProps)(Results);