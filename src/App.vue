<template>
  <div id="app">
    <CommentTopNav :href="href"/>
    <div @click="hidePhoneNav(false)" v-if="ajaxFinish">
      <router-view/>
    </div>
    <div style="height:1000px;" v-else></div>
    <CommentFooterNav :AmapHidden="AmapHidden"/>
    <a
      id="logo"
      href="https://myshape.tmall.com/?spm=a220o.1000855.1997427721.d4918089.48423b4ewFC1hq"
      target="_blank"
      :class="['logo', isPhone ? 'mobile' : 'pc']"
    ></a>
  </div>
</template>

<script lang="ts">
import { Component, Provide, Vue } from "vue-property-decorator";
import CommentTopNav from "@/components/CommentTopNav.vue";
import CommentFooterNav from "@/components/CommentFooterNav.vue";
import { isPhone } from "@/utils/tools";
import token from "@/api/token";
import { setTimeout } from "timers";

// @ts-ignore: Unreachable code error
@Component({
  components: { CommentTopNav, CommentFooterNav }
})
export default class App extends Vue {
  @Provide() href: string = "";
  @Provide() isPhone: boolean = isPhone();
  @Provide() AmapHidden: boolean = false;
  @Provide() hideTop: any = {};
  @Provide() ajaxFinish: boolean = false;
  @Provide() showLoading: boolean = true;

  hidePhoneNav(hide: boolean): void {
    this.hideTop = this.$children;
    this.hideTop[0].showPhoneNav(false);
  }

  created(): void {
    let routerUrl: string = `${window.location.pathname}`;
    let pathname: any = routerUrl.match(/([\w-]*).html/);
    if (pathname) {
      pathname = pathname[1].replace("-", "");
      if (pathname === "privacyclause") {
        pathname = "privacy";
      } else if (pathname === "coursesintroduction") {
        pathname = "course";
      }
      this.$router.push(`/${pathname}`);
    }
    token.Login().then((res: any) => {
      setTimeout(() => {
        this.ajaxFinish = true;
      }, 500);
    });
  }

  mounted(): void {
    this.queryRoute();
  }

  updated(): void {
    this.queryRoute();
  }

  queryRoute(): void {
    if (
      this.$route.path === "/" ||
      this.$route.path === "/productintroduction" ||
      this.$route.path === "/course" ||
      this.$route.path === "/about" ||
      this.$route.path === "/ambassador"
    ) {
      this.href = this.$route.path;
    } else {
      this.href = "";
    }
    this.AmapHidden =
      this.$route.path === "/productintroduction" ||
      this.$route.path === "/course" ||
      this.$route.path === "/ambassador" ||
      this.$route.path.indexOf("/coursedetail") !== -1;
  }
}
</script>

<style lang='scss' src='./assets/style/comment.scss'></style>
<style lang="scss" scoped>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: auto;
}

.logo {
  position: fixed;
  right: 0.3rem;
  background: url("http://static.officialsite.shapejoy.com/image/tianmaoLogo.png")
    no-repeat center;
  background-size: contain;
  z-index: 999;

  &.pc {
    top: 7.4rem;
    width: 1rem;
    height: 1rem;
  }

  &.mobile {
    bottom: 10rem;
    width: 3rem;
    height: 3rem;
  }
}
</style>
