<template>
  <div class="auth-form">
    <div class="auth-verify" v-if="!user.verify">
      <app-title class="auth-title">
        <app-heading :level="1">Email Verification</app-heading>
        <p>You are almost there! We sent an email to {{ user.email }}</p>
      </app-title>
      <div class="auth-body">
        <p>
          Just click on the link in that email to complete your registration.
        </p>

        <br />
        <br />
        <p>Still can't find the email?</p>
        <base-button
          @click="sendEmail"
          class="btn-circle"
          variant="info"
          size="sm"
          >Resend Email</base-button
        >
        <br />
        <br />
        <br />
        <br />
      </div>
    </div>
    <!-- <div v-else>
      <app-title class="auth-title">
        <app-heading :level="1">Email send</app-heading>
        <p>Pelase check your {{ user.email }}</p>
      </app-title>

      <div class="auth-body">
        <p>
          Just click on the link in that email to complete your registration. if
          you don't see it, you may need to check your spam folder.
        </p>
        <br />
        <router-link
          class="btn btn-info btn-auth"
          style="font-size: 16px"
          to="/auth"
          >Login</router-link
        >
    </div>
      </div> -->
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  name: "verification",
  setup() {
    const store = useStore();

    const user = computed(() => store.getters.user);

    function sendEmail() {
      console.log("send");
      store.dispatch("resendEmail");
    }

    return {
      user,
      sendEmail,
    };
  },
};
</script>

<style>
</style>