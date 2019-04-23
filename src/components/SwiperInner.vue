<template>
    <swiper :options='swiperOption'>
      <swiper-slide v-for="(item, index) in carouselLinkTextArr" :key="index">
        <div class="item">
          <a :href="item.url" target="_blank">
            {{item.title}}
          </a>
        </div>
      </swiper-slide>
    </swiper>

</template>

<script lang="ts">
  import { Component, Provide, Vue } from "vue-property-decorator";
  import VueAwesomeSwiper from "vue-awesome-swiper";
  import { getHomePageLinks } from "@/api/index";

  const { swiper, swiperSlide } = VueAwesomeSwiper;

  @Component({
    components: {
    swiper,
    'swiper-slide': swiperSlide
    }})
  export default class SwiperInner extends Vue {
    @Provide() swiperOption: object = {
      slidesPerView: 1,
      loop: true,
      autoplay: {
        stopOnLastSlide: false, // 当切换到最后一个slide时停止自动切换
        disableOnInteraction: false // 用户操作swiper之后，是否禁止autoplay。
      },
      slidesPerview: 'auto',
      speed: 2000
    };
    // 渲染轮播文字和链接
    @Provide() carouselLinkTextArr = [];
    created(): void {
      const that: any = this;
      getHomePageLinks().then((res: any) => {
        that.carouselLinkTextArr = res.data.slice(0, 5);
      });
    }
  }
</script>

<style scoped>

</style>
