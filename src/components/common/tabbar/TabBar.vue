<template>
  <div id="tab-babber">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TbaBar",
  data() {
    return {};
  },
};
</script>

<style  scoped>
#tab-babber {
  display: flex;
  background-color: #f2f2f2;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  box-shadow: 0px -1px 0.2px rgba(100, 100, 100, 0.8);
}

</style>
