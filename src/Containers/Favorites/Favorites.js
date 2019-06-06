import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import RecipeCard from '../../Components/RecipeCard/RecipeCard';

export const Favorites = (props) => {
  let displayFaves = props.favorites.map(fave => (<RecipeCard {...fave} />))
  return (<div>
    {displayFaves}
  </div>
  )
}

Favorites.propTypes = {
  favorites: PropTypes.array
}

export const mapStateToProps = state => ({
  favorites: state.favorites
})

export default connect(mapStateToProps)(Favorites)