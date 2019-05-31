import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchIngredients } from '../../thunks/fetchIngredients';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css'

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
          <Dropdown 
          options={displayIngredients} 
          placeholder='Please choose an ingredient' />
          <Dropdown 
          options={displayIngredients} 
          placeholder='Please choose an ingredient'  />
          <Dropdown 
          options={displayIngredients}  
          placeholder='Please choose an ingredient' />
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