<template>
  <div id="home">
    <nav-bar class="home-bar">
      <div slot="center">购物街</div>
    </nav-bar>
    <swiper :banner="banner"></swiper>
    <recommend-view :recommends="recommends"></recommend-view>
    <feature-view></feature-view>
    <tab-control class="control" :titles="titles"></tab-control>
    <ul>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
    </ul>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/navbar.vue";
import Swiper from "components/common/swiper/Swiper.vue";
import TabControl from "components/content/tabControl/TabControl.vue";

import { getHomeMultidata } from "network/home";

import RecommendView from "./childComps/RecommendView";
import FeatureView from "./childComps/FeatureView.vue";

export default {
  name: "Home",
  components: {
    NavBar,
    RecommendView,
    Swiper,
    FeatureView,
    TabControl,
  },
  data() {
    return {
      banner: [],
      recommends: [],
      titles: [],
    };
  },
  created() {
    // getHomeMultidata().then((res) => {
    //   this.banner = res.data.banner;
    //   this.recommends = res.data.recom;
    // });
    this.banner = [
      {
        image:
          "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3363295869,2467511306&fm=26&gp=0.jpg",
      },
      {
        image:
          "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fa2.att.hudong.com%2F27%2F81%2F01200000194677136358818023076.jpg&refer=http%3A%2F%2Fa2.att.hudong.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1613615084&t=21494419c06229d4be63e87ab645d29c",
      },
      {
        image:
          "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fa0.att.hudong.com%2F52%2F62%2F31300542679117141195629117826.jpg&refer=http%3A%2F%2Fa0.att.hudong.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1613615084&t=6ff9714eb6292445e371649633d34de2",
      },
    ];
    this.recommends = [
      {
        title: "精品",
        link: "https://www.baidu.com",
        image: "",
      },
      {
        title: "热门",
        link: "https://www.baidu.com",
        image: "",
      },
      {
        title: "推荐",
        link: "https://www.baidu.com",
        image: "",
      },
      {
        title: "新品",
        link: "https://www.baidu.com",
        image: "",
      },
    ];
    this.titles = [
      {
        title: "流行",
      },
      {
        title: "新款",
      },
      {
        title: "精选",
      },
    ];
  },
};
</script>

<style  scoped>
#home {
  padding-top: 44px;
}
.home-bar {
  background-color: gray;
  color: #fff;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
}
.control{
  position: sticky;
	top: 44px;
}
</style>
