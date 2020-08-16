import MOCK from '../../MOCK_DATA_restaurants.json';
import type { MOCK_Item_Restaurant } from 'smf-tools';

export const fetchRestaurant = async (_id: number, limit: number): Promise<MOCK_Item_Restaurant[]> => new Promise((resolve) => {
  setTimeout(() => resolve(MOCK.slice(_id, limit)), 2000)
})
