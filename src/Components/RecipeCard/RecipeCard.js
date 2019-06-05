import React from 'react'
import youtube from '../../assets/youtube.svg';
import ReactDelayRender from 'react-delay-render';

const RecipeCard = (props) => {
  return (
    <article className="Recipe-Card">
      <h5>{props.strMeal}</h5>
      <section>
        <p><span>{props.strMeasure1}</span>{props.strIngredient1}</p>
        <p><span>{props.strMeasure2}</span>{props.strIngredient2}</p>
        <p><span>{props.strMeasure3}</span>{props.strIngredient3}</p>
        <p><span>{props.strMeasure4}</span>{props.strIngredient4}</p>
        <p><span>{props.strMeasure5}</span>{props.strIngredient5}</p>
        <p><span>{props.strMeasure6}</span>{props.strIngredient6}</p>
        <p><span>{props.strMeasure7}</span>{props.strIngredient7}</p>
        <p><span>{props.strMeasure8}</span>{props.strIngredient8}</p>
        <p><span>{props.strMeasure9}</span>{props.strIngredient9}</p>
        <p><span>{props.strMeasure10}</span>{props.strIngredient10}</p>
        <p><span>{props.strMeasure11}</span>{props.strIngredient11}</p>
        <p><span>{props.strMeasure12}</span>{props.strIngredient12}</p>
        <p><span>{props.strMeasure13}</span>{props.strIngredient13}</p>
        <p><span>{props.strMeasure14}</span>{props.strIngredient14}</p>
        <p><span>{props.strMeasure15}</span>{props.strIngredient15}</p>
        <p><span>{props.strMeasure16}</span>{props.strIngredient16}</p>
        <p><span>{props.strMeasure17}</span>{props.strIngredient17}</p>
        <p><span>{props.strMeasure18}</span>{props.strIngredient18}</p>
        <p><span>{props.strMeasure19}</span>{props.strIngredient19}</p>
        <p><span>{props.strMeasure20}</span>{props.strIngredient20}</p>
      </section>
      <p className="instr">{props.strInstructions}</p>
      <a className="link" href={props.strSourceLink} target="blank" >View Recipe</a>
      <a className="yt-link" href={props.strYoutube} target="blank" ><img src={youtube}/></a>
      {props.strTags && props.strTags.split(',').join(' ').split(' ').map(i => (`#${i}`))}
      <h6>{props.strCategory}</h6>
      <img className="meal-pic" src={props.strMealThumb} alt={` picture`} />
    </article>
  )
}

export default ReactDelayRender({delay: 1200})(RecipeCard);

