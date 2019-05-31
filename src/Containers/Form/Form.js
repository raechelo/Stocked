import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchIngredients } from '../../thunks/fetchIngredients';

export class Form extends Component {
  
  componentDidMount() {
    const url = 'https://www.themealdb.com/api/json/v1/1/list.php?i=list';
    this.props.fetchIngredients(url);
  }
  render() {
    const displayIngredients =  this.props.ingredients.map(i => {
      return(<option value={i.name}>{i.name}</option>)
    })
      return (
        <form className="Form">
          <select className="dropdown">
            {displayIngredients}
          </select>
          <select className="dropdown">
            {displayIngredients}
          </select>
          <select className="dropdown">
            {displayIngredients}
          </select>
        </form>
      )
  }
}

export const mapStateToProps = state => ({
  ingredients: state.ingredients
})

export const mapDispatchToProps = dispatch => ({
  fetchIngredients: (url) => dispatch(fetchIngredients(url))
})

export default connect(mapStateToProps, mapDispatchToProps)(Form);