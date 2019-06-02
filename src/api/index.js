import axios from 'axios';
import authHeader from '../helpers/authHeader';

const API_BASE_URL = 'https://politico.herokuapp.com/api/v1';


export const client = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
     Authorization: authHeader()
  },
});
export const signup = user => client.post('/auth/signup', user);


export const uploadProfileImage = (file) => {
  const url = 'https://api.cloudinary.com/v1_1/dcfc113t5/image/upload';
  const formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', 'ivyteam');
  return axios.post(url, formData, { headers: { 'X-Requested-With': 'XMLHttpRequest' } });
};
