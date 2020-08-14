<template>
  <div id="app">
    <router-view />
    <van-tabbar route v-model="active">
      <van-tabbar-item replace to="/" icon="home-o">
        首页
      </van-tabbar-item>
      <van-tabbar-item replace to="/about" icon="orders-o">
        介绍
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import { Tabbar, TabbarItem, Button } from 'vant';

export default {
  name: 'app',
  components: {
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem,
    [Button.name]: Button,
  },
  data() {
    return {
      active: 0,
    };
  },
};
</script>

<style>
</style>
