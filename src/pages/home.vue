<template>
  <div>
    <app-home-heder></app-home-heder>
    <app-home-banner></app-home-banner>
    <div class="category-wrap ">
      <router-link :to="{name:'show',params:{id: item.caid},query: {name:item.text}}" class="cate-link " v-for=" (item,i) in categorywraplist " :key="i">
        <div class="img-box ">
          <img :src="item.imgUrl"></div>
        <p class="classify ">{{item.text}}</p>
      </router-link>

    </div>
    <div class="module-wrap ">
      <a class="item privilege" href="https://m.juooo.com/calendar/index" v-for="(item,index) in privilege" :key="index"><img :src="item.imgUrl">
        <p class="item-txt">{{item.text}}</p>
      </a>
    </div>
    <app-seckill></app-seckill>
    <TourWrap></TourWrap>
    <hot-show></hot-show>

    <div class="all-show clear">
      <router-link to="/show/0">查看全部演出</router-link>
      <i class="icon icon-menu-right "></i>
    </div>
    <app-home-footer></app-home-footer>
  </div>
</template>
<script>
// import AppHomeBanner from "@components/indexComponent/index";
// import AppHomeHeder from "@components/indexComponent/APPHomeHeder";
// import AppHomeFooter from "@components/indexComponent/AppHomeFooter";
// import AppSeckill from "@components/indexComponent/seckill";
// import TourWrap from "@components/indexComponent/TourWrap";
// import HotShow from "@components/indexComponent/hotshow";
import AppHomeBanner from "../components/indexComponent/index";
import AppHomeHeder from "../components/indexComponent/APPHomeHeder";
import AppHomeFooter from "../components/indexComponent/AppHomeFooter";
import AppSeckill from "../components/indexComponent/seckill";
import TourWrap from "../components/indexComponent/TourWrap";
import HotShow from "../components/indexComponent/hotshow";
export default {
  data() {
    return {
      categorywraplist: [
        {
          imgUrl:
            "http://image.juooo.com/group1/M00/01/AF/rAoKmVvo2QuARfUgAAAZVrHX6Vg901.png",
          text: "演唱会",
          caid: 35
        },
        {
          imgUrl:
            "http://image.juooo.com/group1/M00/02/59/rAoKNVvo2RWAZ4RrAAAqgMt_hEM195.png",
          text: "音乐会",
          caid: 36
        },
        {
          imgUrl:
            "http://image.juooo.com/group1/M00/01/AF/rAoKmVvo2R2AfAI7AAAqv8R6CX0470.png",
          text: "舞台剧",
          caid: 37
        },
        {
          imgUrl:
            "http://image.juooo.com/group1/M00/02/59/rAoKNVvo2SmAOP2NAAAkgcvLRNA615.png",
          text: "音乐剧",
          caid: 79
        },
        {
          imgUrl:
            "http://image.juooo.com/group1/M00/01/AF/rAoKmVvo2TOAe_AqAAAmm6GZ4Xo145.png",
          text: "儿童",
          caid: 38
        }
      ],
      privilege: [
        {
          imgUrl:
            "http://image.juooo.com/group1/M00/02/47/rAoKNVvIIbGAD-K0AAAOH9v_NJM654.png",
          text: "演出日历"
        },
        {
          imgUrl:
            "http://image.juooo.com/group1/M00/01/9D/rAoKmVvIIb2ALd7KAAAFL7b1wtg147.png",
          text: "聚特惠"
        },
        {
          imgUrl:
            "http://image.juooo.com/group1/M00/02/47/rAoKNVvIIcWAFU2WAAAJASjVCNQ181.png",
          text: "学生专区"
        },
        {
          imgUrl:
            "http://image.juooo.com/group1/M00/01/9D/rAoKmVvIIc2AR3T7AAAGkekOAEY845.png",
          text: "欢聚橙卡"
        }
      ]
    };
  },

  components: {
    AppHomeBanner,
    AppHomeHeder,
    AppHomeFooter,
    AppSeckill,
    TourWrap,
    HotShow
  }
};
</script>
<style lang="scss">
.category-wrap {
  margin: 0 auto;
  padding: 0.176rem 0;
  display: flex;
  justify-content: space-around;
  align-content: center;
  height: 2.626667rem;
  border-radius: 0.21333rem;

  .cate-link {
    display: block;
    height: 1.906667rem;
    align-content: center;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-decoration: none;
    color: inherit;
    .img-box {
      img {
        width: 1.4rem;
        height: 1.4rem;
      }
    }
  }
}
.module-wrap {
  padding: 0.25333rem 0.53333rem;
  display: flex;
  justify-content: start;
  height: 2.4rem;
  .item {
    margin-right: 0.32rem;
    color: #fff;
    position: relative;
    z-index: 0;
    height: 1.333333rem;
    .item-txt {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      text-align: center;
      line-height: 1.33333rem;
      font-size: 0.39733rem;
      color: #fff;
      z-index: 99;
    }
  }
}
.all-show {
  width: 5.12rem;
  height: 1.28rem;
  text-align: center;
  line-height: 1.28rem;
  font-size: 0.512rem;
  margin: 0.64rem auto 2.56rem;
  background: #fff;
  border-radius: 0.17067rem;
  border: 1px solid #e6e6e6;
}
.clear {
  clear: both;
  width: 5.12rem;
  height: 1.08rem;
  text-align: center;
  line-height: 1.28rem;
  font-size: 0.512rem;
  margin: 0.64rem auto 2.56rem;
  background: #fff;
  border-radius: 0.17067rem;
  border: 1px solid #e6e6e6;
}
</style>

