<template>
  <form
    @submit.prevent="forgotPassword"
    class="auth-form needs-validation"
    novalidate
  >
    <app-title class="auth-title">
      <app-heading :level="1">Forgot Password</app-heading>
      <p>
        Back to login, please click here
        <router-link to="/auth">Login</router-link>
      </p>
    </app-title>
    <base-form-group
      :is-error="v.emailAddress.$error"
      :errors="v.emailAddress.$errors"
    >
      <base-text-field
        name="email"
        type="email"
        placeholder="Email"
        v-model="emailAddress"
        :is-error="v.emailAddress.$errors.length > 0 && v.emailAddress.$touch"
        @blur="v.emailAddress.$touch()"
      />
    </base-form-group>
    <base-form-group>
      <base-button class="btn-circle" variant="info" size="sm"
        >Send</base-button
      >
    </base-form-group>
  </form>
</template>

<script>
import { ref } from "vue";
import { useVuelidate } from "@vuelidate/core";
import { email, required } from "@vuelidate/validators";

export default {
  name: "forgot-password",
  setup() {
    const emailAddress = ref("");

    // rule
    const rule = {
      emailAddress: { required, email },
    };

    // validatte
    const v = useVuelidate(rule, { emailAddress });

    // forgot
    function forgotPassword() {
      v.value.$touch();
      if (v.value.$error) return;
      console.log("auth", emailAddress);
    }

    return {
      v,
      emailAddress,
      forgotPassword,
    };
  },
};
</script>

<style>
</style>