import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://127.0.0.1:8000/api/v1', // API manzilingizni kiriting
});

export const fetchData = async (locale, endpoint) => {
  try {
    const response = await instance.get(endpoint, {
      headers: {
        'Accept-Language': locale, // Tilni APIga yuborish
      },
    });

    return response.data;
  } catch (error) {
    console.error('Xatolik:', error);
    throw error;
  }
};
export default instance