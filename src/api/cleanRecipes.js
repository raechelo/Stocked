export const cleanRecipes = recipes => {
  return recipes.meals.map(m => {
    return ({
      name: m.strMeal,
      category: m.strCategory,
      area: m.strArea,
      image: m.strMealThumb,
      link: m.strSource,
      tags: m.strTags,
      yt: m.strYoutube,
      ingredient1: m.strIngredient1,
      ingredient2: m.strIngredient2,
      ingredient3: m.strIngredient3,
      ingredient4: m.strIngredient4,
      ingredient5: m.strIngredient5,
      ingredient6: m.strIngredient6,
      ingredient7: m.strIngredient7,
      ingredient8: m.strIngredient8,
      ingredient9: m.strIngredient9,
      ingredient10: m.strIngredient10,
      ingredient11: m.strIngredient11,
      ingredient12: m.strIngredient12,
      ingredient13: m.strIngredient13,
      ingredient14: m.strIngredient14,
      ingredient15: m.strIngredient15,
      ingredient16: m.strIngredient16,
      ingredient17: m.strIngredient17,
      ingredient18: m.strIngredient18,
      ingredient19: m.strIngredient19,
      ingredient20: m.strIngredient20,
      measure1: m.strMeasure1,
      measure2: m.strMeasure2,
      measure3: m.strMeasure3,
      measure4: m.strMeasure4,
      measure5: m.strMeasure5,
      measure6: m.strMeasure6,
      measure7: m.strMeasure7,
      measure8: m.strMeasure8,
      measure9: m.strMeasure9,
      measure10: m.strMeasure10,
      measure11: m.strMeasure11,
      measure12: m.strMeasure12,
      measure13: m.strMeasure13,
      measure14: m.strMeasure14,
      measure15: m.strMeasure15,
      measure16: m.strMeasure16,
      measure17: m.strMeasure17,
      measure18: m.strMeasure18,
      measure19: m.strMeasure19,
      measure20: m.strMeasure20
    })
  })
}