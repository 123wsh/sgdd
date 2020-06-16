<template>
  <div class="wode">
    <div class="logindiv" v-show="!islogin">
      <mt-field label="用户名" placeholder="请输入用户名" v-model="username" :attr="{maxlength:10}"></mt-field>
      <br />
      <mt-field
        label="密码"
        placeholder="请输入密码"
        type="password"
        v-model="password"
        :attr="{maxlength:10,autocomplete:'off'}"
      ></mt-field>
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
    <!-- 底部tabbar -->
  </div>
</template>
<script>
/* 引入首页tabbar5个iconfont的CSS文件 */
import "../assets/style/iconfont.css";
export default {
  data() {
    return {
      username: sessionStorage.getItem("username"),
      password: "",
      islogin: sessionStorage.getItem("islogin")
    };
  },
  methods: {
    login() {
      if (!this.username == "") {
        this.axios
          .post("/login", "uname=" + this.username + "&upwd=" + this.password)
          .then(res => {
            console.log(res);
            if (res.data.code == 1) {
              sessionStorage.setItem("islogin", true);
              let username = res.data.result[0].uname;
              sessionStorage.setItem("username", username);
              this.$toast({message:"登录成功",duration:1500})
              this.$router.push("/");
            } else {
              this.$toast({
                message: "用户名或密码错误",
                duration: 1500
              }),
                (this.password = "");
            }
          })
          .catch(err => {
            console.error(err);
          });
      }
    },
    logout() {
      this.$messagebox
        .confirm("确定要退出登录？", "退出登录提示", {
          lockScroll: true,
          confirmButtonText: "退出登录"
        })
        .then(action => {
          sessionStorage.removeItem("username");
          sessionStorage.removeItem("islogin");
          this.password = "";
          this.$toast({message:"注销成功",duration:1500})
          this.$router.push("/");
        })
        .catch(err => {});
    }
  }
};
</script>
<style>
@import "home.css";
</style>



