<template>
  <form
    @submit.prevent="register"
    class="auth-form needs-validation"
    novalidate
  >
    <app-title class="auth-title">
      <app-heading :level="1">Register</app-heading>
      <p>
        If you have an account, please click here
        <router-link to="/auth">Login</router-link>
      </p>
    </app-title>

    <div class="form-body">
      <base-row>
        <base-col class="col">
          <base-form-group
            :is-error="v.auth.firstname.$error"
            :errors="v.auth.firstname.$errors"
          >
            <base-text-field
              type="text"
              name="firstname"
              placeholder="First Name"
              v-model="v.auth.firstname.$model"
              @blur="v.auth.firstname.$touch()"
              :is-error="
                v.auth.firstname.$errors.length > 0 && v.auth.firstname.$touch()
              "
            />
          </base-form-group>
        </base-col>
        <base-col class="col">
          <base-form-group
            :is-error="v.auth.lastname.$error"
            :errors="v.auth.lastname.$errors"
          >
            <base-text-field
              type="text"
              name="lastname"
              placeholder="last Name"
              v-model="v.auth.lastname.$model"
              @blur="v.auth.lastname.$touch"
              :is-error="
                v.auth.lastname.$errors.length > 0 && v.auth.lastname.$touch()
              "
            />
          </base-form-group>
        </base-col>
      </base-row>

      <base-form-group
        :is-error="v.auth.email.$error"
        :errors="v.auth.email.$errors"
      >
        <base-text-field
          name="email"
          type="email"
          placeholder="Email"
          v-model="auth.email"
          :is-error="v.auth.email.$errors.length > 0 && v.auth.email.$touch()"
          @blur="v.auth.email.$touch"
        />
      </base-form-group>

      <base-row>
        <base-col class="col">
          <base-form-group
            :is-error="v.auth.password.$error"
            :errors="v.auth.password.$errors"
          >
            <base-text-field
              type="password"
              name="password"
              placeholder="Password"
              v-model="v.auth.password.$model"
              @blur="v.auth.password.$touch"
              :is-error="
                v.auth.password.$errors.length > 0 && v.auth.password.$touch()
              "
            />
          </base-form-group>
        </base-col>
        <base-col class="col">
          <base-form-group
            :is-error="v.auth.confirmPassword.$error"
            :errors="v.auth.confirmPassword.$errors"
          >
            <base-text-field
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              v-model="v.auth.confirmPassword.$model"
              @blur="v.auth.confirmPassword.$touch"
              :is-error="
                v.auth.confirmPassword.$errors.length > 0 &&
                v.auth.confirmPassword.$touch()
              "
            />
          </base-form-group>
        </base-col>
      </base-row>
      <base-form-group
        :is-error="v.auth.mobile.$error"
        :errors="v.auth.mobile.$errors"
      >
        <base-text-field
          name="mobile"
          type="mobile"
          placeholder="Mobile"
          v-model="auth.mobile"
          :is-error="v.auth.mobile.$error"
          @blur="v.auth.mobile.$touch"
        />
      </base-form-group>
      <base-form-group class="mt-4">
        <base-button class="btn-circle" variant="info" size="sm"
          >Register</base-button
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
  required,
  email,
  minLength,
  maxLength,
  helpers,
  sameAs,
} from "@vuelidate/validators";
import { regExp } from "../utility";

const matchPassword = (password) =>
  !helpers.req(password) || regExp.password.test(password);

const matchMobile = (value) => !helpers.req(value) || regExp.mobile.test(value);
export default {
  setup() {
    // auth
    const auth = reactive({
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      confirmPassword: "",
      mobile: "",
    });

    // rule
    const rule = {
      auth: {
        firstname: { required },
        lastname: { required },
        email: { required, email },
        password: {
          required,
          minLength: minLength(8),
          maxLength: maxLength(16),
          matchPassword,
        },
        confirmPassword: {
          required,
          minLength: minLength(8),
          maxLength: maxLength(16),
          sameAsPassword: sameAs("password"),
        },
        mobile: {
          required,
          matchMobile,
        },
      },
    };

    // validation
    const v = useVuelidate(rule, { auth });

    // register
    function register() {
      v.value.$touch();
      if (v.value.$error) return;
      console.log("auth", auth);
    }
    return {
      auth,
      v,
      register,
    };
  },
};
</script>

<style>
</style>