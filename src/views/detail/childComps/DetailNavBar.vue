<template>
  <div>
    <nav-bar>
      <div slot="left" @click="backItem" class="jian_left">
        <img src="~assets/img/home/jian_left.svg" alt="" />
      </div>
      <div slot="center" class="titles">
        <div
          class="title"
          :class="{ active: index == currtenIndex }"
          @click="titleClick(index)"
          v-for="(item, index) in titles"
          :key="index"
        >
          {{ item }}
        </div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/navbar.vue";

export default {
  name: "DetailNavBar",
  data() {
    return { titles: ["商品", "参数", "评论", "推荐"], currtenIndex: 0 };
  },
  components: {
    NavBar,
  },
  methods: {
    titleClick(index) {
      this.currtenIndex = index;
    },
    backItem() {
      this.$router.back();
    },
  },
};
</script>

<style  scoped>
.titles {
  display: flex;
  font-size: 14px;
  color: antiquewhite;
}
.titles .title {
  flex: 1;
}
.titles .active {
  color: hotpink;
}
.jian_left{
  margin-left: 20px;
  background: hotpink;
  color: black;
  font-size: 20px;
}
</style>