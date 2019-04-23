<template>
<div id='cameraVideoDescription'>
    <video controls="" name="media" poster='http://static.officialsite.shapejoy.com/image/support-standing.png'>
        <source src="http://static.officialsite.shapejoy.com/video/support-standing.mp4" type="video/mp4" />
    </video>
    <video controls="" name="media" poster='http://static.officialsite.shapejoy.com/image/support-suspension.png'>
        <source src="http://static.officialsite.shapejoy.com/video/support-suspension.mp4" type="video/mp4" />
    </video>
</div>
</template>

<script lang="ts">
import {
    Component,
    Vue
} from "vue-property-decorator";

@Component({})
export default class CameraVideoDescription extends Vue {
    mounted(): void {
        let topNav: any = document.querySelector("#topNav");
        let footer: any = document.querySelector("footer");
        let logo: any = document.querySelector("#logo");
        topNav.style.display = "none";
        logo.style.display = "none";
        footer.style.display = "none";
        const innerHeight = window.innerHeight;
        let cameraVideoDescription: any = document.querySelector("#cameraVideoDescription");
        cameraVideoDescription.style.height = `${innerHeight}px`;
    }
}
</script>

<style lang="scss" scoped>
#cameraVideoDescription {
    height: 100%;
    width: 100%;
}

@media (min-width: 993px) {
    #cameraVideoDescription {
        display: flex;
        justify-content: center;
        flex-direction: row-reverse;
        background-color: #000;
    }
	video {
		width: 45%;
	}
}

@media (max-width: 992px) {
    video {
        height: 250px;
        width: 90%;
        margin-left: 5%;
        margin-top: 20px;
        background-color: #fff;
    }

    #cameraVideoDescription {
        // background-color: #fff;
        background-color: #000;
    }
}
</style>
