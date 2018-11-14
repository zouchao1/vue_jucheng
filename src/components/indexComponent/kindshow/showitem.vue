<template>
    <div class="show_box">
        <router-link class="show-items" :to="{name:'detail',params:{id:info}}">

            <div class="img-box">
                <img :src="Url+info.pic" alt="info.schedular_name">

            </div>
            <div class="detail-box">
                <p class="title">{{info.schedular_name}}</p>
                <p class="time">{{info.show_time}}</p>
                <p class="place">[
                    <span>{{info.c_name}}</span>] {{info.v_name}}</p>
                <p class="ft0 price">
                    <span class="fs24 mr8">¥</span>
                    <span class="fs32">{{info.min_price}}</span>
                    <span class="fs32 ml4 mr4">-</span>
                    <span class="fs32">{{info.max_price}}</span>
                </p>
            </div>

        </router-link>
    </div>
</template>
<script>
export default {
  props: ["info"],
  data() {
    return {
      Url: "http://image.juooo.com"
    };
  },
  methods: {
    remove() {
      console.log(1111111111);
      alert();
    }
  }
};
</script>

<style scoped lang="scss">
.show_box {
  height: 3.613333rem;
  a {
    display: flex;
    justify-content: space-between;
    align-content: center;
    width: 9.2rem;
    height: 3.613333rem;
    .img-box {
      width: 3.573333rem;
      height: 3.273333rem;
      margin: 0.333333rem;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .detail-box {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-content: center;
      height: 3.2rem;
      line-height: 0.493333rem;
      margin-top: 0.333333rem;
      p {
        margin-top: 0rem;
      }
      .title {
        font-size: 0.3273333333rem;
        color: #262626;
      }
      .time {
        font-size: 0.2693333333rem;
        color: #999999;
      }
      .place {
        font-size: 0.3093333333rem;
        color: #999999;
      }
      .fs32,
      .fs24 {
        color: #ff7919;
      }
    }
  }
}
</style>
