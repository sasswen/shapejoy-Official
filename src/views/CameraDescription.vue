<template>
<div id='cameraDescription'>
    <div class='support'>
        <img src="http://static.officialsite.shapejoy.com/image/support.png" alt="支架">
    </div>
	<div class='viewVideo'>
		<router-link to="cameraVideoDescription">1.摄像头支架<br/>视频使用指南</router-link>
	</div>
	<div class='viewPDF'>
		<a href="http://static.officialsite.shapejoy.com/pdf/CameraBracket.pdf">2.摄像头支架<br/>PDF使用指南</a>
	</div>
	<div class='logo'>
		<img src="http://static.officialsite.shapejoy.com/image/logo.png" alt="logo">
	</div>
</div>
</template>

<script lang="ts">
import {
    Component,
    Vue
} from "vue-property-decorator";

@Component({})
export default class CameraDescription extends Vue {
    mounted(): void {
        let topNav: any = document.querySelector("#topNav");
        let footer: any = document.querySelector("footer");
        let logo: any = document.querySelector("#logo");
        topNav.style.display = "none";
        logo.style.display = "none";
        footer.style.display = "none";
        const innerHeight = window.innerHeight;
        let cameraDescription: any = document.querySelector("#cameraDescription");
        cameraDescription.style.height = `${innerHeight}px`;
    }
}
</script>

<style lang="scss" scoped>
#cameraDescription {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;

    a {
        color: #000;
    }

    .logo {
        width: 100%;
        text-align: center;
        position: fixed;
    }
}

@media (min-width: 993px) {
    #cameraDescription {
		
        .support {
			img {
				height: 360px;
				width: 400px;
				margin-top: -440px;
			}
		}
		.viewVideo {
			margin-bottom: 60px;
		}
        .viewVideo,
        .viewPDF {
            text-align: center;
            height: 50px;
            width: 100%;
			font-size: 26px;
        }

        .logo {
            bottom: 1rem;

            img {
                height: 100px;
                width: 100px;
            }
        }
    }
}

@media (max-width: 992px) {
    #cameraDescription {
		.support {
            img {
                height: 12rem;
                width: 12rem;
                margin-top: -16rem;
            }
        }

        .viewVideo {
            margin-top: -2rem;
			margin-bottom: 3rem;
        }

        .viewVideo,
        .viewPDF {
			text-decoration: underline;
            text-align: center;
            height: 2rem;
            width: 100%;
            font-size: 26px;
        }

        .logo {
            bottom: 2rem;

            img {
                height: 5rem;
                width: 5rem;
            }
        }
    }
}
</style>
