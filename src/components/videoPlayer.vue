<template>
  <div class="video-wrapper">
    <video ref="video" :src="videoUrl" @play="videoPlay" @pause="videoPause" controls :class="{hide: showing}"></video>
    <canvas id="myCanvas" width="270" height="135" :class="{hide: !showing}"></canvas>
  </div>
</template>

<script lang="ts">
  import { Component, Provide, Vue, Prop } from 'vue-property-decorator';

  @Component
  export default class VideoPlayer extends Vue {
    @Provide() refVideo: any;
    @Provide() refCanvas: any;
    @Provide() ctx: any;
    @Provide() interval: any;
    @Provide() showing: boolean = false;

    @Prop(String) videoUrl!: string;


    mounted() {
      this.refVideo = this.$refs.video;
      this.refCanvas = document.getElementById('myCanvas');
      console.log(this.videoUrl, this.refCanvas);
      this.ctx = this.refCanvas.getContext('2d');
    }
    videoPlay() {
      const that = this;
      this.showing = true;
      this.$emit('videoplay');
      this.interval = window.setInterval(function() {
            that.ctx.drawImage(that.refVideo, 0, 0, 270, 135);
            //打印当前视频的播放时间
            console.log(that.refVideo.currentTime);
            //当视频结束的时候去掉循环
            if(that.refVideo.ended){
              clearInterval(that.interval)
          }
        }, 20);
    }
    videoPause() {
      this.showing = false;
      this.$emit('videopause');
    }
  }
</script>

<style lang="scss" scoped>
.video-wrapper{
  position: absolute;
  z-index: 9;
  video{
    width: 300px;
    height: 300px;
  }
  .hide{
    visibility: hidden;
  }
}
</style>


