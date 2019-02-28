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
      <button v-on:click="updateUser" v-if="isSelected">Update</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "CreateUser",
  methods: {
    createUser() {
      this.$store.dispatch("createUser")
    },
    updateUser() {
      this.$store.dispatch("updateUser")
    }
  },
  computed: {
    isSelected: {
      get () {
        if (this.$store.state.editingUser.url) {
          return true;
        } else {
          return false;
        }
      }
    },
    userName: {
      get () {
        return this.$store.state.editingUser.userName
      },
      set (value) {
        this.$store.commit('setEditingUserName', value)
      }
    },
    email: {
      get () {
        return this.$store.state.editingUser.email
      },
      set (value) {
        this.$store.commit('setEditingEmail', value)
      }
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
