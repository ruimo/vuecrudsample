import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const axios = require("axios");

export default new Vuex.Store({
  state: {
    userList: []
  },
  getters: {
    userList(state) {
      return state.userList;
    }
  },
  mutations: {
    setUserList(state, l) {
      state.userList = l;
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
    createUser(ctx, parms) {
      axios.post("http://localhost:8090/users/", {
        username: parms.userName,
        email: parms.email,
        groups: []
      })
      .then(() => {
        alert("registered.");
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
