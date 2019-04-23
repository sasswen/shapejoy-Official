<template>
  <div id="product" v-lazy-container="{ selector: 'img' }">
    <main v-if="!isPhone">
      <img
        class="pc-product-header"
        :data-src="require('../assets/img/product/pc/pc-product-head.jpg')"
        alt="pc产品介绍头图"
      >
      <div class="pc-wrapper">
        <img :data-src="require('../assets/img/product/pc/pc-aiTech.jpg')" alt="产品介绍">
        <img :data-src="require('../assets/img/product/pc/pc-waitHome.jpg')" alt="产品介绍">
        <img :data-src="require('../assets/img/product/pc/pc-3D.jpg')" alt="产品介绍">
        <img :data-src="require('../assets/img/product/pc/pc-correct.jpg')" alt="产品介绍">
        <img :data-src="require('../assets/img/product/pc/pc-doublePk.jpg')" alt="产品介绍">
        <img :data-src="require('../assets/img/product/pc/pc-tank.jpg')" alt="产品介绍">
        <img :data-src="require('../assets/img/product/pc/pc-innovate.jpg')" alt="产品介绍">
        <img :data-src="require('../assets/img/product/pc/pc-choose.jpg')" alt="产品介绍">
        <img :data-src="require('../assets/img/product/pc/pc-xiaohongshu.jpg')" alt="产品介绍">
        <img :data-src="require('../assets/img/product/pc/pc-evalute.jpg')" alt="产品介绍">
        <img :data-src="require('../assets/img/product/pc/pc-fit.jpg')" alt="产品介绍">
        <img :data-src="require('../assets/img/product/pc/pc-design.jpg')" alt="产品介绍">
        <img :data-src="require('../assets/img/product/pc/pc-deviceDetail.jpg')" alt="产品介绍">
        <img :data-src="require('../assets/img/product/pc/pc-3C.jpg')" alt="产品介绍">
        <img :data-src="require('../assets/img/product/pc/pc-feedBack.jpg')" alt="产品介绍">
        <img :data-src="require('../assets/img/product/pc/pc-calorie.jpg')" alt="产品介绍">
        <img :data-src="require('../assets/img/product/pc/pc-courseSystem.jpg')" alt="产品介绍">
      </div>
    </main>
    <main v-else>
      <img
        data-src="http://static.officialsite.shapejoy.com/image/phone-product-header.jpg"
        alt="移动产品介绍头图"
      >
      <div>
        <img :data-src="require('../assets/img/product/mobile/m-aiTech.jpg')" alt="产品介绍">
        <img :data-src="require('../assets/img/product/mobile/m-waitHome.jpg')" alt="产品介绍">
        <img :data-src="require('../assets/img/product/mobile/m-3D.jpg')" alt="产品介绍">
        <img :data-src="require('../assets/img/product/mobile/m-correct.jpg')" alt="产品介绍">
        <img :data-src="require('../assets/img/product/mobile/m-doublePk.jpg')" alt="产品介绍">
        <img :data-src="require('../assets/img/product/mobile/m-tank.jpg')" alt="产品介绍">
        <img :data-src="require('../assets/img/product/mobile/m-innovate.jpg')" alt="产品介绍">
        <img :data-src="require('../assets/img/product/mobile/m-choose.jpg')" alt="产品介绍">
        <img :data-src="require('../assets/img/product/mobile/m-xiaohongshu.jpg')" alt="产品介绍">
        <img :data-src="require('../assets/img/product/mobile/m-evalute.jpg')" alt="产品介绍">
        <img :data-src="require('../assets/img/product/mobile/m-fit.jpg')" alt="产品介绍">
        <img :data-src="require('../assets/img/product/mobile/m-design.jpg')" alt="产品介绍">
        <img :data-src="require('../assets/img/product/mobile/m-deviceDetail.jpg')" alt="产品介绍">
        <img :data-src="require('../assets/img/product/mobile/m-3C.jpg')" alt="产品介绍">
        <img :data-src="require('../assets/img/product/mobile/m-feedBack.jpg')" alt="产品介绍">
        <img :data-src="require('../assets/img/product/mobile/m-calorie.jpg')" alt="产品介绍">
        <img :data-src="require('../assets/img/product/mobile/m-courseSystem.jpg')" alt="产品介绍">
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import { Component, Provide, Vue } from "vue-property-decorator";
import { isPhone } from "@/utils/tools";

@Component({})
export default class Ambassador extends Vue {
  @Provide() isPhone: boolean = isPhone();
}
</script>

<style lang="scss" scoped src="../assets/style/product.scss"></style>
