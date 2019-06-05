import React, { Component } from 'react'
import { connect } from 'react-redux';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css'
import { fetchIngredients } from '../../thunks/fetchIngredients';
import { Link } from 'react-router-dom';
import { fetchResults } from '../../thunks/fetchResults';
import { PropTypes } from 'prop-types'

export class Form extends Component {
  constructor() {
    super();
    this.state = {
      ingredientOne: '',
      ingredientTwo: ''
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

  handleClick = () => {
    const { ingredientOne, ingredientTwo } = this.state;
    let url;
    this.state.ingredientTwo ? url = `https://www.themealdb.com/api/json/v2/8673533/filter.php?i=${ingredientOne},${ingredientTwo}` : 
    url = `https://www.themealdb.com/api/json/v2/8673533/filter.php?i=${ingredientOne}`
    this.props.fetchResults(url);
  }

  render() {
    const displayIngredients1 = this.props.ingredients.map(i => {
      return(<option key={i.id} name='ingredientOne' value={i.name}>{i.name}</option>)
    });
    const displayIngredients2 = this.props.ingredients.map(i => {
      return(<option key={`${i.id}a`} name='ingredientTwo' value={i.name}>{i.name}</option>)
    });

      return (
        <section className="Form">
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
          <Link to='/recipes'><button onClick={this.handleClick}>Find Me Recipes!</button></Link>
        </section>
      )
  }
}

Form.propTypes = {
  ingredients: PropTypes.array,
  fetchIngredients: PropTypes.func,
  fetchResults: PropTypes.func
}

export const mapStateToProps = state => ({
  ingredients: state.ingredients
})

export const mapDispatchToProps = dispatch => ({
  fetchIngredients: (url) => dispatch(fetchIngredients(url)),
  fetchResults: (url) => dispatch(fetchResults(url))
})

export default connect(mapStateToProps, mapDispatchToProps)(Form);