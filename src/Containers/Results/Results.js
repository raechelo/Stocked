import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import RecipeCard from '../../Components/RecipeCard/RecipeCard';
import Card from '../../Components/Card/Card';
import Instructions from '../../Components/Instructions/Instructions';

export class Results extends Component {
  constructor() {
    super();
    this.state = {
      isExpanded: false,
      exId: 0
    }
  }

  handleClick = (e) => {
    const { id } = e.target
    this.setState({isExpanded: !this.state.isExpanded, exId: id})
  }

  render() {
    const displayCards = this.props.recipes.map(r => (<Card {...r} key={r.id} onClick={() => this.handleClick} />))

    const displayRecipe = this.props.recipes.find(r => r.id === this.state.exId)

    return (
      <section className="Results">
        {this.props.recipes.length ? displayCards : <Instructions />}
        {this.state.isExpanded && <RecipeCard {...displayRecipe} />}
      </section>
    )
  }
}

Results.propTypes = {
  recipes: PropTypes.array
}

export const mapStateToProps = state => ({
  recipes: state.recipes
})

export default connect(mapStateToProps)(Results);