import { VuexModule, Module, Mutation, Action } from 'vuex-module-decorators'
import AuthService from '@/components/Authentification/utils/auth-services'
import { AuthRequest, AuthResponse, AuthState } from '@/models/auth.model';

const user: AuthResponse = JSON.parse(localStorage.getItem('user') || 'null');

const initialState: AuthState = user
  ? { status: { loggedIn: true }, userResponse: user }
  : { status: { loggedIn: false }, userResponse: user };

@Module({ namespaced: true, name: 'auth'})
class Auth extends VuexModule {
  public authState: AuthState = initialState;

  @Action
  public updateToken(token: string): void {
    this.context.commit('setToken', token)
  }
  
  @Action
  public login(user: AuthRequest) {
    return AuthService.login(user).then(
      user => {
        this.context.commit('loginSuccess', user);
        return Promise.resolve(user);
      },
      error => {
        this.context.commit('loginFailure');
        return Promise.reject(error);
      }
    );
  }

  @Action
  public logout() {
    AuthService.logout();
    this.context.commit('logout');
  }


  @Action
  register(user: AuthRequest) {
    return AuthService.register(user).then(
      response => {
        this.context.commit('registerSuccess');
        return Promise.resolve(response.data);
      },
      error => {
        this.context.commit('registerFailure');
        return Promise.reject(error);
      }
    );
  }


  

  @Mutation
  public loginFailure(authState: AuthState): void{
    authState.status.loggedIn = false;
    authState.userResponse = null;
  }

  @Mutation
  public loginSuccess(authState: AuthState, user: AuthResponse): void {
    authState.status.loggedIn = true;
    authState.userResponse = user;
  }

  @Mutation
  public logoutSuccess(authState: AuthState): void {
    authState.status.loggedIn = false;
    authState.userResponse = null;
  }

  @Mutation
  public registerSuccess(authState: AuthState): void {
    authState.status.loggedIn = false;
  }

  @Mutation
  public registerFailure(authState: AuthState): void {
    authState.status.loggedIn = false;
  }
}
export default Auth