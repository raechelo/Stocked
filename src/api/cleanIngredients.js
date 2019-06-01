export const cleanIngredients = ing => {
  return ing.meals.map(i => {
    const { strIngredient, idIngredient } = i
      return ({
        name: strIngredient,
        id: idIngredient
      })
  })
}