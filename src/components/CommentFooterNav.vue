<template>
  <footer>
    <div :class="['footer-wrapper', isPhone ? 'mobile' : 'pc' ]">
      <el-amap vid="amapDemo"
               :center="center"
               :map-manager="amapManager"
               :zoom="zoom"
               :class="['amap-demo', !AmapHidden ? '' : 'hidden']"
               v-if="!isPhone"
      >
        <el-amap-marker vid="component-marker" :position="marker.position" :events="marker.events"
                        :visible="marker.visible"></el-amap-marker>
        <el-amap-info-window
          :position="currentWindow.position"
          :title="currentWindow.title"
          :content="currentWindow.content"
          :visible="currentWindow.visible"
          :events="currentWindow.events"
        >
        </el-amap-info-window>
      </el-amap>
      <div :class="['footer-content', !AmapHidden ? '' : 'on']">
        <div class="footer-content-left">
          <div class="left-inner left-inner-ml">
            <router-link to="/about">
              关于我们
            </router-link>

            <router-link to="/joinus">
              加入我们
            </router-link>

            <router-link to="/course">
              特色课程
            </router-link>
          </div>
          <div class="left-inner">
            <router-link to="/disclaimer">
              免责声明
            </router-link>

            <router-link to="/privacy">
              隐私条款
            </router-link>
          </div>
        </div>
        <div class="footer-content-right">
          <div :class="[iconShow&&currentIndex == 1?'on':'','wx']" @click="showIcon($event)" data-index="1">
            <svg id="cover1" data-name="iconCover" xmlns="http://www.w3.org/2000/svg"
                 xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 40 40">
              <defs>
                <clipPath id="clip-path" transform="translate(-291.63 -206.11)">
                  <rect id="SVGID" class="cls-1" x="297.63" y="214.69" width="28" height="22.84"/>
                </clipPath>
              </defs>
              <!--<title>wx-1</title>-->
              <circle class="cls-2" cx="20" cy="20" r="20"/>
              <g class="cls-3">
                <path class="cls-4"
                      d="M316.57,221.6a8.47,8.47,0,0,1,1,.06c-.86-4-5.12-7-10-7-5.44,0-9.9,3.71-9.9,8.42,0,2.72,1.48,5,4,6.69l-1,3,3.46-1.74a17,17,0,0,0,3.47.5c.31,0,.62,0,.92,0a7.37,7.37,0,0,1-.31-2.08,8.11,8.11,0,0,1,8.42-7.84Zm-5.33-2.69a1.24,1.24,0,1,1,0,2.47,1.26,1.26,0,1,1,0-2.47Zm-6.93,2.47a1.26,1.26,0,1,1,0-2.47,1.24,1.24,0,0,1,0,2.47Zm0,0"
                      transform="translate(-291.63 -206.11)"/>
              </g>
              <path class="cls-4"
                    d="M325.61,229.32c0-4-4-7.19-8.41-7.19-4.71,0-8.42,3.23-8.42,7.19s3.71,7.19,8.42,7.19a12.42,12.42,0,0,0,3-.5l2.72,1.49-.74-2.48c2-1.49,3.47-3.47,3.47-5.7Zm-11.14-1.24a1,1,0,1,1,0-2,1,1,0,1,1,0,2Zm5.45,0a1,1,0,0,1,0-2,1,1,0,1,1,0,2Zm0,0"
                    transform="translate(-291.63 -206.11)"/>
            </svg>
            <div></div>
          </div>
          <div :class="['wb',iconShow&&currentIndex==2?'wb on':'']" @click="showIcon($event)" data-index="2">
            <a href="https://weibo.com/p/1006066529238718/home?from=page_100606&mod=TAB&is_all=1#place" target="_blank">
              <svg id="cover1" data-name="iconCover" xmlns="http://www.w3.org/2000/svg"
                   xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 40 40">
                <defs>
                  <clipPath id="clip-path" transform="translate(-256 -201.11)">
                    <rect id="SVGID" class="cls-1" x="262.36" y="210.17" width="27.28" height="21.89"/>
                  </clipPath>
                </defs>
                <title>微博</title>
                <circle class="cls-2" cx="20" cy="20" r="20"/>
                <g class="cls-3">
                  <path class="cls-4"
                        d="M289.15,219.65a1,1,0,0,1-1.25.52.94.94,0,0,1-.54-1.22h0a5.12,5.12,0,0,0-.77-5c-.84-1.06-2.49-2.24-5.56-1.8a1,1,0,0,1-.32-1.87h.05c3.11-.44,5.71.45,7.34,2.51a7,7,0,0,1,1,6.83Zm-7.12.93s4.19.1,4.19,3.63c0,2.56-3,7.82-12.76,7.82-7.72,0-11.11-4-11.11-7.16,0-5.12,9.22-13.73,13-11a2.48,2.48,0,0,1-.07,3.77c10.31-3.29,6.75,3,6.75,3Zm-9.28-.9c-4.53.42-8,3.22-7.68,6.26s4.19,5.16,8.71,4.75,8-3.22,7.68-6.26S277.27,219.27,272.75,219.68Zm.72,9.72c-2.45.41-4.72-.94-5.08-3s1.34-4.09,3.79-4.5,4.72.94,5.08,3S275.92,229,273.47,229.4Zm-.64-3.29a1.49,1.49,0,1,0-1.07,1.69,1.41,1.41,0,0,0,1.07-1.68Zm1-2.07a.73.73,0,1,0,.74.73.73.73,0,0,0-.74-.73Zm8.14-8.41a1,1,0,0,1-.32-1.87h.05a3.83,3.83,0,0,1,3.76,1.31,3.62,3.62,0,0,1,.54,3.56,1,1,0,0,1-1.25.52.94.94,0,0,1-.54-1.22h0a1.77,1.77,0,0,0-.27-1.68,2,2,0,0,0-2-.6Z"
                        transform="translate(-256 -201.11)"/>
                </g>
              </svg>
            </a>
          </div>
          <div :class="['xhs',iconShow&&currentIndex==3?'xhs on':'']" @click="showIcon($event)" data-index="3">
            <a
              href="https://www.xiaohongshu.com/user/profile/5ad5bba2e8ac2b4e039114c2?_at=d3c8490c613fc5576d556b1526b52255f4e04"
              target="_blank">
              <svg id="cover1" data-name="iconCover" xmlns="http://www.w3.org/2000/svg"
                   xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 40 40">
                <defs>
                  <clipPath id="clip-path" transform="translate(-304.89 -242.38)">
                    <rect class="cls-1" x="309.72" y="257" width="30.35" height="10.76"/>
                  </clipPath>
                </defs>
                <title>小红书</title>
                <circle class="cls-2" cx="20" cy="20" r="20"/>
                <g class="cls-3">
                  <path class="cls-4"
                        d="M340.06,266.32a2,2,0,0,1-2.52,1.35,1.6,1.6,0,0,1-1.42-1.6c.51,0,1,0,1.5,0,.33,0,.49-.1.47-.45,0-.51,0-1,0-1.53a.66.66,0,0,0-.68-.71c-.87,0-1.75,0-2.7,0v4.32h-1.94V263.4h-2v-2h1.91v-1.7h-1.27v-2l1.28-.06V257h2c-.08.54.14.72.7.73a2.15,2.15,0,0,1,2.32,2.38c0,.41,0,.83,0,1.28a2.15,2.15,0,0,1,2.36,1.48Zm-5.37-6.7c0,.6,0,1,0,1.48a.46.46,0,0,0,.34.29c.24,0,.67-.08.68-.16a3.4,3.4,0,0,0-.07-1.37c0-.15-.56-.15-1-.25Zm-19-2.6c0,3,0,5.95,0,8.92a1.6,1.6,0,0,1-2,1.75,1.45,1.45,0,0,1-1.24-1.6h1.3V257Zm8.32,0a31,31,0,0,0-1.36,2.8l2.37-.14-1.25,2.53-.16.33c-.42.84-.42.85.51.87l.37,0c-.26.51-.49,1-.74,1.44a.33.33,0,0,1-.23.16,19.42,19.42,0,0,1-2.07-.05c-.5-.06-.69-.43-.49-.91s.52-1.15.78-1.72l.31-.69c-.38,0-.66,0-.94,0-.82,0-1.1-.39-.76-1.14.54-1.19,1.14-2.34,1.71-3.51Zm-14.31,7.46c.12-.69.28-1.37.36-2.06.1-.87.15-1.74.22-2.65h2.06c-.35,2.35.07,4.85-1.47,7l-1.17-2.06c0-.08,0-.16,0-.24Zm30.34-5.5a1.6,1.6,0,0,1-1.88.67c-.22-1-.06-1.61.46-1.85s.93,0,1.43.57Zm0,0"
                        transform="translate(-304.89 -242.38)"/>
                </g>
                <path class="cls-4"
                      d="M328.73,265.76c.54,0,1,0,1.54,0,.32,0,.41.12.43.43.1,1.55.11,1.55-1.46,1.55h-5.52c.34-.68.62-1.27.95-1.84.06-.11.33-.13.5-.13.49,0,1,0,1.51,0v-6.05h-1.25v-1.92H330v1.89h-1.24c0,2,0,4,0,6.08Zm-11.63-6H319a24.67,24.67,0,0,0,.31,3.52,4.37,4.37,0,0,1-.81,3.4c-.94-.82-1.45-3.28-1.43-6.92Zm3.47,6h3.13c-.35.68-.63,1.24-.93,1.79a.47.47,0,0,1-.34.2c-.91,0-1.82,0-2.87,0l1-2Zm0,0"
                      transform="translate(-304.89 -242.38)"/>
              </svg>
            </a>
          </div>
          <div :class="['dy',iconShow&&currentIndex==4?'dy on':'']" @click="showIcon($event)" data-index="4">
            <svg id="cover1" data-name="iconCover" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40">
              <defs>
                <clipPath id="clip-path" transform="translate(-304.89 -242.38)">
                  <rect class="cls-1" x="309.72" y="257" width="30.35" height="10.76"/>
                </clipPath>
              </defs>
              <title>抖音</title>
              <circle class="cls-2" cx="20" cy="20" r="20"/>
              <path class="cls-4"
                    d="M320.59,206.82a5.83,5.83,0,0,1-5.82-5.82v-.53h-4.24v15.89a3.18,3.18,0,1,1-3.18-3.18v-4.24a7.41,7.41,0,1,0,7.33,8.47h.08v-8.23a10,10,0,0,0,5.82,1.87Z"
                    transform="translate(-290.26 -192.11)"/>
            </svg>
            <div></div>
          </div>
        </div>
        <div :class="[ isPhone ? 'mobile-phone-box' : 'pc-phone-box']">
          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" t="1540373945304" class="icon" viewBox="0 0 1024 1024" version="1.1" width="32" height="32">
            <path d="M778.17 1024h-0.015l-5.288-0.122c-122.932-6.287-288.947-121.997-444.142-309.521l-57.323-69.24C116.215 457.585 34.905 274.423 53.921 155.155 67.34 71.01 192.43 0 263.913 0c35.204 0 47.965 17.521 52.425 27.983 40.468 71.912 90.529 196.971 90.765 241.826l0.016 3.192-1.146 2.981c-8.927 23.58-28.893 34.872-46.511 44.838-23.207 13.119-36.399 21.73-38.007 46.52-0.48 7.522 6.011 41.752 108.4 167.964l43.774 52.856c102.665 121.16 134.97 134.206 142.532 135.278 24.758 3.444 36.414-7.408 54.22-26.927 13.557-14.865 28.933-31.728 54.309-35.448l3.217-0.455 3.16 0.674c44.708 9.43 159.159 83.186 224.125 137.942 9.382 6.23 25.75 24.71 12.786 65.544C947.646 928.889 858.993 1024 778.17 1024z"
              class='icon-color'
            />
          </svg>
          <a href="tel:400-8208954">400-820-8954</a>
            </div>
        </div>
        <div class="keep-record">
          <p>2016-2019 © All Rights Reserved @上海形趣信息科技有限公司</p>
          <p>沪ICP备17000056号-1</p>
        </div>
      </div>
    </footer>
</template>

<script lang="ts">
  import { Component, Prop, Provide, Vue } from 'vue-property-decorator';
  import VueAMap from 'vue-amap';
  import { isPhone } from '@/utils/tools';

  let amapManager = new VueAMap.AMapManager();

  @Component({})
  export default class CommentFooterNav extends Vue {
    @Provide() currentIndex: number = 0;
    @Provide() iconShow: boolean = false;
    @Provide() zoom: number = 20;
    @Provide() center: [number, number] = [121.446228, 31.178528];
    @Provide() amapManager = amapManager;
    @Provide()
    marker: object = {
      position: [121.446228, 31.178528],
      events: {
        click: () => {
          this.$nextTick(() => {
            this.currentWindow.visible = true;
          });
        }
      },
      visible: true,
      draggable: false,
      template: '<span>1</span>'
    };
    @Provide()
    currentWindow: any = {
      position: [121.446228, 31.178588],
      content:
        '<b>上海形趣科技有限公司</b><br/>上海市徐汇区天钥桥路909-915号D1国际创意园区2号楼107-108',
      visible: false,
      events: {
        close: () => {
          this.currentWindow.visible = false;
        }
      }
    };
    @Provide() isPhone: boolean = isPhone();
    @Prop() AmapHidden: boolean = false;

    showIcon (e:any) {
      this.currentIndex = e.currentTarget.dataset.index;
      this.iconShow = !this.iconShow;
    }
  }
</script>

<style lang="scss" scoped>

  .hidden {
    display: none;
  }

  .cls-1 {
    fill: none;
  }

  .cls-2, .icon-color {
    fill: #707070;
  }

  .cls-3 {
    clip-path: url(#clip-path);
  }

  .cls-4 {
    fill: #fff;
  }

  .footer-content {
    position: relative;
  }

  .mobile-phone-box {
    position: absolute;
    font-size: .7rem;
    letter-spacing: .05rem;
    bottom: -1.45rem;
    z-index: 10;
    left: 3.6rem;
	background-color: #f2f2f1;
	.icon {
	    float: left;
		height: .7rem;
		width: .7rem;
		position: relative;
		top: .13rem;
		margin-right: 10px;
	}
    a {
	   display: block;
	   float: left;
       color: #474747;
    }
  }

  .pc-phone-box {
    position: absolute;
    right: 0;
	bottom: -.02rem;
    letter-spacing: 1px;
	.icon {
		height: .18rem;
		width: .18rem;
		margin-right: 10px;
		float: left;
		top: .046rem;
		position: relative;
	}
    a {
		display: block;
		float: left;
		font-size: .2rem;
		color: #474747;
    }
  }

</style>
