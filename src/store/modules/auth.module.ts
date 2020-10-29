import { VuexModule, Module, Mutation, Action } from 'vuex-module-decorators'
import AuthService from '@/components/Authentification/utils/auth-services'
import { AuthRequest, AuthResponse, State } from '@/models/auth.model';

const user = JSON.parse(localStorage.getItem('user') || '{}');

const initialState: State = user
  ? { status: { loggedIn: true }, user }
  : { status: { loggedIn: false }, user: null };

@Module({ namespaced: true, name: 'auth'})
class Auth extends VuexModule {
  public stateAuth: State = initialState

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
  public loginFailure(state: State): void{
    state.status.loggedIn = false;
    state.user = null;
  }

  @Mutation
  public loginSuccess(state: State, user: AuthResponse): void {
    state.status.loggedIn = true;
    state.user = user;
  }

  @Mutation
  public logoutSuccess(state: State): void {
    state.status.loggedIn = false;
    state.user = null;
  }

  @Mutation
  public registerSuccess(state: State): void {
    state.status.loggedIn = false;
  }

  @Mutation
  public registerFailure(state: State): void {
    state.status.loggedIn = false;
  }
}
export default Auth