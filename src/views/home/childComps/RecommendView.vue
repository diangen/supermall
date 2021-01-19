<template>
  <div class="recommend">
    <div v-for="item in recommedns" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" alt="" />
        <div>{{ item.title }}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecommendView",
  props: {
    recommedns: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {};
  },
};
</script>

<style  scoped>
.recommend {
  display: flex;
  text-align: center;
  width: 100%;
  font-size: 12px;
  padding: 10px 0px 20px;
  border-bottom:8px solid #eeeeee ;
}
.recommend-item {
  flex: 1;
}
.recommend-item img {
  width: 65px;
  height: 65px;
  margin-bottom: 2px;
}
</style>