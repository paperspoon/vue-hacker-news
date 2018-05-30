<template>
  <div v-if="news" @click="goUrl(news.url)">
    <v-list-tile avatar>
      <v-list-tile-avatar>
        <span class="white--text headline">{{news.title.substring(0,1)}}</span>
      </v-list-tile-avatar>
      <v-list-tile-content>
        <v-list-tile-title>
          <a :href="news.url" target="_blank" class="white--text">{{news.title}}</a>
        </v-list-tile-title>
        <v-list-tile-sub-title>
          {{news.score}}점 by {{news.by}} / {{moment(news.time)}}시간전 / {{news.descendants}}개의 코멘트
        </v-list-tile-sub-title>
      </v-list-tile-content>
    </v-list-tile>
    <v-divider inset></v-divider>
  </div>
</template>

<script>
import * as moment from 'moment';

moment.locale('ko');

export default {
  methods: {
    moment: time => moment().diff(moment.unix(time), 'hours'),
  },
  props: ['news'],
};
</script>

<style>

</style>
