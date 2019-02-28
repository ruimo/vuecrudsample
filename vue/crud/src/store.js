import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const axios = require("axios");

export default new Vuex.Store({
  state: {
    userList: [],
    editingUser: {
      userName: "",
      email: "",
      url: ""
    }
  },
  getters: {
    userList(state) {
      return state.userList;
    },
    editingUser(state) {
      return state.editingUser;
    }
  },
  mutations: {
    setUserList(state, l) {
      state.userList = l;
    },
    setEditingUserName(state, n) {
      state.editingUser.userName = n;
    },
    setEditingEmail(state, e) {
      state.editingUser.email = e;
    },
    setEditingUser(state, u) {
      state.editingUser = u;
    },
    clearEditingUser(state) {
      state.editingUser = {
        userName: "",
        email: "",
        url: ""
      };
    }
  },
  actions: {
    updateUserList(ctx) {
      axios.get("http://localhost:8090/users/")
      .then((resp) => {
        ctx.commit("setUserList", resp.data.results);
      })
      .catch(function(error) {
        alert("error occurred. " + JSON.stringify(error));
      });
    },
    createUser(ctx) {
      axios.post("http://localhost:8090/users/", {
        username: ctx.state.editingUser.userName,
        email: ctx.state.editingUser.email,
        groups: []
      })
      .then(() => {
        alert("registered.");
        ctx.commit("clearEditingUser");
        ctx.dispatch("updateUserList");
      })
      .catch(function(error) {
        alert("error occurred. " + JSON.stringify(error));
      });
    },
    updateUser(ctx) {
      axios.put(ctx.state.editingUser.url, {
        username: ctx.state.editingUser.userName,
        email: ctx.state.editingUser.email,
        groups: []
      })
      .then(() => {
        alert("updated.");
        ctx.commit("clearEditingUser");
        ctx.dispatch("updateUserList");
      })
      .catch(function(error) {
        alert("error occurred. " + JSON.stringify(error));
      });
    },
    deleteUser(ctx, url) {
      axios.delete(url)
      .then(() => {
        alert("removed.");
        ctx.dispatch("updateUserList");
      })
      .catch(function(error) {
        alert("error occurred. " + JSON.stringify(error));
      });
    }
  }
});
