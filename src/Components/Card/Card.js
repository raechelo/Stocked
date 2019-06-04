import React from 'react'
import { Link } from 'react-router-dom';


export default function Card(props) {
  const { name, image, tags, id } = props
  return (
    <Link exact to={`/recipes/${id}`}>
      <article className="Card" >
        <h3>{name}</h3>
        <section>
          <p><span>{props.measure1}</span>{props.ingredient1}</p>
          <p><span>{props.measure2}</span>{props.ingredient2}</p>
          <p><span>{props.measure3}</span>{props.ingredient3}</p>
          <p><span>{props.measure4}</span>{props.ingredient4}</p>
        </section>
        <p className="tags">{tags && tags.split(',').join(' ').split(' ').map(i => (`#${i}`))}</p>
        <img className="meal-pic" src={image} alt={`${name} picture`} />
      </article>
    </Link>
  )
}
