import axios from 'axios';
import authHeader from './auth-header';


//TEST

const API_URL = 'https://cappy-2023.herokuapp.com/api/test/';


class UserService {
  getPublicContent() {
    return axios.get(API_URL + 'all');
  }

  getUserBoard() {
    return axios.get(API_URL + 'user', { headers: authHeader() });
  }

  getAdminBoard() {
    return axios.get(API_URL + 'mod', { headers: authHeader() });
  }

  getRootBoard() {
    return axios.get(API_URL + 'root', { headers: authHeader() });
  }
}

export default new UserService();
