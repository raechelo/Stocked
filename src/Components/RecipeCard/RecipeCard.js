import React from 'react'

export default function RecipeCard(props) {
  const { name, image, link, tags, yt } = props
  return (
    <article>
      <h5>{name}</h5>
      <img src={image} alt={`${name} picture`} />
    </article>
  )
}
