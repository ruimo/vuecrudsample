<template>
  <div class="cureateUser form">
    <div class="userName formField">
      <label for="createUserName">User Name</label>
      <input id="createUserName" v-model="userName" placeholder="User name" />
    </div>

    <div class="email formField">
      <label for="createEmail">Email</label>
      <input id="createEmail" v-model="email" placeholder="Email" />
    </div>

    <div class="submit formField">
      <button v-on:click="createUser">Register</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "CreateUser",
  data() {
    return {
      userName: "",
      email: ""
    };
  },
  methods: {
    createUser() {
      this.$store.dispatch("createUser", {userName: this.userName, email: this.email}).then(() => {
        this.userName = "";
        this.email = "";
      });
    }
  }
}
</script>

<style>
.form {
  text-align: left;
}
.formField {
  padding: 0.5em;
}

.formField label {
  padding-right: 0.5em;
}
</style>
