<template>
  <div class="accountcomponent">
    <h2>Affichage du compte</h2>
    <div v-if="!loading">
      <b-form @submit="editAccount" @delete="deleteAccount">
        <div class="form-data">
          <!-- Modify or show the username -->
          <account-form-component
            @on-input="setUsername"
            v-bind:value="information.username"
            id="input-username"
            label="Votre nom d'utilisateur :"
            placeholder="Entrez votre nom d'utilisateur"
            type="text"
            :required="true"
          />
          <!-- Modify or show the email -->
          <account-form-component
            @on-input="setEmail"
            v-bind:value="information.email"
            id="input-email"
            label="Votre email :"
            placeholder="Entrez votre email"
            type="email"
            :required="true"
          />
          <!-- Another input, same principle... -->
        </div>
        <div class="form-sending">
          <b-button block variant="primary" v-on:click="editAccount"
            >Modifier mes informations</b-button
          >
          <b-button block variant="danger" v-on:click="deleteAccount"
            >Supprimer mon compte</b-button
          >
        </div>
      </b-form>
    </div>
    <div v-else>
      <b-spinner label="Loading..." />
    </div>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from "vue-property-decorator";
  import { Information } from "@/models/account.model";
  import AccountFormComponent from "./AccountFormComponent.vue";
  import { AxiosResponse, AxiosError } from "axios";
  import AccountService from "./utils/account-services";
  import { AuthState } from "@/models/auth.model";
  import { namespace } from "vuex-class";

  const auth = namespace('auth')

  @Component({
    components: {
      AccountFormComponent,
    },
  })
  export default class AccountComponent extends Vue {
    private information: Information = {
      username: "",
      email: "",
    };

    @auth.State
    public authState: AuthState;

    private loading = true;

    private error = false;

    private message = "";

    public editAccount(): void {
      console.log(JSON.stringify(this.information));
      AccountService.put(this.information)
        .then((response: AxiosResponse) => (this.message = response.data.msg))
        .catch((err: AxiosError) => {
          this.error = true;
          if (err.response !== undefined) {
            this.message =
              "Erreur d'envoi, status : " + err.response.status.toString();
          } else {
            this.message = "Erreur d'envoi inconnue";
          }
        });
    }

    public deleteAccount(): void {    
      AccountService.delete();
    }

    public deleteUserAccount(id: string): void {
      AccountService.delete(id);
    }
    // setter of email
    public setEmail(value: string) {
      console.log(value);
      this.information.email = value;
    }

    // getter of email
    public getEmail() {
      return this.information.email;
    }

    // setter of username
    public setUsername(value: string) {
      this.information.username = value;
      console.log(this.information);
    }

    // getter of username
    public getUsername() {
      return this.information.username;
    }

    created(): void {
      AccountService.get()
        .then((data) => {
          this.information = data;
        })
        .finally(() => {
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

  .form-sending {
    width: 25%;
    margin: 0 auto;
  }
</style>
