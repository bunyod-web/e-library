import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://127.0.0.1:8000/api/v1/', // API manzilingizni kiriting
});


instance.interceptors.request.use(
  (config) => {
      const token = localStorage.getItem('access_token'); // Tokenni olish
      if (token) {
          config.headers.Authorization = `Bearer ${token}`; // Tokenni qo'shish
      }
      return config;
  },
  (error) => {
      return Promise.reject(error);
  }
);

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