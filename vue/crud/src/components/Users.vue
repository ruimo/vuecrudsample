<template>
  <div class="users">
    <CreateUser />
    <ListUser />
  </div>
</template>

<script>
import CreateUser from "@/components/CreateUser.vue";
import ListUser from "@/components/ListUser.vue";

export default {
  name: "Users",
  components: {
    CreateUser, ListUser
  },
  created() {
    this.$store.dispatch("updateUserList");
  },
};
</script>
