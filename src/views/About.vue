<template>
  <div>
     <!--pc端主页-->
    <div v-if="!isPhone">
      <div class="pc-about" v-lazy:background-image="require('../assets/img/about/pc-img/pc-header.jpg')">
      </div>
        <main>
          <div class="content-pic">
            <div class="content-title">
              公司介绍
            </div>
          </div>
          <div class="content-pic">
            <div class="text">
              <p>全球首款AI互动健身私教产品[myShape]由上海形趣信息科技有限公司研发，通过专业多媒体课</p>
              <p>程和3D机器视觉识别反馈技术，myShape 提供全新的科技健身方式，满足现代快节奏高要求的生活</p>
              <p>方式，使用户可以足不出户，随时享受AI训练指导，塑造美好的身型。</p>
              <p>至2017年,公司获得了由华人文化-元迅资本、鼎翔资本、 mobike、天奇创投、远洋集团、七熹创投等知名投资人</p>
              <p>3000万投资，力争打造科技健身产业的独角兽企业。</p>
            </div>
          </div>
          <div class="content-pic">
            <div class="content-title">
              myShape 大事件
            </div>
          </div>
          <div class="content-pic">
            <img class="pc-time-line" v-lazy="require('../assets/img/time-line.png')" alt="myShape 大事件">
          </div>
          <div class="content-pic">
            <div class="content-title">
              公司环境
            </div>
          </div>
          <div class="content-pic">
            <section class="slider-container">
              <swiper :options='swiperOption'>
                 <swiper-slide class='swiper-wrapper' v-for='i in 5' :key='i'>
                    <img :src="'http://static.officialsite.shapejoy.com/about_'+i+'.jpg?v1.0'">
                </swiper-slide>
                <div class='swiper-pagination' slot='pagination'></div>
                <div class='swiper-button-prev' slot='button-prev'></div>
                <div class='swiper-button-next' slot='button-next'></div>
              </swiper>
            </section>
          </div>
          <div class="content-pic">
            <div class="content-title">
              联系我们
            </div>
          </div>
          <div class="content-pic">
            <div class="text">
              <p>公司地址：上海市徐汇区天钥桥路909号2号楼107-108</p>
              <p>招聘联系邮箱：jobs@myshape.ai</p>
              <p>企业邮箱： contact@myshape.ai</p>
              <p>合作邮箱：marcom@myshape.ai</p>
            </div>

          </div>
          <div class="content-pic">
            <router-link to="/joinus">
              <img class="pc-join-btn" v-lazy="'http://static.officialsite.shapejoy.com/img/about/pc-img/pc-join-btn.png'" alt="加入我们"/>
            </router-link>
          </div>

        </main>
    </div>
    <!--手机端主页-->
    <div v-else  v-lazy-container="{ selector: 'img' }">
      <div class="phone-about"  v-lazy:background-image="require('../assets/img/about/m-img/about-phone.jpg')">
      </div>
      <main>
        <div class="content-pic">
          <div class="content-title">
            公司介绍
          </div>
        </div>
        <div class="content-pic">
          <div class="text">
            <p>全球首款AI互动健身私教产品[myShape] 由上海形趣信息科技有限公司研发,通过专业 多媒体课程和3D机器视觉识别反馈技术,myShape 提供全新的科技健身方式,满足现代快节奏高要求的生活方式,
              使用户可以足不出户,随时享受AI训练指导,塑造美好的身型。
            </p>
            <p>至2017年,公司获得了由华人文化-元迅资本、鼎翔资本、 mobike、天奇创投、远洋集团、七熹创投等知名投资人3000万投资,力争打造科技健身产业的独角兽企业。
            </p>
          </div>
        </div>
         <div class="content-pic">
            <div class="content-title">
              myShape 大事件
            </div>
          </div>
          <div class="content-pic">
            <img class="m-time-line" :data-src="require('../assets/img/time-line-m.jpg')" alt="myShape 大事件">
          </div>
        <div class="content-pic">
          <div class="content-title">
            联系我们
          </div>
        </div>
        <div class="content-pic">
          <div class="m-address">
            <p>公司地址：上海市徐汇区天钥桥路909号2号楼107-108</p>
            <p>招聘联系邮箱：jobs@myshape.ai</p>
            <p>企业邮箱： contact@myshape.ai</p>
            <p>合作邮箱：marcom@myshape.ai</p>
          </div>
        </div>
        <div class="content-pic">
          <div class="content-title">
            公司环境
          </div>
        </div>
        <div class="content-pic">
          <div class="content-pic-wrapper">
            <img :data-src="'http://static.officialsite.shapejoy.com/about_'+item+'.jpg?v1.0'" v-for="(item, index) in 5" :key="index">
          </div>
        </div>
        <div class="mobile-join">
          <router-link to="/joinus">
            <img data-src="http://static.officialsite.shapejoy.com/img/about/pc-img/pc-join-btn.png" class="mobile-joinUs-btn" alt="加入我们">
          </router-link>
        </div>
      </main>
    </div>
  </div>
</template>

<script lang="ts">
  import { Component, Provide, Vue } from 'vue-property-decorator';
  import { isPhone } from '@/utils/tools';
  import VueAwesomeSwiper from 'vue-awesome-swiper';

  const { swiper, swiperSlide } = VueAwesomeSwiper;
  @Component({
    components: {
      swiper,
      "swiper-slide": swiperSlide
    }
  })

  export default class About extends Vue {
    @Provide() swiperOption: object = {
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
        stopOnLastSlide: false
      },
      slidesPerView: 1,
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
    };
    @Provide() isPhone: boolean = isPhone();
  }
</script>

<style lang="scss" scoped src="../assets/style/about-us.scss"></style>
