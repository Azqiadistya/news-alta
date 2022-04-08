import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    listNews: [],
  },
  mutations: {
    setListNews(state, payload) {
      state.listNews = [...payload];
    },
  },

  actions: {
    fetchNews(store) {
      axios
        .get(
          "https://newsapi.org/v2/everything?q=tesla&from=2022-03-06&sortBy=publishedAt&apiKey=34d4c0c79262407fa0af7eb4ead385ba"
        )
        .then((response) => {
          store.commit("setListNews", response.data.articles);
          console.log("response", response);
        });
    },
  },
});
