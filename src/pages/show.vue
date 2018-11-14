<template>
  <div style="height:100%">
    <app-home-heder></app-home-heder>
    <div class="app-home-swiper" id="show_wrap">

      <swiper v-if="billboards.length" :options="swiperOption">
        <!-- slides -->
        <swiper-slide v-for="(billboard,i) in billboards" :key="i" class="swiper_item">

          <span :class="(name==billboard.text?'checkcolor':''||(id==0&&billboard.text=='全部'?'checkcolor':'')) " @click="kindsGet(billboard.caid,billboard.text)">{{billboard.text}}</span>

        </swiper-slide>
        <!-- Optional controls -->

      </swiper>
    </div>

    <div ref="root" class="app-films-list">
      <div class="child_scroll">
        <div class="transion"></div>
        <app-show-item v-for="(item,i) in showItemList" :key="i" :info="item">

        </app-show-item>
      </div>
    </div>

    <app-home-footer @click.native="flushCom"></app-home-footer>

  </div>
</template>
<script>
import qs from "qs";
import AppHomeFooter from "../components/indexComponent/AppHomeFooter";
import AppHomeHeder from "../components/indexComponent/APPHomeHeder";
import AppShowItem from "../components/indexComponent/kindshow/showitem";

import BScroll from "better-scroll";
export default {
  props: ["id"],
  async created() {
    this.name = this.$route.query.name;
    let result = await this.$http(
      {
        url: "/jucheng/Show/getShowList",
        method: "POST",
        data: qs.stringify({
          category: this.id,
          city_id: -1,
          page: 1
        })
      },
      true
    );

    this.showItemList = result.list;
  },
  methods: {
    flushCom() {
      this.$router.go(0);
    },

    async kindsGet(caid, text) {
      this.$router.push({
        name: "show",
        params: { id: caid },
        query: { name: text }
      });
      let result = await this.$http(
        {
          url: "/jucheng/Show/getShowList",
          method: "POST",
          data: qs.stringify({
            category: caid,
            city_id: -1,
            page: this.page
          })
        },
        true
      );

      this.showItemList = this.showItemList.concat(result.list);
      this.name = text;
    }
  },
  watch: {
    id: {
      immediate: true,
      handler() {
        this.page = 1;
        this.showItemList = [];
      }
    }
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.root, {
      probeType: 2,
      pullUpLoad: {
        //配置上拉加载
        threshold: 50 // 距离底部多少距离
      },
      click: true
    });
    this.scroll.on(
      "pullingUp",
      function() {
        this.page++;
        this.kindsGet(this.id, this.$route.query.name);

        this.scroll.finishPullUp(); // 解决拉动刷新
        this.scroll.refresh();
      }.bind(this)
    );
  },
  data() {
    return {
      isDiplay: false,
      page: 1,
      name: "",
      showItemList: [],
      swiperOption: {
        slidesPerView: 6
      },
      billboards: [
        { text: "全部", caid: 0 },
        { text: "演唱会", caid: 35 },
        { text: "音乐会", caid: 36 },
        { text: "舞台剧", caid: 37 },
        { text: "儿童", caid: 38 },
        { text: "音乐剧", caid: 79 },
        { text: "舞蹈芭蕾", caid: 86 },
        { text: "戏曲综艺", caid: 91 },
        { text: "展览", caid: 99 }
      ]
    };
  },
  components: {
    AppHomeFooter,
    AppHomeHeder,
    AppShowItem
  }
};
</script>
<style lang="scss">
.child_scroll {
  height: auto;
}

#show_wrap {
  position: absolute;
  z-index: 10;
  left: 0;
  top: 1.29rem;
  height: 0.9rem !important;
  background: #fff;
  .swiper_item {
    width: 1.386667rem;
    height: 0.833333rem;
    text-align: center;
  }
}
.transion {
  margin-top: 0.833067rem;
  height: 0.333333rem;
  background: #f0f0f0;
}
.checkcolor {
  color: #ff7919;
}
.root {
  height: 100%;
}
</style>

