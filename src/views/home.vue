<template>
  <div class="wode">
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
        <div class="logindiv" v-show="!islogin">
          <mt-field label="用户名" placeholder="请输入用户名" v-model="username"></mt-field>
          <br />
          <mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>
          <br />
          <mt-button type="primary" size="large" @click="login">登录</mt-button>
          <br />
          <mt-button type="primary" size="large">没有账号？立即注册</mt-button>
        </div>
        <div v-show="islogin">
          <mt-cell :title="'亲爱的：'+username" is-link>
            <mt-button size="small" @click="logout">退出登录</mt-button>
          </mt-cell>
        </div>
        <br />
        <div class="huiyuan">
          <div class="huiyuan1">
            <p>升级会员</p>
            <p>坐拥专属特权，更省钱</p>
          </div>
          <div class="huiyuan2">立即升级</div>
        </div>
        <br />
        <div class="bangdingshouji">
          <span>找不到订单或优惠券？绑定手机号试试</span>
          <span>绑定</span>
        </div>
        <br />
        <div class="dingdan">
          <div class="dingdan1">
            <span>商城订单</span>
            <span>查看全部订单></span>
          </div>
          <div class="dingdan2">
            <span>
              <img src="../assets/image/1.png" />
              <p>待付款</p>
            </span>
            <span>
              <img src="../assets/image/2.png" />
              <p>待发货</p>
            </span>
            <span>
              <img src="../assets/image/3.png" />
              <p>待收货</p>
            </span>
            <span>
              <img src="../assets/image/4.png" />
              <p>待自提</p>
            </span>
            <span>
              <img src="../assets/image/5.png" />
              <p>退款记录</p>
            </span>
          </div>
        </div>
        <br />
        <div class="wodeguanli">
          <mt-cell title="团拼订单(新)" to is-link class="wodeguanli1"></mt-cell>
          <mt-cell title="地址管理" to is-link></mt-cell>
          <mt-cell title="我的砍价" to is-link></mt-cell>
          <mt-cell title="我的赠品" to is-link></mt-cell>
          <mt-cell title="我的优惠券" to is-link value="暂无可用" class="wodeguanli5"></mt-cell>
        </div>
        <br />
        <mt-cell title="客服电话" to is-link value="18030727285" class="wodeguanli6"></mt-cell>
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
      username: this.$store.state.username,
      password: "",
      islogin:this.$store.state.islogin
      
    };
  },
  methods: {
    login() {
      if (!this.username == "") {
        this.axios
          .post("/login", "uname=" + this.username + "&upwd=" + this.password)
          .then(res => {
            console.log(res);
            if(res.data.code==1){
            sessionStorage.setItem("islogin",true)
            sessionStorage.setItem("username",res.data.result[0].uname)
            console.log(this.$store.state.islogin)
          }
          })
          .catch(err => {
            console.error(err);
          });
      }
    },
    logout(){
      sessionStorage.removeItem("username")
      sessionStorage.removeItem("islogin")
      this.password=''
      console.log(this.islogin)
            console.log(this.$store.state.islogin)

    }
  }
};
</script>
<style>
@import "home.css";
</style>



