<template>
  <v-app dark>
    <v-toolbar app fixed>
      <v-toolbar-title>Hacker News</v-toolbar-title>
    </v-toolbar>
    <v-content fluid fill-height>
      <h2 v-if="isFetching">Loading...</h2>
      <v-list two-line>
        <template v-for="(news, i) in news">
          <news :news="news" :key="i"></news>
        </template>
      </v-list>  
    </v-content>
    <v-footer>
      <span class="ml-3">narx &copy; 2018</span>
    </v-footer>
  </v-app>
</template>

<script>
import { mapState } from 'vuex';
import News from './components/News';

export default {
  computed: mapState({
    news: state => state.news,
    isFetching: state => state.isFetching,
  }),
  name: 'App',
  components: {
    News,
  },
};
</script>
