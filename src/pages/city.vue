<template>
  <section class="app-citys">
    <div class="city_header">
      <a class="changecity" href="javascript:history.go(-1);">

        < </a>
          <span>切换城市</span>
    </div>
    <app-content-block title="当前所在城市">
      <app-content-item class="active">{{chunks.city.cityName}}</app-content-item>
    </app-content-block>

    <app-content-block title="热门城市">
      <app-content-item v-for="city in hotCitys" :key="city.id" @click.native="changeCity(city)">{{city.name}}</app-content-item>
    </app-content-block>

    <app-citys-content></app-citys-content>
  </section>
</template>

<script>
import AppCitysContent from "../components/city/AppCitysContent";
import AppContentBlock from "../components/city/AppContentBlock";
import AppContentItem from "../components/city/AppContentItem";
import { mapState } from "vuex";
import { CHANGE_CITY } from "../store/chunks/mutation-types";
export default {
  name: "app-citys",
  beforeCreate() {
    if (localStorage.city) {
      this.$store.commit({
        type: "chunks/" + CHANGE_CITY,
        cities: JSON.parse(localStorage.cities),
        city: JSON.parse(localStorage.city)
      });
    }
  },
  data() {
    return {
      activeCity: {
        id: 12,
        name: "北京"
      },
      hotCitys: [
        { id: 12, name: "北京" },
        { id: 11, name: "上海" },
        { id: 13, name: "广州" },
        { id: 10, name: "深圳" }
      ]
    };
  },
  components: {
    AppCitysContent,
    AppContentBlock,
    AppContentItem
  },
  computed: mapState(["chunks"]),
  methods: {
    changeCity({ id: cityId, name: cityName }) {
      this.$store.commit({
        type: "chunks/" + CHANGE_CITY,
        city: {
          cityId,
          cityName
        }
      });
    }
  }
};
</script>

<style lang="scss" >
.app-citys {
  .city_header {
    position: absolute;
    top: 0;
    height: 1.16rem;
    display: flex;
    background: white;
    justify-content: flex-start;
    border-bottom: 0.013333rem solid #e0e0e0;
    .changecity {
      height: 100%;
      line-height: 0.933333rem;
      font-size: 0.6826666667rem;
      color: #e0e0e0;
      height: 1.16rem;

      width: 6rem;
    }
    span {
      line-height: 0.966667rem;
    }
  }
}
</style>

