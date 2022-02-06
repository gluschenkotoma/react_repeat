import axios from 'axios';

axios.defaults.baseURL = 'https://61eaaca3c9d96b0017700ca6.mockapi.io';
// запрос на все публикации
export const getPublications = async () => {
  const response = await axios.get('/publications');
  return response.data;
};
// запрос на 1 елемент, возврат одного публикейшена
export const getPublicationById = async id => {
  const response = await axios.get(`/publications/${id}`);
  return response.data;
};

export const addPublication = async data => {
  const response = await axios.post('/publications', data);
  return response.data;
};

export const deletePublication = async id => {
  const response = await axios.delete(`/publications/${id}`);
  return response.data;
};
