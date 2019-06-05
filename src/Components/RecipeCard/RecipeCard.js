import React from 'react'
import youtube from '../../assets/youtube.svg';
import heart from '../../assets/heart.svg';
import { addFavorite } from '../../actions';

const RecipeCard = (props) => {
  return (
    <article className="Recipe-Card">
      <h5>{props.strMeal}</h5>
      <section>
        <p><span>{props.strMeasure1}</span>{props.strIngredient1}</p>
        {props.strMeasure2 && 
          <p><span>{props.strMeasure2}</span>{props.strIngredient2}</p>
        }{ props.strMeasure3 &&
          <p><span>{props.strMeasure3}</span>{props.strIngredient3}</p>
        }{ props.strMeasure4 &&
          <p><span>{props.strMeasure4}</span>{props.strIngredient4}</p>
        }{ props.strMeasure5 &&
          <p><span>{props.strMeasure5}</span>{props.strIngredient5}</p>
        }{ props.strMeasure6 &&
          <p><span>{props.strMeasure6}</span>{props.strIngredient6}</p>
        }{ props.strMeasure7 &&
          <p><span>{props.strMeasure7}</span>{props.strIngredient7}</p>
        }{ props.strMeasure8 &&
          <p><span>{props.strMeasure8}</span>{props.strIngredient8}</p>
        }{ props.strMeasure9 &&
          <p><span>{props.strMeasure9}</span>{props.strIngredient9}</p>
        }{ props.strMeasure10 &&
          <p><span>{props.strMeasure10}</span>{props.strIngredient10}</p>
        }{ props.strMeasure11 &&
          <p><span>{props.strMeasure11}</span>{props.strIngredient11}</p>
        }{ props.strMeasure12 &&
          <p><span>{props.strMeasure12}</span>{props.strIngredient12}</p>
        }{ props.strMeasure13 &&
          <p><span>{props.strMeasure13}</span>{props.strIngredient13}</p>
        }{ props.strMeasure14 &&
          <p><span>{props.strMeasure14}</span>{props.strIngredient14}</p>
        }{ props.strMeasure15 &&
          <p><span>{props.strMeasure15}</span>{props.strIngredient15}</p>
        }{ props.strMeasure16 &&
          <p><span>{props.strMeasure16}</span>{props.strIngredient16}</p>
        }{ props.strMeasure17 &&
          <p><span>{props.strMeasure17}</span>{props.strIngredient17}</p>
        }{ props.strMeasure18 &&
          <p><span>{props.strMeasure18}</span>{props.strIngredient18}</p>
        }{ props.strMeasure19 &&
          <p><span>{props.strMeasure19}</span>{props.strIngredient19}</p>
        }{ props.strMeasure20 &&
        <p><span>{props.strMeasure20}</span>{props.strIngredient20}</p>
        }
      </section>
      <p className="instr">{props.strInstructions}</p>
      <a className="link" href={props.strSource} target="blank" >View Recipe</a>
      <a className="yt-link" href={props.strYoutube} target="blank" ><img src={youtube}/></a>
      <p className='tags'>{props.strTags && props.strTags.split(',').join(' ').split(' ').map(i => (`#${i}`))}</p>
      <img className="meal-pic" src={props.strMealThumb} alt={` picture`} />
      <img className="fave" src={heart} alt='fave-meal' onClick={() => addFavorite({...props})} />
    </article>
  )
}

export default RecipeCard;