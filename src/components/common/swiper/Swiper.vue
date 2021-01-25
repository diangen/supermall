<template>
  <div class="swiper-container">
    <div class="swiper-wrapper" v-for="(item, index) in banner" :key="index">
      <div class="swiper-slide">
        <img :src="item.image" alt="" @load="imgLoad" />
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
    <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
    <!-- 如果需要滚动条 -->
    <div class="swiper-scrollbar"></div>
  </div>
</template>

<script>
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";
export default {
  name: "Swiper",
  props: {
    banner: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      isLoad: false,
    };
  },
  mounted() {
    var mySwiper = new Swiper(".swiper-container", {});
  },
  methods: {
    imgLoad() {
      if (!this.isLoad) {
        this.$emit("SwiperImgLoad");
        this.isLoad = true;
      }
    },
  },
};
</script>

<style  scoped>
.swiper-container {
  width: 100%;
  height: 300px;
}
.swiper-slide img {
  width: 100%;
  height: 100%;
}
.swiper-slide {
  width: 100%;
}
</style>