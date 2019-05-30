import React from 'react'

export default function RecipeCard(props) {
  const { strMeal } = props
  return (
    <div>
      <h5>{strMeal}</h5>
    </div>
  )
}
