<template>
  <div class="accountcomponent">
    <h2>Affichage du compte</h2>
    <div class="form-data">
      <div v-if="!loading">
        <b-form>
        <account-form-component @on-input="getValue" v-bind:value="information.email"/>
        </b-form>
        {{ information.email }}
      </div>
      <div v-else >
        <b-spinner label="Loading..."/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Information } from '@/models/account.model';
import AccountFormComponent from './AccountFormComponent.vue';
import axios from 'axios';


const api = axios.create({
  baseURL: 'http://demo0330246.mockable.io',
  timeout: 1000
});


@Component({
  components: {
    AccountFormComponent,
  }
})
export default class AccountComponent extends Vue {

    private information: Information = {
      username: '',
      email: ''
    };

    private loading = true;
    
    public editAccount(information: Information): void {return}
    public deleteAccount(): void {return}


    // Getter and setter
    public setEmail(value: string) {
      this.information.email = value;
    }

    public getEmail(value: string) {
      return this.information.email;
    }

    // CRUD function
    public async get(): Promise<Information> {
      return await api.get('/account').then((response) => response.data );
    }
    public put(information: Information): void{
      api.put('/account', information)
    }
    public post(information: Information ): void {
      api.post('/account', information)
    }
    public delete(): void {
      api.delete('/account')
    }

    created(): void {
      this.get().then(data => {
        this.information = data;
      }).finally(() => {
        this.loading = false;
      });
    }
}
</script>

<style scoped lang="scss">
.form-data {
  width: 25%;
  margin: 0 auto;
}
</style>