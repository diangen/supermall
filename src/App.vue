<template>
  <div id="app">
    <router-view></router-view>
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
