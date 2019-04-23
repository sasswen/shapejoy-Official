<template>
  <div id='topNav'>
    <div class="pc-guide" v-if="!isPhone">
      <div class="logo">
        <img @click="toggleClassOn('/')" src="../assets/img/pc-img/pc-logo.png" alt="logo">
      </div>
      <!-- 导航 -->
      <nav>
        <ul>
          <li v-for="(item, index) in navList" :key="index" :class="href===item.href ? 'on': ''">
            <span @click="toggleClassOn(item.href)">{{item.title}}</span>
          </li>
        </ul>
      </nav>
    </div>

    <div class="phone-header" @click="showPhoneNav(false)" v-else>
      <div class="guide">
        <div class="logo"></div>
        <div class="menu" @click.stop="showPhoneNav()"></div>
      </div>
      <div :class="navShow ? 'on phone-nav-box' : 'phone-nav-box'">
        <div class="phone-nav">
          <router-link :to="item.href" v-for="(item, index) in navList" :key="index">{{item.title}}</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { Component, Prop, Provide, Vue } from 'vue-property-decorator';
  import { isPhone } from '@/utils/tools';
  import router from '@/router';

  interface NavItem<T> {
    href: T,
    title: T
  }

  @Component({})
  export default class CommontTopNav extends Vue {
    @Provide() navShow: boolean = false;
    @Provide() isPhone: boolean = isPhone();
    @Provide() navList: Array<NavItem<string>> = [
      {
        href: '/',
        title: '形趣首页'
      }, {
        href: '/productintroduction',
        title: '产品介绍'
      }, {
        href: '/course',
        title: '课程介绍'
      },
      {
        href: '/ambassador',
        title: '形象大使'
      },
      {
        href: '/about',
        title: '关于我们'
      }
    ];
    @Prop() href: string = '';

    toggleClassOn(href: string): void {
      router.push(href);
    }

    showPhoneNav(isShow?: boolean) {
      this.navShow = isShow === false ? false : !this.navShow;
    }
  }
</script>

<style lang="scss" scoped>

</style>

