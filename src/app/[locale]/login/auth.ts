import axios from 'axios';

const API_URL = 'http://192.168.161.173:8000/api/v1/';

export async function fetchUser() {
  const token = localStorage.getItem('access'); // Tokenni olish

  if (!token) {
    throw new Error('Token topilmadi!');
  }

  try {
    const response = await axios.get(`${API_URL}/user/`, { // So‘rovni tekshirib ko‘ring
      headers: {
        Authorization: `Bearer ${token}`, // To‘g‘ri token yuborish
      },
    });
    console.log('Foydalanuvchi ma\'lumotlari:', response.data); // Foydalanuvchi ma'lumotlarini tekshirish
    return response.data; // Foydalanuvchi ma'lumotlarini qaytarish
  } catch (error) {
    console.error('Xatolik:', error); // Xatolikni konsolda chiqarish
    throw error;
  }
}
