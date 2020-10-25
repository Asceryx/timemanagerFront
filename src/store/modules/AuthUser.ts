import { VuexModule, Module, Mutation, Action } from 'vuex-module-decorators'
import { User }  from '@/models/users.model'

@Module({ namespaced: true, name: 'authuser'})
class AuthUser extends VuexModule {
  public user: User;
  public token: string = '';
  public isAuthenticate: boolean = false;

  @Mutation
  public setToken(token: string): void {
    if(token && this.token != null) {
      this.isAuthenticate = true;
    }
    else {
      this.isAuthenticate = false;
    }
  }

  @Action
  public updateToken(token: string): void {
    this.context.commit('setToken', token)
  }
}
export default AuthUser