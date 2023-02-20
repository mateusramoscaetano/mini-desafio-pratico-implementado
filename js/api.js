const api = axios.create({
  baseURL: 'https://cubos-user-crud.herokuapp.com',
  timeout: 10000,
  headers: { 'Content-Type': 'Application/json' }
});



