<template>
  <div class="header">
    <a href="javascript:history.go(-1);">
      < </a>

        <div class="login-wrap">
          <h1>欢迎来到聚橙网</h1>
          <form @submit.prevent="login">
            <input type="text" class="text" placeholder="请输入手机号" v-model="phone">

            <input type="password" class="password" placeholder="请输入密码" v-model="code">
            <span class="code" @click="sendCode"> {{isResend ? '重发('+resendTime+'s)': '发送验证码' }}
            </span>

            <input type="submit" value="登录" id="btn_login">
          </form>
        </div>
  </div>
</template>
<script>
import qs from "qs";
import axios from "axios";
export default {
  data() {
    return {
      isCodeShow: false,
      isResend: false,
      phone: "15181011983",
      resendTime: 60,
      code: ""
    };
  },
  methods: {
    async login() {
      axios
        .post("/mz/v4/api/login", {
          loginType: 1,
          password: this.code,
          username: this.phone
        })
        .then(res => {
          if (res.data.status === 0) {
            localStorage.setItem(
              "userInfo",
              JSON.stringify(res.data.data.data)
            );

            this.$router.replace({ name: "user-info" });
          }
        });
    },
    async sendCode() {
      if (!this.isResend) {
        // 发送验证码
        // ajax 如过成功
        axios
          .post("/mz/v4/api/code", {
            mobile: this.phone,
            type: "2"
          })
          .then(res => {
            if (res.data.status === 0) {
              // 验证码发送成功
              this.authCode();
            }
          });
        // let res = await this.$http({
        //   url: "/mzv4/api/code",
        //   method: "POST",
        //   data: qs.stringify({
        //     mobile: this.phone,
        //     type: "3"
        //   })
        // });
      }
    },
    authCode() {
      // 验证码处理

      this.isResend = true;
      this.timer = setInterval(() => {
        this.resendTime--;

        if (this.resendTime === 0) {
          clearInterval(this.timer);
          this.isResend = false;
          this.resendTime = 60;
        }
      }, 1000);
    }
  }
};
</script>
<style lang="scss" scoped>
.header {
  .login-wrap {
    position: relative;
    .code {
      color: #d9d9d9;
      height: 0.493333rem;
      width: 1.866667rem;
      font-size: 0.3733333333rem;
      position: absolute;
      left: 6.666667rem;
      top: 4.666667rem;
      cursor: pointer;
    }
  }

  width: 100%;
  height: 1.6rem;
  position: absolute;
  top: 0;
  left: 0;
  padding: 0.233333rem;
  a {
    text-decoration: none;
    font-style: normal;
    font-weight: normal;
    display: block;
    color: #b2b2b2;
    font-size: 0.6rem;
    cursor: pointer;
  }
  h1 {
    font-weight: normal;
    font-size: 0.64rem;
    height: 0.733333rem;
    margin: 0.633333rem 0.4rem 0.4rem;
  }
  .login-wrap {
    padding: 0.2333333333rem 1.1066666667rem 0;
    height: 8.76rem;
    input {
      height: 1.066667rem;
      margin: 0.366667rem;
      width: 6.786667rem;
      border: none;
      border-bottom: 1px solid #e6e6e6;
      font-size: 0.6rem;
      outline: none;
    }
    #btn_login {
      margin: 0.566667rem auto;
      width: 7.8rem;
      height: 1.2rem;
      line-height: 1.2rem;
      border-radius: 1.2rem;
      font-size: 0.4533333333rem;
      color: #fff;
      text-align: center;
      letter-spacing: 0.6em;
      background: rgba(255, 215, 140, 0.8);
      background-image: linear-gradient(
        135deg,
        #ffd88c 2.6666666667rem,
        #ffbc8c 6.6666666667rem
      );
    }
  }
}
</style>



