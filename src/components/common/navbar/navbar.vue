<template>
  <div class="nav-bar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "navbar",
  data() {
    return {};
  },
};
</script>

<style  scoped>
.nav-bar {
  line-height: 44px;
  height: 44px;
  display: flex;
  text-align: center;
}
.nav-ba .left {
  width: 60px;
  background-color: red;
}
.left .right {
  width: 60px;
}
.center {
  flex: 1;
  background-color: hotpink;
}
</style>