<template>
  <div class="app-citys-content">
    <mt-index-list>
      <mt-index-section v-for="(value, key) in cities" :key="key" :index="key">
        <mt-cell v-for="city in value.lists" :key="city.id" :title="city.name" @click.native="changeCity(city)"></mt-cell>
      </mt-index-section>
    </mt-index-list>

  </div>
</template>

<script>
import { mapState } from "vuex";
import { IndexList, IndexSection, Cell } from "mint-ui";
export default {
  components: {
    [IndexList.name]: IndexList,
    [IndexSection.name]: IndexSection,
    [Cell.name]: Cell
  },
  computed: {
    cities() {
      return this.$store.state.chunks.cities;
    }
  }
};
</script>
<style lang="scss" >
</style>




