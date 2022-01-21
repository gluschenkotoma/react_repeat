import axios from 'axios';
axios.defaults.baseURL = 'https://61eaaca3c9d96b0017700ca6.mockapi.io'; //с mockApi

// получить все публикации
export const getPublication = async () => {
  const response = await axios.get('/publications');
  console.log(response); //{data: Array(12), status: 200, statusText: 'OK', headers: {…}, config: {…}, …}
  return response.data;
};

//
export const addPublication = async data => {
  const response = await axios.post('/publications', data);
  return response.data;
};
