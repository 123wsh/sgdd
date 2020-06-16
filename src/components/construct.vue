<template>
  <div>
    <!-- 底部tabbar -->
    <mt-tabbar v-model="select" fixed >
      <mt-tab-item id>
        <div>
          <i class="iconfont icon-shouye"></i>
        </div>首页
      </mt-tab-item>
      <mt-tab-item id="fenlei">
        <div>
          <i class="iconfont icon-fenlei"></i>
        </div>分类
      </mt-tab-item>
      <mt-tab-item id="tuan">
        <div>
          <i class="iconfont icon-huoyan1"></i>
        </div>团拼
      </mt-tab-item>
      <mt-tab-item id="cart">
        <div>
          <i class="iconfont icon-gouwuche"></i>
        </div>购物车
      </mt-tab-item>
      <mt-tab-item id="home">
        <div>
          <i class="iconfont icon-wode"></i>
        </div>我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>
<script>
export default {
  data() {
    return {
      select: "",
    };
  },
  watch: {
    select() {
      this.$router.push("/" + this.select);
    },
    $route(){
      this.select=this.$route.path.slice(1)
    }
  },
  mounted() {}
};
</script>
<style>
.wode {
  background-color: #eee;
  height: 1000px;
}
/* tabbar样式 */
.iconfont {
  font-size: 1.5rem;
  color: #111;
}
.mint-tabbar > .mint-tab-item.is-selected {
  color: #111 !important;
}
.mint-tab-item-label {
  line-height: 1.2;
}
</style>
