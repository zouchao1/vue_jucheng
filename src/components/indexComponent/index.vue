
<template>
  <div class="app-home-swiper">
    <swiper v-if="billboards.length" :options="swiperOption" ref="mySwiper">
      <!-- slides -->
      <swiper-slide v-for="(billboard) in billboards" :key="billboard.si_id">

        <img :src="srcpre+billboard.image_url">
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination " slot="pagination "></div>
    </swiper>
  </div>

</template>

<script>
import qs from "qs";
export default {
  data() {
    return {
      swiperOption: {
        pagination: {
          el: ".swiper-pagination"
        },
        loop: true,
        autoplay: true
      },
      billboards: [],
      srcpre: "http://image.juooo.com//"
    };
  },
  beforeCreate() {
    this.$http({
      url: "/jucheng/index/getNationalSildeList",
      method: "POST",
      data: qs.stringify({
        confType: "L",
        isSymbol: 1,
        limit: 6
      }),
      react: false
    }).then(result => {
      this.billboards = result;
    });
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  }
};
</script>

<style lang="scss">
.app-home-swiper {
  height: 4.133333rem !important;
  img {
    height: 4.12rem;
  }
}
</style>

