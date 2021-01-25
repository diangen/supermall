<template>
  <div id="home">
    <nav-bar class="home-bar">
      <div slot="center">购物街</div>
    </nav-bar>
    <tab-control
      :titles="titles"
      @tabClick="tabClick"
      ref="tabControl1"
      v-show="isTabFiexd"
      class="tab-control1"
    ></tab-control>
    <scroll
      class="content"
      ref="scroll"
      @scroll="contentScroll"
      :probe-type="3"
      :pull-up-load="true"
      @pullingUp="loadMore"
    >
      <swiper :banner="banner" @SwiperImgLoad="SwiperImgLoad"></swiper>
      <recommend-view :recommends="recommends"></recommend-view>
      <feature-view></feature-view>
      <tab-control
        :titles="titles"
        @tabClick="tabClick"
        ref="tabControl2"
      ></tab-control>

      <good-list :goods="showGoods"></good-list>
    </scroll>
    <back-top @click.native="topClick" v-show="topTrue"></back-top>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/navbar.vue";
import Swiper from "components/common/swiper/Swiper.vue";
import TabControl from "components/content/tabControl/TabControl.vue";

import { getHomeMultidata, getHomeGoods } from "network/home";

import RecommendView from "./childComps/RecommendView";
import FeatureView from "./childComps/FeatureView.vue";

import GoodList from "components/content/goods/GoodList.vue";

import Scroll from "components/common/scroll/Scroll.vue";
import BackTop from "components/content/backTop/BackTop.vue";

export default {
  name: "Home",
  components: {
    NavBar,
    RecommendView,
    Swiper,
    FeatureView,
    TabControl,
    GoodList,
    Scroll,
    Scroll,
    BackTop,
  },
  data() {
    return {
      banner: [],
      recommends: [],
      titles: [],
      goods: {
        pop: {
          page: 0,
          list: [
            {
              price: 123.0,
              title: "小短裙",
              image:
                "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1089874897,1268118658&fm=26&gp=0.jpg",
              priv: 1689,
            },
            {
              price: 123.0,
              title: "小短裙",
              image:
                "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1089874897,1268118658&fm=26&gp=0.jpg",
              priv: 1689,
            },
            {
              price: 123.0,
              title: "小短裙",
              image:
                "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1089874897,1268118658&fm=26&gp=0.jpg",
              priv: 1689,
            },
            {
              price: 123.0,
              title: "小短裙",
              image:
                "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1089874897,1268118658&fm=26&gp=0.jpg",
              priv: 1689,
            },
            {
              price: 123.0,
              title: "小短裙",
              image:
                "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1089874897,1268118658&fm=26&gp=0.jpg",
              priv: 1689,
            },
            {
              price: 123.0,
              title: "小短裙",
              image:
                "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1089874897,1268118658&fm=26&gp=0.jpg",
              priv: 1689,
            },
            {
              price: 123.0,
              title: "小短裙",
              image:
                "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1089874897,1268118658&fm=26&gp=0.jpg",
              priv: 1689,
            },
            {
              price: 123.0,
              title: "小短裙",
              image:
                "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1089874897,1268118658&fm=26&gp=0.jpg",
              priv: 1689,
            },
            {
              price: 123.0,
              title: "小短裙",
              image:
                "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1089874897,1268118658&fm=26&gp=0.jpg",
              priv: 1689,
            },
            {
              price: 123.0,
              title: "小短裙",
              image:
                "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1089874897,1268118658&fm=26&gp=0.jpg",
              priv: 1689,
            },
            {
              price: 123.0,
              title: "小短裙",
              image:
                "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1089874897,1268118658&fm=26&gp=0.jpg",
              priv: 1689,
            },
            {
              price: 123.0,
              title: "小短裙",
              image:
                "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1089874897,1268118658&fm=26&gp=0.jpg",
              priv: 1689,
            },
          ],
        },
        new: {
          page: 0,
          list: [
            {
              price: 123.0,
              title: "小短裙",
              priv: 1689,
              image:
                "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2475869539,2015455408&fm=26&gp=0.jpg",
            },
            {
              price: 123.0,
              title: "小短裙",
              priv: 1689,
              image:
                "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2475869539,2015455408&fm=26&gp=0.jpg",
            },
            {
              price: 123.0,
              title: "小短裙",
              priv: 1689,
              image:
                "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2475869539,2015455408&fm=26&gp=0.jpg",
            },
            {
              price: 123.0,
              title: "小短裙",
              priv: 1689,
              image:
                "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2475869539,2015455408&fm=26&gp=0.jpg",
            },
            {
              price: 123.0,
              title: "小短裙",
              priv: 1689,
              image:
                "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2475869539,2015455408&fm=26&gp=0.jpg",
            },
            {
              price: 123.0,
              title: "小短裙",
              priv: 1689,
              image:
                "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2475869539,2015455408&fm=26&gp=0.jpg",
            },
            {
              price: 123.0,
              title: "小短裙",
              priv: 1689,
              image:
                "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2475869539,2015455408&fm=26&gp=0.jpg",
            },
            {
              price: 123.0,
              title: "小短裙",
              priv: 1689,
              image:
                "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2475869539,2015455408&fm=26&gp=0.jpg",
            },
            {
              price: 123.0,
              title: "小短裙",
              priv: 1689,
              image:
                "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2475869539,2015455408&fm=26&gp=0.jpg",
            },
            {
              price: 123.0,
              title: "小短裙",
              priv: 1689,
              image:
                "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2475869539,2015455408&fm=26&gp=0.jpg",
            },
            {
              price: 123.0,
              title: "小短裙",
              priv: 1689,
              image:
                "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2475869539,2015455408&fm=26&gp=0.jpg",
            },
            {
              price: 123.0,
              title: "小短裙",
              priv: 1689,
              image:
                "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2475869539,2015455408&fm=26&gp=0.jpg",
            },
            {
              price: 123.0,
              title: "小短裙",
              priv: 1689,
              image:
                "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2475869539,2015455408&fm=26&gp=0.jpg",
            },
            {
              price: 123.0,
              title: "小短裙",
              priv: 1689,
              image:
                "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2475869539,2015455408&fm=26&gp=0.jpg",
            },
            {
              price: 123.0,
              title: "小短裙",
              priv: 1689,
              image:
                "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2475869539,2015455408&fm=26&gp=0.jpg",
            },
            {
              price: 123.0,
              title: "小短裙",
              priv: 1689,
              image:
                "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2475869539,2015455408&fm=26&gp=0.jpg",
            },
          ],
        },
        sell: {
          page: 0,
          list: [
            {
              price: 123.0,
              title: "小短裙",
              priv: 1689,
              image:
                "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1502252663,355945178&fm=15&gp=0.jpg",
            },
            {
              price: 123.0,
              title: "小短裙",
              priv: 1689,
              image:
                "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1502252663,355945178&fm=15&gp=0.jpg",
            },
            {
              price: 123.0,
              title: "小短裙",
              priv: 1689,
              image:
                "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1502252663,355945178&fm=15&gp=0.jpg",
            },
            {
              price: 123.0,
              title: "小短裙",
              priv: 1689,
              image:
                "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1502252663,355945178&fm=15&gp=0.jpg",
            },
            {
              price: 123.0,
              title: "小短裙",
              priv: 1689,
              image:
                "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1502252663,355945178&fm=15&gp=0.jpg",
            },
            {
              price: 123.0,
              title: "小短裙",
              priv: 1689,
              image:
                "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1502252663,355945178&fm=15&gp=0.jpg",
            },
            {
              price: 123.0,
              title: "小短裙",
              priv: 1689,
              image:
                "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1502252663,355945178&fm=15&gp=0.jpg",
            },
            {
              price: 123.0,
              title: "小短裙",
              priv: 1689,
              image:
                "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1502252663,355945178&fm=15&gp=0.jpg",
            },
            {
              price: 123.0,
              title: "小短裙",
              priv: 1689,
              image:
                "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1502252663,355945178&fm=15&gp=0.jpg",
            },
            {
              price: 123.0,
              title: "小短裙",
              priv: 1689,
              image:
                "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1502252663,355945178&fm=15&gp=0.jpg",
            },
            {
              price: 123.0,
              title: "小短裙",
              priv: 1689,
              image:
                "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1502252663,355945178&fm=15&gp=0.jpg",
            },
            {
              price: 123.0,
              title: "小短裙",
              priv: 1689,
              image:
                "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1502252663,355945178&fm=15&gp=0.jpg",
            },
          ],
        },
      },
      curretnType: "pop",
      topTrue: false,
      tabOffsetTop: 0,
      isTabFiexd: false,
    };
  },
  created() {
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
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  mounted() {
    const refresh = this.debounce(this.$refs.scroll.refresh, 50);
    // 监听item图片加载完成
    this.$bus.$on("itemImageLoad", () => {
      refresh();
    });
    // 获取tabContentrol
    //  顶部切换
  },
  computed: {
    showGoods() {
      return this.goods[this.curretnType].list;
    },
  },

  methods: {
    /* 
      网络请求事件
    */
    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        // this.banner = res.data.banner;
        // this.recommends = res.data.recom;
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      // getHomeGoods(type).then((res) => {
      // this.goods[type].list.push(...res.data.list);
      // this.goods[type].page += 1;
      this.$refs.scroll.finishPullUp();
      // });
    },

    /* 
      点击事件
    */
    tabClick(index) {
      switch (index) {
        case 0:
          this.curretnType = "pop";
          break;
        case 1:
          this.curretnType = "new";
          break;
        case 2:
          this.curretnType = "sell";
          break;
      }
      this.$refs.tabControl1.currentActive = index;
      this.$refs.tabControl2.currentActive = index;
    },

    // 事件监听
    topClick() {
      // this.$refs.scroll 可以访问子组件中的里面的任何东西
      this.$refs.scroll.scrollTo(0, 0, 500);
    },
    contentScroll(position) {
      this.topTrue = Math.abs(position.y) > 800;
      //判断监听 tab的高度
      this.isTabFiexd = Math.abs(position.y) > this.tabOffsetTop+220;
    },
    loadMore() {
      // 通过 curretnType 来判断 点击类型 然后进行数据请求 并且 页数加1
      this.getHomeGoods(this.curretnType);
      this.$refs.scroll.refresh();
    },

    debounce(func, delay) {
      let timer = null;
      return function (...args) {
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
          func.apply(this, args);
        }, delay);
      };
    },

    SwiperImgLoad() {
      this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop;
    },
  },
};
</script>

<style  scoped>
#home {
  padding-top: 44px;
  height: 100vh;
  position: relative;
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
.control {
  position: sticky;
  top: 44px;
  z-index: 9;
}
.content {
  overflow: hidden;
  position: absolute;
  top: 44px;
  left: 0;
  right: 0;
  bottom: 20px;
}

.tab-control1 {
  position: relative;
  z-index: 9;
  top: 44px;
}
</style>
