<template>
  <div class="home_footer">

    <router-link :to="item.path" class="item home " active-class="active" v-for="item in navs" :key="item.id">
      <p :class=" item.cls  " ref="foucss"></p>
      <p class="txt ">{{item.title}}</p>
    </router-link>

  </div>
</template>
<script>
export default {
  data() {
    return {
      isShow: 0,
      navs: [
        {
          id: 1,
          title: "首页",
          path: "/home",
          cls: "icon-box1"
        },
        {
          id: 2,
          title: "演出库",
          path: "/show/0",
          cls: "icon-box2"
        },
        {
          id: 3,
          title: "我的",
          path: "/mine",
          cls: "icon-box3"
        }
      ]
    };
  },
  mounted() {
    if (this.$route.name == "show") {
      this.$refs.foucss[1].style.backgroundPosition = " 0.1rem -0.6667rem";
    }
  }
};
</script>
<style lang="scss" scoped>
.home_footer {
  height: 1.333333rem;
  border-top: 1px solid #e6e6e6;
  z-index: 99;
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  justify-content: center;
  align-items: Center;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;

  background-color: #fff;
  .home {
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: space-around;
    padding-left: 1.266667rem;
  }
  .active p:first-child {
    background-position: 0.1rem -0.6667rem;
  }
  .disshow {
    background-position: 0.1rem -0.6667rem;
  }
  .icon-box1 {
    background-image: url(http://image.juooo.com/group1/M00/01/81/rAoKmVuQecmATGXZAAAUKcf_gA0402.png);
    background-repeat: no-repeat;
    background-position: 0.1rem 0.03333rem;
  }
  .icon-box2 {
    background-image: url(http://image.juooo.com/group1/M00/02/2A/rAoKNVuQedOARw84AAAJ8MlQ_ac653.png);
    background-repeat: no-repeat;
    background-position: 0.11rem 0.03333rem;
  }
  .icon-box3 {
    background-image: url(http://image.juooo.com/group1/M00/01/81/rAoKmVuQedqADpfXAAAQDvkHt5o350.png);
    background-repeat: no-repeat;
    background-position: 0.1rem 0.03333rem;
  }
}
</style>
