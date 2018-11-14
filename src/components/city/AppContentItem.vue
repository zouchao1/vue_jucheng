<template>

    <div class="app-content-item">
        <slot></slot>
    </div>

</template>

<script>
export default {};
</script>

<style lang="scss">
.app-content-item {
  width: 2.8rem;
  height: 0.8rem;
  font-size: 0.426667rem;
  line-height: 0.71212rem;
  text-align: center;
  display: inline-block;
  cursor: pointer;
  color: #212121;
  border-bottom: #ebebeb 1px solid;
  background: #f5f5f5;
  margin: 0.133333rem;
  margin-left: 0.37rem;
  &.active {
    color: #e2941a;
  }
}
</style>
