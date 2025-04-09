import axios from 'axios';
import { BASE_URL } from '../constants/utility';

export const getBoard = async () => {
  try {
    const response = await axios(`${BASE_URL}/getBoard/`);
    return response.data;
  } catch (error) {
    console.error('Error fetching board:', error);
    throw error;
  }
};