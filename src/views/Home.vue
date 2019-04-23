<template>
  <div class="home-page" v-lazy-container="{ selector: 'img' }">
    <div class="pc-bg-wrap" v-if="!isPhone">
      <swiper :options="swiperOption">
        <swiper-slide v-for="i in 3" :key="i">
          <img :data-src="'http://static.officialsite.shapejoy.com/pc-images/carousel-0'+i+'.png'">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </swiper>
      <div class="carousel-list">
        <div class="book-mark"></div>
        <div class="carousel-inner">
          <SwiperInner/>
        </div>
      </div>
    </div>

    <div class="phone-bg-wrap" v-else>
      <swiper :options="swiperOption">
        <swiper-slide v-for="i in 3" :key="i">
          <img
            :data-src="'http://static.officialsite.shapejoy.com/phone-images/phone-header_0'+i+'.png'"
          >
        </swiper-slide>
      </swiper>
      <div class="carousel-list">
        <div class="book-mark"></div>
        <div class="carousel-inner">
          <SwiperInner/>
        </div>
      </div>
    </div>
    <!-- content -->
    <main v-if="!isPhone">
      <!-- pc -->
      <div class="courses-3D">
        <div class="courses-word">ACCURATE</div>
        <div class="line-yellow"></div>
        <div class="vision-3D">3D视觉技术实时捕捉</div>
      </div>

      <!-- 人工智能在只在pc显示 -->
      <div>
        <img
          class="understand-more"
          :data-src="require('../assets/img/pc-img/pc-main-visual-3D.jpg')"
          alt="人工智能实时纠错"
        >
      </div>

      <!-- pc EFFICIENT -->
      <div class="course-characteristics courses-3D">
        <div class="courses-word">EFFICIENT</div>
        <div class="line-yellow"></div>
        <div class="vision-3D">动作做到位健身更有效</div>
      </div>

      <!-- 技术 && 功效 &&　乐趣 只在pc 显示-->
      <div>
        <img
          class="characteristics-introduce"
          :data-src="require('../assets/img/pc-img/pc-main-characteristics.jpg')"
          alt="efficient"
        >
      </div>



      <div class="course-characteristics courses-3D">
        <div class="courses-word">FASHION</div>
        <div class="line-yellow"></div>
        <div class="vision-3D">最潮健康生活方式</div>
      </div>

      <div>
        <img
          class="fashion"
          :data-src="require('../assets/img/pc-img/pc-main-fashion.jpg')"
          alt="efficient"
        >
      </div>

      <!-- pc -->
      <div class="course-action courses-3D">
        <div class="courses-word">FANTASTIC</div>
        <div class="line-yellow"></div>
        <div class="vision-3D">与好友实时PK乐趣无限</div>
      </div>

      <!-- 好友在线实时对战只在pc显示 -->
      <div>
        <img
          class="action-result"
          :data-src="require('../assets/img/pc-img/pc-rank-bg.jpg')"
          alt="排行榜"
        >
      </div>

      <!-- pc -->
      <div class="course-more courses-3D">
        <div class="courses-word">VARIETY</div>
        <div class="line-yellow"></div>
        <div class="vision-3D">海量课程组合随心选择</div>
      </div>

      <div class="pc-five-train">
        <div class="prev" @click="courseListPrev">
          <img
            data-src="http://static.officialsite.shapejoy.com/img/pc-img/left-semicircle-btn.png?v1.0"
            alt="prev-btn"
          >
        </div>
        <ul>
          <li
            :class="'pc-people0' + course.className"
            v-for="(course, index) in courseList"
            :key="index"
          >
            <router-link :to="{ name: 'coursedetails', params: { id: course.id }}">{{course.name}}</router-link>
          </li>
        </ul>
        <div class="next" @click="courseListNext">
          <img
            data-src="http://static.officialsite.shapejoy.com/img/pc-img/right-semicircle-btn.png?v1.0"
            alt="next-btn"
          >
        </div>
      </div>

      <!-- pc btn-more -->
      <div class="pc-more-btn">
        <router-link to="/course">MORE</router-link>
      </div>
    </main>

    <main v-else>
      <!-- phone -->
      <div class="courses-3D phone-courses-3D">
        <div class="courses-word">ACCURATE</div>
        <div class="line-yellow"></div>
        <div class="vision-3D">3D视觉技术实时捕捉</div>
      </div>
      <!-- 实时捕捉全身背景只在phone显示 -->
      <div>
        <img
          class="phone-people-sport"
          :data-src="require('../assets/img/phone-img/phone-people-sport.jpg')"
          alt="实时捕捉数据"
        >
      </div>

      <!-- phone EFFICIENT-->
      <div class="course-characteristics courses-3D phone-courses-3D">
        <div class="courses-word">EFFICIENT</div>
        <div class="line-yellow"></div>
        <div class="vision-3D">动作做到位健身更有效</div>
      </div>
      <!-- 技术 && 功效 &&　乐趣 只在phone 显示-->

      <div>
        <img
          class="phone-characteristics-introduce"
          :data-src="require('../assets/img/phone-img/phone-characteristics-introduce.jpg')"
          alt="efficient"
        >
      </div>

      <div class="course-characteristics courses-3D phone-courses-3D">
        <div class="courses-word">FASHION</div>
        <div class="line-yellow"></div>
        <div class="vision-3D">最潮健康生活方式</div>
      </div>
  
      <div>
        <img
          class="phone-fashion"
          :data-src="require('../assets/img/phone-img/phone-fashion.jpg')"
          alt="fashion"
        >
      </div>


      <!-- phone -->
      <div class="course-action courses-3D phone-courses-3D">
        <div class="courses-word">FANTASTIC</div>
        <div class="line-yellow"></div>
        <div class="vision-3D">与好友实时PK乐趣无限</div>
      </div>
      <!-- 好友在线实时对战只在phone显示 -->
      <div>
        <img
          class="phone-rank-bg"
          :data-src="require('../assets/img/phone-img/phone-rank-bg.jpg')"
          alt="排行榜"
        >
      </div>
      <!-- phone -->
      <div class="course-more courses-3D phone-courses-3D">
        <div class="courses-word">VARIETY</div>
        <div class="line-yellow"></div>
        <div class="vision-3D">海量课程组合随心选择</div>
      </div>

      <!-- pnone five train -->
      <div class="phone-five-train">
        <router-link
          :to="{ name: 'coursedetails', params: { id: course.id }}"
          v-lazy:background-image="require('../assets/img/phone-img/phone-people0'+course.className+'.jpg')"
          class="phone-people"
          v-for="(course, index) in courseList"
          :key="index"
        >{{course.name}}</router-link>
      </div>
      <!-- phone btn-more -->
      <div class="phone-more-btn">
        <router-link to="/course">MORE</router-link>
      </div>
    </main>
  </div>
</template>

<script lang='ts'>
import { Component, Provide, Mixins } from "vue-property-decorator";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import { isPhone } from "@/utils/tools";
import SwiperInner from "@/components/SwiperInner.vue";
import { getCoursesCommend } from "@/api/index";
import MyMixin from "@/api/mixins";

interface ICourse {
  id: number;
  className: number;
  name: string;
}

@Component({
  components: {
    swiper,
    "swiper-slide": swiperSlide,
    SwiperInner
  }
})
export default class Home extends Mixins(MyMixin) {
  @Provide() isPhone: boolean = isPhone();
  @Provide() width: Number = document.body.clientWidth;

  @Provide()
  swiperOption: object = {
    slidesPerView: 1,
    loop: true,
    autoplay: {
      stopOnLastSlide: false, // 当切换到最后一个slide时停止自动切换
      disableOnInteraction: false // 用户操作swiper之后，是否禁止autoplay。
    },
    slidesPerview: "auto",
    speed: 1000,
    width: this.width,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    }
  };
  @Provide()
  courseList: ICourse[] = [
    {
      className: 1,
      id: 1,
      name: "全身激活"
    },
    {
      className: 2,
      id: 8,
      name: "告别蝴蝶袖"
    },
    {
      className: 3,
      id: 13,
      name: "塑造蜜桃臀"
    },
    {
      className: 4,
      id: 24,
      name: "炫动瘦腿"
    },
    {
      className: 5,
      id: 3,
      name: "爆燃踏板"
    }
  ];

  created(): void {
    const that: any = this;
    getCoursesCommend().then((res: any) => {
      res.data.map((item: ICourse, index: number) => {
        that.courseList[index].id = item.id;
        that.courseList[index].name = item.name;
      });
    });
  }

  courseListPrev(): void {
    let listFirst: Array<ICourse> = this.courseList.splice(0, 1);
    this.courseList = [...this.courseList, ...listFirst];
  }

  courseListNext(): void {
    let listFinish: Array<ICourse> = this.courseList.splice(
      this.courseList.length - 1
    );
    this.courseList = [...listFinish, ...this.courseList];
  }
}
</script>

<style lang='scss' scoped>
.home-page {
  width: 100%;
  overflow-x: hidden;
}
.swiper-button-next {
  right: 5%;
}

.swiper-button-prev {
  left: 5%;
}
</style>
