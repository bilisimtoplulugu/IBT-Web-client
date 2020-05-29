import axios from 'axios';
import {API_URL} from '../../config';

export default (eventURL) =>
  new Promise(async (resolve, reject) => {
    try {
      const {
        data: {event, participants},
      } = await axios.get(`${API_URL}/event/${eventURL}`);
      resolve({event, participants});
    } catch (error) {
      reject(error);
    }
  });
