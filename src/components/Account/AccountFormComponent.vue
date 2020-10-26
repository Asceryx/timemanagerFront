<template>
    <div class="AccountFormComponent">
        <b-form-group
        id="input-group-1"
        label="Email"
        label-for="input-1"
        :invalid-feedback="invalidFeedback"
        :state="state"
        >
        <b-form-input
          id="input-1"
          type="email"
          required
          placeholder="Entrer l'email"
          v-on:input="onInput"
          trim
          :value="value"
        ></b-form-input>
      </b-form-group>
    </div>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from 'vue-property-decorator';

@Component
export default class AccountFormComponent extends Vue {
    
    @Prop(String)
    readonly value: string;

    @Prop(String)
    readonly id: string;

    @Prop(String)
    readonly label: string;

    private input: string;

    @Emit()
    onInput() {
        this.value
    }

    get state() {
        return this.value.length >= 4
    }

    get invalidFeedback() {
        if (this.value.length > 0) {
          return 'Enter at least 4 characters.'
        }
        return 'Please enter something.'
    }
}
</script>

<style lang="scss">
.AccountFormComponent {
    text-align: left;
}
</style>