import React from 'react'
import Card from '../../Components/Card/Card';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types'

export const Recipes = () => {
  const displayCards = this.state.recipes.map(r => (<Card {...r} key={r.id} />))
  return (
    <section>
      {displayCards}
    </section>
  )
}

Recipes.propTypes = {
  recipes: PropTypes.array
}

export const mapStateToProps = state => ({
  recipes: state.recipes
})

export default connect(mapStateToProps)(Recipes)