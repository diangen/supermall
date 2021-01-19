<template>
  <div class="tab-control">
    <div
      v-for="(item, index) in titles"
      class="tab-control-item"
      :class="{ active: index == currentActive }"
      @click="currentClick(index)"
    >
      <span>{{ item.title }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      currentActive: 0,
    };
  },
  methods: {
    currentClick(index) {
      this.currentActive = index;
    },
  },
};
</script>

<style  scoped>
.tab-control {
  display: flex;
  text-align: center;
  font-size: 15px;
  height: 40px;
  line-height: 40px;
  background-color: #fff;
}
.tab-control .tab-control-item {
  flex: 1;
}
.tab-control .tab-control-item span {
  padding: 5px;
}
.active {
  color: indianred;
}
.active span {
  border-bottom: 3px solid indianred;
}
</style>