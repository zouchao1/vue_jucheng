<template>
  <div class="home_box">
    <header class="home_heder">
      <div class="header_left">

        <i class="iconfont icon-icon_wode icon-location"></i>
        <p @click="goCity">{{chunks.city.cityName}}</p>

      </div>
      <div class="serch">
        <i class=""></i>
        <input type="text" class="serch_text" placeholder="搜索演出、艺人、或场馆">
      </div>

    </header>

  </div>
</template>
<script>
import { mapState } from "vuex";
import { CHANGE_CITY } from "../../store/chunks/mutation-types";
export default {
  data() {
    return {};
  },
  methods: {
    goCity() {
      this.$router.push({ name: "city" });
    }
  },
  computed: mapState(["chunks"]),
  beforeCreate() {
    if (localStorage.city) {
      this.$store.commit({
        type: "chunks/" + CHANGE_CITY,
        cities: JSON.parse(localStorage.cities),
        city: JSON.parse(localStorage.city)
      });
    } else {
      this.$store.dispatch({ type: "chunks/getCurrentPosition" });
    }
  }
};
</script>
<style lang="scss">
.home_box {
  box-sizing: border-box;
  height: 1.333333rem;
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  .home_heder {
    i {
      font-size: 0.52667rem;
    }
    display: flex;
    height: 1.333333rem;
    background-color: #fff;
    justify-content: space-between;
    align-content: center;
    width: 100%;
    .header_left {
      width: 1.413333rem;
      height: 0.56rem;
      margin: 0 0.48rem;
      font-size: 0.42667rem;
      color: #222;
      display: flex;
      justify-content: space-between;
      align-content: center;
      line-height: 1.2rem;
    }
    .serch {
      flex: 1;
      width: 6.186667rem;
      height: 0.746667rem;
      border-radius: 1.33333rem;

      .serch_text {
        height: 100%;
        border: none;
        border-radius: 1.33333rem;
        width: 85%;
        margin: 0.266667rem;
        padding-left: 0.533333rem;
        background: #f0f0f0;
      }
    }
    .header_right {
      width: 0.64rem;
      height: 0.653333rem;
      line-height: 1.2rem;
      margin-right: 0.266667rem;
    }
  }
}
</style>

