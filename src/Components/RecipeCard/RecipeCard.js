import React from 'react'
import youtube from '../../assets/youtube.svg';
import Instructions from '../Instructions/Instructions';

export default function RecipeCard(props) {
  const { name, category, image, link, tags, yt } = props
  return (
    <article className="Recipe-Card">
      <h5>{name}</h5>
      <section>
        <p><span>{props.measure1}</span>{props.ingredient1}</p>
        <p><span>{props.measure2}</span>{props.ingredient2}</p>
        <p><span>{props.measure3}</span>{props.ingredient3}</p>
        <p><span>{props.measure4}</span>{props.ingredient4}</p>
        <p><span>{props.measure5}</span>{props.ingredient5}</p>
        <p><span>{props.measure6}</span>{props.ingredient6}</p>
        <p><span>{props.measure7}</span>{props.ingredient7}</p>
        <p><span>{props.measure8}</span>{props.ingredient8}</p>
        <p><span>{props.measure9}</span>{props.ingredient9}</p>
        <p><span>{props.measure10}</span>{props.ingredient10}</p>
        <p><span>{props.measure11}</span>{props.ingredient11}</p>
        <p><span>{props.measure12}</span>{props.ingredient12}</p>
        <p><span>{props.measure13}</span>{props.ingredient13}</p>
        <p><span>{props.measure14}</span>{props.ingredient14}</p>
        <p><span>{props.measure15}</span>{props.ingredient15}</p>
        <p><span>{props.measure16}</span>{props.ingredient16}</p>
        <p><span>{props.measure17}</span>{props.ingredient17}</p>
        <p><span>{props.measure18}</span>{props.ingredient18}</p>
        <p><span>{props.measure19}</span>{props.ingredient19}</p>
        <p><span>{props.measure20}</span>{props.ingredient20}</p>
      </section>
      <p className="instr">{Instructions}</p>
      <a className="link" href={link}>{link}</a>
      <a className="yt-link" href={yt}><img src={youtube}/></a>
      {tags.split(',').join(' ').split(' ').map(i => (`#${i}`))}
      <h6>{category}</h6>
      <img src={image} alt={`${name} picture`} />
    </article>
  )
}
