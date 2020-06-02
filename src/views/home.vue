<template>
  <div>
<!-- tab-container -->
    <mt-tab-container v-model="select" swipeable>
      <mt-tab-container-item id="t1">
        <mt-cell v-for="n in 10" title="tab-container 1"></mt-cell>
      </mt-tab-container-item>
      <mt-tab-container-item id="t2">
        <mt-cell v-for="n in 5" title="tab-container 2"></mt-cell>
      </mt-tab-container-item>
      <mt-tab-container-item id="t3">
        <mt-cell v-for="n in 7" title="tab-container 3"></mt-cell>
      </mt-tab-container-item>
      <mt-tab-container-item id="t4">
        <mt-cell v-for="n in 7" title="tab-container 4"></mt-cell>
      </mt-tab-container-item>
      <mt-tab-container-item id="t5">
        <mt-cell v-for="n in 7" title="tab-container 5"></mt-cell>
      </mt-tab-container-item>
    </mt-tab-container>
<!-- 底部tabbar -->
    <mt-tabbar v-model="select" fixed>
      <mt-tab-item id="t1">
        <div>
          <i class="iconfont icon-shouye"></i>
        </div>首页
      </mt-tab-item>
      <mt-tab-item id="t2">
        <div>
          <i class="iconfont icon-fenlei"></i>
        </div>分类
      </mt-tab-item>
      <mt-tab-item id="t3">
        <div>
          <i class="iconfont icon-huoyan1"></i>
        </div>团拼
      </mt-tab-item>
      <mt-tab-item id="t4">
        <div>
          <i class="iconfont icon-gouwuche"></i>
        </div>购物车
      </mt-tab-item>
      <mt-tab-item id="t5">
        <div>
          <i class="iconfont icon-wode"></i>
        </div>我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>
<script>
/* 引入首页tabbar5个iconfont的CSS文件 */
import "../assets/style/iconfont.css";
export default {
  data() {
    return {
      select: "t1",
    };
  }
};
</script>
<style>
.iconfont {
  font-size: 1.5rem;
  color: #111;
}
</style>



