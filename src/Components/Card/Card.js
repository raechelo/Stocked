import React from 'react'
import youtube from '../../assets/youtube.svg';


export default function Card(props) {
  const { name, category, image, link, tags, yt } = props
  return (
    <article className="Card">
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
  )
}
