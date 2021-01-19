<template>
  <div id="home">
    <nav-bar class="home-bar">
      <div slot="center">购物街</div>
    </nav-bar>
    <recommend-view :recommends="recommedns"></recommend-view>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/navbar.vue";
import { getHomeMultidata } from "network/home";
import RecommendView from './childComps/RecommendView'
export default {
  name: "Home",
  components: {
    NavBar,
    RecommendView
  },
  data() {
    return {
      banner: [],
      recommends: [],
    }
  },
  created() {
    getHomeMultidata().then((res) => {
      this.banner = res.data.banner;
      this.recommends = res.data.recom;
    });
  },
};
</script>

<style  scoped>
.home-bar {
  background-color: gray;
  color: #fff;
}
</style>
