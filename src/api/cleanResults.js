export const cleanResults = results => {
  return results.meals.map(m => {
    const { strMeal, idMeal } = m
    return ({
      name: strMeal,
      id: idMeal
    })
  })
}