<template>
  <div class="listUser form">
    <table>
      <tr v-for="user in this.$store.getters.userList" v-bind:key="user.url">
        <td>{{ user.username}}</td>
        <td>{{ user.email }}</td>
        <td><button v-on:click="deleteUser(user.url)">delete</button></td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "ListUser",
  methods: {
    deleteUser(url) {
      this.$store.dispatch("deleteUser", url);
    }
  }
};
</script>