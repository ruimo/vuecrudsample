<template>
  <div class="listUser form">
    <table>
      <tr v-for="user in this.$store.getters.userList" v-bind:key="user.url" v-bind:class="{isSelected: isSelected(user)}">
        <td>{{ user.username}}</td>
        <td>{{ user.email }}</td>
        <td><button v-on:click="deleteUser(user.url)">delete</button></td>
        <td><button v-on:click="editUser(user)">edit</button></td>
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
    },
    editUser(user) {
      this.$store.commit("setEditingUser", {
        userName: user.username,
        email: user.email,
        url: user.url
      });
    },
    isSelected(user) {
      return user.url == this.$store.state.editingUser.url;
    }
  }
};
</script>

<style>
tr.isSelected {
  background-color: cyan;
}
</style>