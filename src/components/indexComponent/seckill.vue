
<template>
  <div class="app-home-swiper" id="maiosha" v-if="billboards">

    <div class="title ">限时秒杀</div>
    <swiper ref="mySwiper2">

      <swiper-slide v-for="billboard in billboards" :key="billboard.ticket_id">

        <img :src="currentUrl+billboard.pic">
        <div class="skill_box">
          <span class="skill_tille">{{billboard.schedular_name}}</span>

          <div class="skill_container">
            <span class="price_pnext">￥{{billboard.seckill_ticket_price}}</span>
            <span class="price_pre">{{billboard.ticket_price}}</span>
            <span class="btn" :class="(billboard.method==2)?'skill_active':''">{{(billboard.method==2) ? "即将开抢" :"下手慢咯"}}</span>
          </div>
        </div>
      </swiper-slide>
      <!-- Optional controls -->

    </swiper>

  </div>

</template>

<script>
export default {
  data() {
    return {
      currentUrl: "http://image.juooo.com/",
      billboards: []
    };
  },
  beforeCreate() {
    this.$http({
      url: "/jucheng/index/getNationalSeckill",
      react: false
    }).then(result => {
      this.billboards = result.secKillInfo;
    });
  }
};
</script>

<style lang="scss">
.app-home-swiper {
  height: 4.625067rem !important;
}
#maiosha {
  .title {
    font-size: 0.568rem;
    color: #1a1a1a;
    margin-left: 0.43333rem;
    margin-bottom: 0.433333rem;
    position: relative;
    font-weight: bold;
    height: 0.626667rem;
  }
  img {
    float: left;
    width: 2.4rem;
    height: 3.2rem;
    margin-left: 0.53333rem;
    margin-right: 0.53333rem;
  }
  .skill_box {
    .skill_tille {
      font-size: 0.4rem;
      color: #1a1a1a;
      font-weight: bold;
      margin-left: 0.133333rem;
      text-overflow: ellipsis;
      height: 0.986667rem;
      overflow: hidden;
    }
    .skill_container {
      margin: 0.433333rem;

      .price_pnext {
        color: #ff7919;
        font-weight: bold;
        margin-right: 0.32rem;
      }
      .price_pre {
        font-size: 0.34467rem;
        color: #b2b2b2;
      }
      .btn {
        display: inline-block;
        width: 2.506667rem;
        height: 1.173333rem;
        color: #fff;
        font-size: 0.45733rem;
        line-height: 0.933333rem;
        text-align: center;
        border-radius: 0.21333rem;
        background: #ccc;
        margin-left: 1.633333rem;
      }
      .skill_active {
        background: #ff7919;
      }
    }
  }
}
</style>

