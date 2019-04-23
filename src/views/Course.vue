<template>
  <div class="course-page">
    <div
      v-if="!isPhone"
      class="pc-course"
      v-lazy:background-image="require('../assets/img/pc-img/course-header-bg.jpg')"
    ></div>
    <div
      v-else
      class="phone-course"
      v-lazy:background-image="require('../assets/img/phone-img/courses-phone-header-bg.jpg')"
    ></div>
    <main v-if="!isPhone">
      <!-- pc课程部分 -->
      <div class="pc-course-box">
        <div class="pc-course-list">
          <ul class="pc-course-classification">
            <li
              v-for="(item, index) in courseTitleList"
              :key="index"
              :class="{'on' : CourseClassifyIndex != 0 ? index === CourseClassifyIndex : index===curIndex }"
              @click="changeSelector(index)"
            >{{item}}</li>
          </ul>
          <div class="pc-course-covers-list">
            <a
              @click="checkCourseDetails(item)"
              v-for="(item, index) in courseList"
              :key="index"
              :style="{ backgroundImage: 'url('+item.cover+')'}"
            >
              <div>{{item.name}}</div>
            </a>
          </div>
        </div>

        <div class="more-courses">
          <p>请使用myshape产品进行完整训练</p>
        </div>
      </div>
    </main>

    <main v-else>
      <!-- 手机课程分类部分 -->
      <div class="phone-course-box">
        <ul class="phone-course-classification">
          <li
            v-for="(item, index) in courseTitleList"
            :key="index"
            :class="{'phone-course-line': CourseClassifyIndex != 0 ? index === CourseClassifyIndex : index===curIndex }"
            @touchstart="changeSelector(index)"
          >{{item}}</li>
        </ul>
      </div>
      <!-- 手机封面列表 -->
      <div class="phone-course-cover-list">
        <a
          @click="checkCourseDetails(item)"
          v-for="(item, index) in courseList"
          :key="index"
          :style="{ backgroundImage: 'url('+item.cover+')'}"
        >
          <div>{{item.name}}</div>
        </a>
      </div>
      <!-- phone更多神秘课程 -->
      <div class="phone-more-courses">
        <p>请使用myshape产品进行完整训练</p>
      </div>
    </main>
  </div>
</template>

<script lang='ts'>
import { Component, Mixins, Provide } from "vue-property-decorator";
import { isPhone } from "@/utils/tools";
import { throws } from "assert";
import MyMixin from "@/api/mixins";
import { getCoursesClassify } from "@/api/index";

interface ICourse {
  id: number;
  name: string;
  level?: number;
  tag?: string;
  coverResource?: any;
  cover?: string;
  isShow?: number;
}

@Component({})
export default class Course extends Mixins(MyMixin) {
  // 新图
  @Provide()
  courseCoverTitleList: Array<Array<ICourse>> = [];
  @Provide()
  courseTitleList: Array<string> = [];
  @Provide()
  courseList: Array<ICourse> = [];
  @Provide()
  curIndex: number = 0;
  // 移动图
  @Provide()
  phoneCoursesCoverTitleList: Array<Array<object>> = [];
  @Provide()
  isPhone: boolean = isPhone();
  @Provide()
  navShow: boolean = false;
  @Provide()
  isShow: boolean = false;
  //点击分类index
  @Provide()
  CourseClassifyIndex: number = 0;

  created(): void {
    getCoursesClassify().then((res: any) => {
      this.formatData(res.data);
      this.insertPcData(0);
      let CourseClassifyIndex = sessionStorage.getItem("courseClassifyIndex");
      if (CourseClassifyIndex) {
        this.CourseClassifyIndex = parseInt(CourseClassifyIndex);
        this.insertPcData(this.CourseClassifyIndex);
      }
    });

    this.isShow = this.$route.query.isShow === "true";
  }

  formatData(data: ICourse[]): void {
    const that: any = this;
    const { baseAddress, sasToken } = that.$data.staticResource;
    data.map((item: ICourse, index: number) => {
      const { id, name, tag, coverResource, isShow } = item;
      // 如果url中有isShow=true則説明這是預覽版，所以不顯示大家都能看的數據
      // 否則，只顯示大家都能看的數據
      if (!this.isShow && isShow === 0) {
        return false;
      }
      if (tag) {
        const tagIndex: number = that.courseTitleList.indexOf(tag);
        let itemData: ICourse = { id, name };
        if (coverResource) {
          itemData.cover = `${baseAddress}/${coverResource.middle}?${sasToken}`;
        }
        if (tagIndex === -1) {
          that.courseTitleList.push(tag);
          that.courseCoverTitleList[that.courseTitleList.length - 1] = [
            itemData
          ];
        } else {
          that.courseCoverTitleList[tagIndex].push(itemData);
        }
      }
    });
  }

  checkCourseDetails(item: any): void {
    sessionStorage.setItem("courseClassifyIndex", `${this.curIndex}`);

    if (parseInt(item.id, 10)) {
      this.$router.push({
        path: "coursedetails",
        name: "coursedetails",
        params: {
          name: "coursedetails",
          id: item.id
        }
      });
    }
  }

  insertPcData(index: number): void {
    this.courseList = this.courseCoverTitleList[index];
  }

  changeSelector(index: number): void {
    sessionStorage.removeItem("courseClassifyIndex");
    this.CourseClassifyIndex = 0;
    if (index !== this.curIndex) {
      this.curIndex = index;
      this.insertPcData(index);
    } else {
      this.insertPcData(index);
    }
  }
}
</script>

<style lang='scss' scoped src='../assets/style/courses.scss'></style>

