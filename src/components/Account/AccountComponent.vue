<template>
  <div class="accountcomponent">
    <h2>Affichage du compte</h2>
    <template v-if="!loading">
      <div>
        <b-form-input v-model=information.username></b-form-input>
      </div>
      <div>
        <b-form-input v-model=information.email></b-form-input>
      </div>
    </template>
    <div v-else >
      <b-spinner label="Loading..."/>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Information } from '@/models/account.model';
import { User } from '@/models/users.model';
import axios from 'axios';


const api = axios.create({
  baseURL: 'http://demo0330246.mockable.io',
  timeout: 1000
});


@Component
export default class AccountComponent extends Vue {
    @Prop() readonly user: User;

    private information: Information = {
      username: '',
      email: ''
    };
    private loading = true;

    public editAccount(information: Information): void {return}
    public deleteAccount(): void {return}


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
</style>