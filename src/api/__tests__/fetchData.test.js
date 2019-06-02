import { fetchData } from '../fetchData';

describe('fetchData', () => {

  let mockUrl;
  let mockRecipe;

  beforeEach(() => {
    mockUrl = 'www.recipe.com'
    mockRecipe = { name: 'avocado toast', ingredient1: 'avocado', ingredient2: 'toast'};

    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockRecipe)
      });
    });
  });

  it('should call fetch with the correct params', () => {
    fetchData(mockUrl);

    expect(window.fetch).toHaveBeenCalledWith(mockUrl, undefined);
  });

  it('should return a parsed response if the status is okay', async () => {
    let result = await fetchData(mockUrl);

    expect(result).toEqual(mockRecipe);
  });

  it('should return an error if the response is not okay', async () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false
      });
    });
    await expect(fetchData()).rejects.toEqual(Error());
  });
});