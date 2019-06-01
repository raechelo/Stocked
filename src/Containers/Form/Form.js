import React, { Component } from 'react'
import { connect } from 'react-redux';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css'
import { fetchIngredients } from '../../thunks/fetchIngredients';
import { fetchResults } from '../../thunks/fetchResults';

export class Form extends Component {
  constructor() {
    super();
    this.state = {
      ingredientOne: '',
      ingredientTwo: '',
      ingredientThree: ''
    }
  }
  
  componentDidMount() {
    const url = 'https://www.themealdb.com/api/json/v1/1/list.php?i=list';
    this.props.fetchIngredients(url);
  }

  handleChange = (e) => {
    const { label, value } = e
    const i = value.props.value.split(' ').join('_')
    this.setState({ [label.props.name]: i })
  }

  handleClick = (e) => {
    e.preventDefault();
    const { ingredientOne, ingredientTwo, ingredientThree } = this.state;
    const url = `https://www.themealdb.com/api/json/v2/8673533/filter.php?i=${ingredientOne},${ingredientTwo},${ingredientThree}`
    this.props.fetchResults(url);
  }

  render() {
    const displayIngredients1 = this.props.ingredients.map(i => {
      return(<option key={i.id} name='ingredientOne' value={i.name}>{i.name}</option>)
    });
    const displayIngredients2 = this.props.ingredients.map(i => {
      return(<option key={`${i.id}a`} name='ingredientTwo' value={i.name}>{i.name}</option>)
    });
    const displayIngredients3 = this.props.ingredients.map(i => {
      return(<option key={`${i.id}b`} name='ingredientThree' value={i.name}>{i.name}</option>)
    });

      return (
        <form className="Form">
          <Dropdown 
          onChange={this.handleChange}
          options={displayIngredients1}
          value={this.state.ingredientOne}
          placeholder='Please choose an ingredient'
           />
          <Dropdown 
          onChange={this.handleChange}
          options={displayIngredients2} 
          value={this.state.ingredientTwo}
          placeholder='Please choose an ingredient'
          />
          <Dropdown 
          onChange={this.handleChange}
          options={displayIngredients3}  
          value={this.state.ingredientThree}
          placeholder='Please choose an ingredient'
          />
          <button onClick={this.handleClick}>Find Me Recipes!</button>
        </form>
      )
  }
}

export const mapStateToProps = state => ({
  ingredients: state.ingredients
})

export const mapDispatchToProps = dispatch => ({
  fetchIngredients: (url) => dispatch(fetchIngredients(url)),
  fetchResults: (url) => dispatch(fetchResults(url))
})

export default connect(mapStateToProps, mapDispatchToProps)(Form);