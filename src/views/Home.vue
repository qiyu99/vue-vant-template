<template>
  <div class="home">
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image" />
      </van-swipe-item>
    </van-swipe>
    <p>当前数据{{$store.state.number}}</p>
    <van-button type="primary" :loading="loading" @click="addOne">按钮</van-button>
  </div>
</template>

<script>
// @ is an alias to /src
import { Swipe, SwipeItem, Button } from 'vant';
import { mapState, mapActions } from 'vuex';

export default {
  name: 'Home',
  components: {
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [Button.name]: Button,
  },
  data() {
    return {
      images: [
        'https://img.yzcdn.cn/vant/apple-1.jpg',
        'https://img.yzcdn.cn/vant/apple-2.jpg',
      ],
    };
  },
  computed: {
    ...mapState({ loading: (state) => state.myLoading.effect.oneAsync }),
  },
  methods: {
    ...mapActions(['oneAsync']),
    addOne() {
      this.oneAsync(1);
    },
  },
};
</script>

<style>
  .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
  }
  img {
    width: 100%;
  }
</style>
