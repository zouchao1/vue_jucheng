<template>

  <ul class="hot">
    <div class="title ">热门演出</div>

    <router-link tag="li" v-for="(item,i) in billboards " :key="i" :to="{name: 'detail', params: {id: item}}">
      <img :src="item.pic">
      <div class="poster-ctn">
        <p class="poster-name">{{item.show_name}}</p>
        <p class="poster-time">{{item.display_show_time.substring(0,10)}}
          <span class="poster-address">&nbsp;&nbsp;&nbsp;&nbsp;{{item.city_name}}</span>
        </p>
      </div>
    </router-link>
  </ul>
</template>
<script>
export default {
  data() {
    return {
      billboards: []
    };
  },
  beforeCreate() {
    this.$http({
      url: "/jucheng/index/hotsShowList",
      react: false
    }).then(result => {
      this.billboards = result;
    });
  }
};
</script>

<style lang="scss" scoped>
.hot {
  .title {
    font-size: 0.568rem;
    color: #1a1a1a;
    margin-left: 0.43333rem;
    margin-bottom: 0.433333rem;
    position: relative;
    font-weight: bold;
    height: 0.626667rem;
  }
  list-style: none;
  margin: 0.133333rem;
  margin-top: 0.766667rem;
  li {
    float: left;
    width: 3rem;
    height: 5.506667rem;
    margin: 0.133333rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-content: center;
    img {
      width: 3rem;
      height: 3.906667rem;
    }
    .poster-ctn {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-content: center;
      .poster-name {
        color: #1a1a1a;
        padding: 0 0.17067rem;
        font-size: 0.39733rem;
        font-weight: bold;
        overflow: hidden;
        word-break: break-all;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .poster-time {
        display: flex;
        justify-content: space-between;
        align-content: center;
        font-size: 0.312rem;
        color: #b3b3b3;

        overflow: hidden;
        word-break: break-all;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }
}
</style>
