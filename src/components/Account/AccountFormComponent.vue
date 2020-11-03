<template>
    <div class="AccountFormComponent">
        <b-form-group
        :id="id"
        :label="label"
        label-for="input-custom"
        :invalid-feedback="invalidFeedback"
        :state="state"
        >
        <b-form-input
          id="input-custom"
          :type="type"
          :required="required"
          :placeholder="placeholder"
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

    @Prop(String)
    private placeholder: string;

    @Prop(String)
    private type: string;

    @Prop(Boolean)
    readonly required: boolean;

    @Emit()
    onInput() {
        this.value
    }

    get state() {
        return this.value.length >= 3
    }

    get invalidFeedback() {
        if (this.value.length > 0) {
          return 'Enter at least 3 characters.'
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