<template>
  <form @submit.prevent="login" class="auth-form needs-validation" novalidate>
    <app-title class="auth-title">
      <app-heading :level="1">Login</app-heading>
      <p>
        If you don't have an account, please click here
        <router-link to="/auth/register">Register</router-link>
      </p>
    </app-title>
    <div class="form-body">
      <base-form-group
        :is-error="v.auth.email.$error"
        :errors="v.auth.email.$errors"
      >
        <base-text-field
          name="email"
          type="email"
          placeholder="Email"
          v-model="auth.email"
          :is-error="v.auth.email.$errors.length > 0 && v.auth.email.$touch"
          @blur="v.auth.email.$touch()"
        />
      </base-form-group>
      <base-form-group
        :is-error="v.auth.password.$error"
        :errors="v.auth.password.$errors"
      >
        <base-text-field
          name="password"
          type="password"
          v-model="auth.password"
          placeholder="****"
          @blur="v.auth.password.$touch()"
          :is-error="
            v.auth.password.$errors.length > 0 && v.auth.password.$touch
          "
          :password="v.auth.password.matchPassword"
        />
      </base-form-group>
      <base-form-group>
        <router-link class="forgot" to="/auth/forgot-password"
          >Forgot Password</router-link
        >
        <base-button class="btn-circle" variant="info" size="sm"
          >Login</base-button
        >
      </base-form-group>
      <div class="social">
        <span class="sep">OR</span>
        <p>Sign in with Google or Facebook</p>
        <base-button type="button" variant="g" size="sm">Google</base-button>
        <base-button type="button" variant="fb" size="sm">Facebook</base-button>
      </div>
    </div>
  </form>
</template>
 
<script>
import { reactive } from "vue";
import { useVuelidate } from "@vuelidate/core";
import {
  email,
  required,
  helpers,
  minLength,
  maxLength,
} from "@vuelidate/validators";
import { regExp } from "../utility";
const matchPassword = (password) =>
  !helpers.req(password) || regExp.password.test(password);

import { useStore } from "vuex";

export default {
  name: "auth-login",
  setup() {
    const store = useStore();

    // auth reactive
    const auth = reactive({
      email: "",
      password: "",
    });

    // validation rule
    const rule = {
      auth: {
        email: { required, email },
        password: {
          required,
          minLength: minLength(8),
          maxLength: maxLength(16),
          matchPassword,
        },
      },
    };
    const v = useVuelidate(rule, { auth });

    // login
    function login() {
      v.value.$touch();
      if (v.value.$error) return;
      store.dispatch("login", auth);
    }

    return {
      auth,
      v,
      login,
    };
  },
};
</script>

<style>
</style>