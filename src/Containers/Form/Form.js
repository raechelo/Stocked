import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchIngredients } from '../../thunks/fetchIngredients';

export class Form extends Component {
  
  componentDidMount() {
    const url = 'https://www.themealdb.com/api/json/v1/1/list.php?i=list';
    this.props.fetchIngredients(url);
  }
  render() {
      return (
        <section>
          <select>
            {
            // this.state.ingredients.map(i => {
              // return(<option value={i}>{i}</option>)
            })
            }
          </select>
        </section>
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