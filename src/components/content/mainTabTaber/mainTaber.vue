<template>
    <tab-bar>
      <tab-bar-item path="/home" activeColor="hotpink">
        <img slot="item-icon" src="~assets/img/font/home.svg" alt="" />
        <img
          slot="item-icon-active"
          src="~assets/img/font/home_active.svg"
          alt=""
        />
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/profile" activeColor="hotpink">
        <img slot="item-icon" src="~assets/img/font/profile.svg" alt="" />
        <img
          slot="item-icon-active"
          src="~assets/img/font/profile_active.svg"
          alt=""
        />
        <div slot="item-text">发现</div>
      </tab-bar-item>
      <tab-bar-item path="/cart" activeColor="hotpink">
        <img slot="item-icon" src="~assets/img/font/shop.svg" alt="" />
        <img
          slot="item-icon-active"
          src="~assets/img/font/shop_active.svg"
          alt=""
        />
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/category" activeColor="hotpink">
        <img slot="item-icon" src="~assets/img/font/user.svg" alt="" />
        <img
          slot="item-icon-active"
          src="~assets/img/font/user_active.svg"
          alt=""
        />
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
</template>

<script>
import TabBar from "components/common/tabbar/TabBar";
import TabBarItem from "components/common/tabbar/TabBarItem";

export default {
  name: "MainTabBar",
  components: {
    TabBar,
    TabBarItem,
  },
};
</script>

<style>

</style>
