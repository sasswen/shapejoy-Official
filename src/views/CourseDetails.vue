<template>
    <div class='course-details'>
        <div :class="[index == 1 ? 'phone-detail hidden-lg' : 'pc-detail visible-lg-block', 'setCurrentBackground']" v-for="index in 2" :key="index" :style="{ backgroundImage: 'url(' + (index == 1 ? courseDetailsMobileHeaderBackgroundImage : courseDetailsPCHeaderBackgroundImage) + ')'}">
            <div class='course-describe' v-for="item in CourseDescribe" :key="item.id">
                <p class='name'>{{item.name}}</p>
                <p class='describe'>{{item.description}}</p>
                <div class='level-duration'>
                    <p>难度:S{{item.level}}&nbsp;&nbsp;时长:{{item.duration}}</p>
                </div>
            </div>
        </div>
        <div class='course-content visible-lg-block'>
          <p class='col-lg-8'>{{content}}</p>
        </div>
        <div class='phone-courses-title hidden-lg'>
            <p>{{content}}</p>
        </div>
        <div class='pc-course-content'>
            <div class='col-sm-12 col-xs-12 col-lg-8 phone-courses-list coursers-covers-list '>
                <ul>
                    <li v-for="item in CourseDetailList"
                        :key="item.index"
                        class="vjs-custom-skin"
                    >
                        <div
                          class="setCurrentBackground video-js"
                          :style="{ backgroundImage:'url('+ jointStr(item.coverResource? item.coverResource.middle : '') +')'}"
                          @click="showActionVideo(item.videoResource, item.coverResource)"
                        >
                          <button class="vjs-big-play-button" type="button" title="Play Video" aria-disabled="false">
                            <span aria-hidden="true" class="vjs-icon-placeholder"></span>
                            <span class="vjs-control-text" aria-live="polite">Play Video</span>
                          </button>
                        </div>
                        <p>{{item.name}}</p>
                    </li>
                </ul>
            </div>
        </div>
        <div class='phone-courses-bottom-word use-shapjoy'>
            <p>请使用myShape产品进行完整训练</p>
        </div>
        <div class="action-video-wrapper" v-if="showVideo">
          <div class="action-video-shadow"  @click="hideActionVideo"></div>
          <videoPlayer
            :class="['video-player', 'vjs-custom-skin' , 'action-video', isPhone ? 'mobile' : 'pc']"
            ref="videoPlayer"
            :playsinline="true"
            :options="playerOptions"
            @play="onPlayerPlay($event)"
            @pause="onPlayerPause($event)"
          />
        </div>
        <audio :src="audioUrl" preload="preload" ref="audio" id="audio_player"></audio>
    </div>
</template>

<script lang='ts'>
import { Component, Provide, Mixins } from "vue-property-decorator";
import { isPhone, secondFormatToMinute, objectArrayUnique } from "@/utils/tools";
import { getCourseDetails } from "@/api/index";
import { videoPlayer } from "vue-video-player";
import MyMixin from "@/api/mixins.ts";

import "video.js/dist/video-js.css";
import "vue-video-player/src/custom-theme.css";

@Component({
  components: {
    videoPlayer
  }
})
export default class CourseDetails extends Mixins(MyMixin) {
  @Provide()
  courseDetailsPCHeaderBackgroundImage: string = "";
  @Provide()
  courseDetailsMobileHeaderBackgroundImage: string = "";
  @Provide()
  isPhone: boolean = isPhone();
  @Provide()
  CourseDetailList: any = [];
  @Provide()
  content: string = "课程内容";
  @Provide()
  CourseDescribe: Array<Object> = [{}];

  @Provide()
  showVideo: boolean = false;
  @Provide()
  playerOptions: any = {
    autoplay: false, // 如果true,浏览器准备好时开始回放。
    muted: true, // 默认情况下将会消除任何音频。
    loop: false, // 导致视频一结束就重新开始。
    preload: "auto", // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
    language: "zh-CN",
    aspectRatio: "16:9", // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如'16:9'或'4:3'）
    fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
    sources: [
      {
        type: "video/mp4",
        src: "http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4" // 你的视频地址（必填）
      }
    ],
    poster: "", // 你的封面地址
    notSupportedMessage: "此视频暂无法播放，请稍后再试"
  };
  @Provide()
  audioUrl: string = "";
  @Provide()
  videoUrl: string = "";

  created(): void {
    // 为了不会对parseInt('010')这种代码产生误解，还是尽量把第二个参数写上
    const courseId: number = parseInt(this.$route.params.id, 10);
    let filterRestActions: Array<Object> = [];

    if (courseId) {
      getCourseDetails(courseId)
        .then((res: any) => {
          if (res.data) {
            this.courseDetailsPCHeaderBackgroundImage = this.jointStr(
              res.data.coverResource.extraLarge
            );
            this.courseDetailsMobileHeaderBackgroundImage = this.jointStr(
              res.data.coverResource.middle
            );
            this.CourseDescribe = [
              {
                name: res.data.name,
                description: res.data.description,
                level: res.data.level,
                duration: secondFormatToMinute(res.data.duration)
              }
            ];
            res.data.actionResponses.map((value: any) => {
              if (value.name !== "休息") {
                filterRestActions.push(value);
              }
            });
            objectArrayUnique(filterRestActions);
            this.CourseDetailList = filterRestActions;
            this.audioUrl = res.data.bgmResource
              ? this.jointStr(res.data.bgmResource.middle)
              : "";
          } else {
            this.backCoursePage();
          }
        })
        .catch((error: any) => {
          this.backCoursePage();
        });
    } else {
      this.backCoursePage();
    }
    this.CourseDescribe.map((value: any) => {
      value.duration = secondFormatToMinute(value.duration);
    });
  }

  // 显示video，并将视频路径替换成传入的路径
  showActionVideo(videoUrl: any, coverUrl: any): void {
    this.playerOptions.sources[0].src = videoUrl
      ? this.jointStr(videoUrl.middle)
      : "";
    this.playerOptions.poster = coverUrl ? this.jointStr(coverUrl.middle) : "";
    // this.videoUrl = videoUrl ? this.jointStr(videoUrl.middle) : '';
    this.showVideo = true;
  }

  // 隐藏video
  hideActionVideo(): void {
    this.showVideo = false;
  }

  // 当播放器开始播放时,音乐一起播放
  onPlayerPlay(event: any): void {
    if (!isPhone) {
      const refAudio: any = this.$refs.audio;
      refAudio.play();
    }
  }

  // 当播放器暂停时，音乐也要暂停
  onPlayerPause(event: any): void {
    const refAudio: any = this.$refs.audio;
    refAudio.pause();
  }

  backCoursePage(): void {
    this.$router.push({
      path: "course",
      name: "course"
    });
  }
}
</script>

<style lang='scss' scoped src='../assets/style/courseDetails.scss'></style>
<style lang="scss">
.vjs-custom-skin > .video-js .vjs-big-play-button {
  background-color: #999;
  width: 2em;
  border-radius: 50%;
}
.video-js:hover .vjs-big-play-button,
.vjs-custom-skin > .video-js .vjs-big-play-button:focus,
.vjs-custom-skin > .video-js .vjs-big-play-button:active {
  background-color: #7a66fe;
}
.video-js .vjs-big-play-button .vjs-icon-placeholder:before,
.vjs-button > .vjs-icon-placeholder:before,
.video-js .vjs-modal-dialog,
.vjs-modal-dialog .vjs-modal-dialog-content{
  position: absolute;
  top: -1px;
  left: 0;
  width: 100%;
  height: 100%;
}
.setCurrentBackground.video-js {
  cursor: pointer;
  .vjs-big-play-button {
    font-size: 1rem;
    margin-left: -1em;
    @media only screen and (min-width: 1201px) {
      font-size: 0.3rem;
    }
  }
}
.pc .vjs-big-play-button{
  left: 52% !important;
}
.mobile .vjs-big-play-button {
  left: 54% !important;
}
</style>

