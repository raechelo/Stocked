import { cleanResults } from '../cleanResults';

describe('cleanResults', () => {

  let recipes = { meals: [{strMeal:'Mac&Cheese', idMeal: 1, strCategory: 'American'}] }

  it('should return a clean version of results with only the requested information', () => {
    const expected = [{name:'Mac&Cheese', id: 1}]

    const result = cleanResults(recipes);

    expect(result).toEqual(expected);
  });
});