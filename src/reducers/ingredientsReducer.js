export const ingredients = (state = [], action) => {
  switch(action.type) {
    case 'SET_INGREDIENTS':
      return action.ing
    default:
      return state
  }
}



