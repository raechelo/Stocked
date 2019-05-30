export const cleanIngredients = ing => {
  return ing.meals.map(i => {
    const { strIngredient } = i
      return ({
        name: strIngredient
      })
  })
}