import { AuthRequest, AuthResponse } from '@/models/auth.model';
import axios from 'axios';

const API_URL = 'http://localhost:8080/api/auth/';

class AuthService {
  public login(user: AuthRequest): Promise<AuthResponse> {
    return axios
      .post(API_URL + 'signin', {
        username: user.username,
        password: user.hash
      })
      .then(response => {
        if (response.data.accessToken) {
          localStorage.setItem('user', JSON.stringify(response.data));
          return response.data;
        }
      });
  }

  public logout() {
    localStorage.removeItem('user');
  }

  public register(user: AuthRequest) {
    return axios.post(API_URL + 'signup', {
      username: user.username,
      email: user.email,
      password: user.hash
    });
  }
}
export default new AuthService();
