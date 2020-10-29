import { AuthRequest } from '@/models/auth.model';
import axios from 'axios';

const API_URL = 'http://localhost:8080/api/auth/';

class AuthService {
  login(user: AuthRequest) {
    return axios
      .post(API_URL + 'signin', {
        username: user.username,
        password: user.hash
      })
      .then(response => {
        if (response.data.accessToken) {
          localStorage.setItem('user', JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem('user');
  }

  register(user: AuthRequest) {
    return axios.post(API_URL + 'signup', {
      username: user.username,
      email: user.email,
      password: user.hash
    });
  }
}
export default new AuthService();
