<template>
  <v-app dark>
    <v-toolbar app fixed>
      <v-toolbar-title>Hacker News</v-toolbar-title>
    </v-toolbar>
    <v-content fluid fill-height>
      <v-list two-line>
        <template v-for="(n, i) in news">
          <news :news-id="n" :key="i"></news>
        </template>
      </v-list>  
    </v-content>
    <v-footer>
      <span class="ml-3">narx &copy; 2018</span>
    </v-footer>
  </v-app>
</template>

<script>
import axios from 'axios';
import News from './components/News';

export default {
  data() {
    return {
      news: [],
    };
  },
  name: 'App',
  components: {
    News,
  },
  mounted() {
    axios.get('https://hacker-news.firebaseio.com/v0/beststories.json').then((response) => {
      this.news = response.data.slice(0, 30);
    });
  },
};
</script>
