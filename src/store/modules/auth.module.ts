import { VuexModule, Module, Mutation, Action } from 'vuex-module-decorators'
import AuthService from '@/components/Authentification/utils/auth-services'
import { AuthResponse } from '@/models/auth.model';

const user: AuthResponse = JSON.parse(localStorage.getItem('user') || 'null');



@Module({ namespaced: true, name: 'auth'})
class Auth extends VuexModule {
  loggedIn = false;
  user: AuthResponse = user;


  get isLoggedIn() {
    return this.loggedIn;
  }

  get isManager() {
    return user.role == 1 || user.role == 2;
  }

  @Action
  public login() {
    this.loginSuccess()
  
  }

  @Action
  public logout() {
    AuthService.logout();
    this.context.commit('logout');
  }


  @Mutation
  public loginFailure(): void{
    this.loggedIn = false;
    this.user =  { id: 0, role: 0 };
  }

  @Mutation
  public loginSuccess(): void {
    this.loggedIn = true;
  }

  @Mutation
  public logoutSuccess(): void {
    this.loggedIn  = false;
    this.user =  { id: 0, role: 0 };
  }

  @Mutation
  public registerSuccess(): void {
    this.loggedIn = false;
  }

  @Mutation
  public registerFailure(): void {
    this.loggedIn  = false;
  
  }
}
export default Auth;
