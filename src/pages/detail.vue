<template>
  <div class="detail_container">
    <header class="navbar detail-header">
      <div class="navbar-inner navbar-on-center">
        <div class="left">
          <a href="javascript:history.go(-1);" class="link">

            < </a>
        </div>
        <div class="poster-bg-shadow">
        </div>
        <div class="poster-img">
          <div class="img-bg">
            <span class="logo_i"></span>
          </div>
          <img :src="(detailUrl+temp.pic)" v-if="temp.pic.indexOf('http')==-1" />
          <img :src="(temp.pic)" v-else/>
        </div>
        <a class="round-num js-tour-num" style="" href="https://m.juooo.com/tour/tourshowinfo?sid=29987">
          <span>{{anum}}</span>场巡演</a>
        <div class="poster-fg"></div>

        <article class="text-desc">
          <h3 class="title">{{temp.schedular_name}}</h3>
          <div class="row">
            时间：
            <span class="time">{{temp.show_time?temp.show_time:temp.display_show_time}}</span>
          </div>
          <a class="row clearfix venue" href="javascript:;">
            <span class="fl">场馆：</span>
            <span class="place fl js-venue">{{temp.v_name?id.v_name:temp.venue_name}}</span>
            <i class="icon icon-map-marker fl venue-address"></i>
          </a>

          <div class="row price">
            ￥
            <span class="num" v-if="temp.min_price">
              {{temp.min_price}}-{{temp.max_price}} </span>
            <span class="num" v-else>
              {{temp.show_price}} </span>
          </div>

          <div class="support" href="javascript:;">
            <div class="left">
              支持：
              <span class="sup-item">橙PLUS卡免邮</span>
              <span class="sup-item">电子票</span>
              <span class="sup-item">橙PLUS卡双倍积分</span>
            </div>
          </div>

          <div class="vipcard">
            <a class="row js-vipcard clearfix">
              <div class="left clearfix fl">
                <div class="fl txt3">欢聚橙卡：
                  <span class="txt1 fl">橙PLUS会员卡</span>
                </div>

              </div>

            </a>
          </div>

        </article>
      </div>
    </header>
    <div class="dt-action">
      <div id="juo-meiqia" class="service-btn">
        <span class="icon"><img src="../assets/kefu.png" alt=""></span>
        <span class="txt">客服</span>
        <span class="line"></span>
      </div>

      <div class="dt-action-btn buy-now">立即购票</div>
      <div class="dt-action-btn seat-online js-seat-online">在线选座</div>
    </div>
  </div>
</template>
<script>
import qs from "qs";
export default {
  props: ["id"],
  data() {
    return {
      detailUrl: "http://image.juooo.com",
      anum: "",
      temp: {}
    };
  },
  beforeRouteLeave(to, from, next) {
    // 在渲染该组件的对应路由被 confirm 前调用
    // 不！能！获取组件实例 `this`
    // 因为当守卫执行前，组件实例还没被创建
    console.log("remove");
    localStorage.removeItem("id");
    next();
  },
  async created() {
    if (!localStorage.id) {
      localStorage.setItem("id", JSON.stringify(this.id));
    }
    var objId = localStorage.getItem("id");
    this.temp = JSON.parse(objId);

    let result = await this.$http({
      url: "/jucheng/Ticket/getTourNum",
      method: "POST",
      data: qs.stringify({
        sid: this.id.show_id
      })
    });
    this.anum = result.num;
  }
};
</script>
<style lang="scss">
.detail_container {
  .text-desc {
    .sup-item,
    .txt1 {
      color: #ff7919;
      border: 1px solid #ff7919;
      margin-left: 0.2773333333rem;
      font-size: 0.29266666667rem;
    }
    .support {
      margin-top: 0.566667rem;
    }
    .vipcard {
      margin-top: 0.266667rem;
    }
    padding: 0 0.4266666667rem 0 0.64rem;
    background: #fff;
    position: relative;
    margin-top: 0.533333rem;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-content: center;
    .title {
      color: #212121;
      font-size: 0.5rem;
      font-weight: bold;
    }
    .row {
      color: #666;
      margin-top: 0.533333rem;
    }
    .price {
      font-size: 0.568rem;
      color: #ff7919;
    }
  }
  .js-tour-num {
    position: absolute;
    right: 0.4266666667rem;
    top: 3.666667rem;
    border: 1px solid #dadada;

    border-radius: 0.1706666667rem;
    padding: 0.1133333333rem;
    color: #dadada;
    height: 0.786667rem;
    width: 2.34rem;
    text-align: center;
  }
  .poster-img {
    img {
      height: 4.96rem;
      width: 3.733333rem;
      margin-left: 2.966667rem;
    }
  }
  .poster-fg {
    position: absolute;
    top: 5.333333rem;
    left: 0;
    z-index: -1;
    border-top: 1px solid #ccc;
    -webkit-border-radius: 50%;
    border-radius: 50%;
    width: 100%;
    height: 2.56rem;
    background: #fff;
  }
  .left {
    a {
      text-decoration: none;
      font-size: 0.8533333333rem;
      position: absolute;
      top: 0;
      left: 0;
      color: white;
      height: 0.533333rem;
      z-index: 99;
    }
  }
  .poster-bg-shadow {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 6.933333rem;
    overflow: hidden;
    z-index: -1;
    background-color: #989898;
  }
  .dt-action {
    display: flex;
    justify-content: center;
    position: fixed;
    bottom: 0;
    z-index: 0;
    border-top: 1px solid #e7e7e7;
    width: 100%;
    height: 1.32rem;
    text-align: center;
    .service-btn {
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      align-content: center;

      width: 3.733333rem;
      height: 1.32rem;
      position: relative;
      .line {
        display: block;
        position: absolute;
        top: 0.1333333333rem;
        right: 0;
        width: 0;
        height: 0.78rem;
        border-right: 1px solid #d8d8d8;
      }
      .icon {
        width: 0.453333rem;
        height: 1.12rem;
        display: inline-block;
        text-align: center;
        color: #666;
        margin-left: 0.533333rem;
        img {
          height: 0.453333rem;
          width: 0.506667rem;
        }
      }
      .txt {
        color: #666;
        font-size: 0.3266666667rem;
      }
    }
    .buy-now {
      height: 100%;
      line-height: 1.32rem;
      width: 9.133333rem;
      text-align: center;
      color: #666;
      background: #fff;
      color: #666;
      font-size: 0.5rem;
    }
  }
  .js-seat-online {
    color: #fff;
    background: #ff7919;
    font-size: 0.5rem;
    line-height: 1.166667rem;
  }
}
</style>

