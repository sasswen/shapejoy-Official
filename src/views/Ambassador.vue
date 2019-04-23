<template>
  <div id='ambassador'>
    <main v-if="!isPhone">
      <div class='pc-ambassador-header' v-lazy:background-image="'http://static.officialsite.shapejoy.com/image/jpg/pc-ambassador-header.jpg'" >
      </div>
      <div class="pc-ambassador-title">
        <ul class='pc-course-classification'>
          <li v-for="(item, index) in ambassadorTitle"
              :key="index"
              :class="{'on' : index === curIndex}"
              @click="changeSelector(index)"
          >
            {{item}}
          </li>
        </ul>
      </div>
      <div class="pc-ambassador" :style="{backgroundImage:'url('+pcAmbassadorUrl[curIndex]+')'}">
      </div>
    </main>
    <main v-else>
      <div class='phone-ambassador-header' v-lazy:background-image="'http://static.officialsite.shapejoy.com/image/jpg/phone-ambassdor.jpg'">
      </div>
      <div class="phone-ambassador-title">
        <ul class='pc-course-classification' ref="nav">
          <li v-for="(item, index) in ambassadorTitle"
              :key="index"
              :class="{'on' : index === curIndex}"
              @touchstart="changeSelector(index)"
          >
            {{item}}
          </li>
        </ul>
      </div>
      <div class="pc-ambassador" :style="{backgroundImage:'url('+phoneAmbassadorUrl[curIndex]+')'}">
      </div>
    </main>
  </div>
</template>

<script lang="ts">
  import { Component, Provide, Vue } from 'vue-property-decorator';
  import { isPhone } from '@/utils/tools';

  @Component({})
  export default class Ambassador extends Vue {
    @Provide()
    isPhone: boolean = isPhone();
    @Provide()
    ambassadorTitle: Array<String> = ['杨冰', '夏诗洁', '孟涛', 'Alice'];
    @Provide()
    curIndex: number = 0;
    @Provide()
    pcAmbassadorUrl: Array<String> = [
      'http://static.officialsite.shapejoy.com/image/jpg/pc-yang.jpg',
      'http://static.officialsite.shapejoy.com/image/jpg/pc-Xia.jpg',
      'http://static.officialsite.shapejoy.com/image/jpg/pc-meng.jpg',
      'http://static.officialsite.shapejoy.com/image/jpg/pc-Ali.jpg'
    ];
    phoneAmbassadorUrl: Array<String> = [
      'http://static.officialsite.shapejoy.com/image/jpg/phone-yang.jpg',
      'http://static.officialsite.shapejoy.com/image/jpg/phone-Xiashijie.jpg',
      'http://static.officialsite.shapejoy.com/image/jpg/phone-meng.jpg',
      'http://static.officialsite.shapejoy.com/image/jpg/phone-Ali.jpg'
    ];
    changeSelector(index: number): void {
      if (this.curIndex !== index) {
        this.curIndex = index;
      }
    }
  }
</script>

<style lang="scss" scoped>
  .pc-course-classification {
    padding: 0 2rem;
  }
</style>
<style lang="scss" scoped src="../assets/style/ambassador.scss"></style>
