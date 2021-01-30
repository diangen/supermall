<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <main-taber></main-taber>
  </div>
</template>

<script>
import mainTaber from "components/content/mainTabTaber/mainTaber";

export default {
  name: "App",
  components: {
    mainTaber,
  },
};
</script>

<style>
@import "./assets/css/base.css";
</style>
