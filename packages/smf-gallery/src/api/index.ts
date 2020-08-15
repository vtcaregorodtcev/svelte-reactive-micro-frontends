import MOCK from '../../MOCK_DATA.json';
import type { MOCK_Item } from 'smf-tools';

const groupped = MOCK.reduce((acc, item) => {
  if (acc[item.Rating]) acc[item.Rating].push(item);
  else acc[item.Rating] = [item]

  return acc;
}, {})

export const fetchRestaurants = async (searchTerm: string, ratingFilter: number, limit: number): Promise<MOCK_Item[]> => new Promise((resolve) => {
  let range = MOCK;
  let term = searchTerm.toLowerCase();

  if (ratingFilter > 0) range = groupped[ratingFilter]

  setTimeout(() => resolve(range.filter(x => x.Name.toLocaleLowerCase().includes(term)).slice(0, limit)), 2000)
})
