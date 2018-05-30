import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    isFetching: false,
    news: [],
  },
  mutations: {
    setNews: (state, news) => {
      state.news = news;
    },
    setFetching: (state, isFetching) => {
      state.isFetching = isFetching;
    },
  },
  actions: {
    fetchNews: async ({ commit }) => {
      commit('setFetching', true);
      commit('setNews', []);
      const newsIds = (await axios.get('https://hacker-news.firebaseio.com/v0/beststories.json'))
        .data.slice(0, 30);
      const news = (await Promise.all(newsIds.map(newsId => axios.get(`https://hacker-news.firebaseio.com/v0/item/${newsId}.json`)))).map(response => response.data);
      commit('setNews', news);
      commit('setFetching', false);
    },
  },
});

export default store;
