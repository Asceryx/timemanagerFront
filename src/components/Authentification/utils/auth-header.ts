import { AuthResponse } from '@/models/auth.model';

function authHeader() {
    let user: AuthResponse = JSON.parse(localStorage.getItem('user') || '{}');
  
    if (user && user.accessToken) {
      return { Authorization: 'Bearer ' + user.accessToken };
      // for Node.js Express back-end
      //return { 'x-access-token': user.accessToken };
    } else {
      return {};
    }
}
export default authHeader
  
  