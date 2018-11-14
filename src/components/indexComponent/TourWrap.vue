
<template>
    <div class="app-home-swiper" id="wrap">
        <div class="title ">巡回演出</div>
        <swiper v-if="billboards.length" :options="swiperOption">
            <!-- slides -->
            <swiper-slide v-for="billboard in billboards" :key="billboard.show_id">

                <img :src="billboard.pic">
            </swiper-slide>
            <!-- Optional controls -->

        </swiper>
    </div>

</template>

<script>
export default {
  data() {
    return {
      swiperOption: {
        slidesPerView: 3
      },
      billboards: []
    };
  },
  beforeCreate() {
    this.$http({
      url: "/jucheng/Tour/ShowList",
      react: false
    }).then(result => {
      this.billboards = result;
    });
  }
};
</script>

<style lang="scss">
#wrap {
  .title {
    font-size: 0.568rem;
    color: #1a1a1a;
    margin-left: 0.43333rem;
    margin-top: 0.433333rem;
    position: relative;
    font-weight: bold;
    height: 0.626667rem;
  }
  img {
    width: 3rem;
    height: 3.906667rem;
    margin: 0.266667rem;
  }
}
</style>

