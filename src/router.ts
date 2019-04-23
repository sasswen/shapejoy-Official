// import Vue from 'vue';
// import Router from 'vue-router';
import VueRouter from 'vue-router';

const Home = () => import('./views/Home.vue');
const About = () => import('./views/About.vue');
const Course = () => import('./views/Course.vue');
const CourseDetails = () => import('./views/CourseDetails.vue');
const JoinUs = () => import('./views/JoinUs.vue');
const Disclaimer = () => import('./views/Disclaimer.vue');
const PrivacyClause = () => import('./views/PrivacyClause.vue');
const CameraDescription = () => import('./views/CameraDescription.vue');
const CameraVideoDescription = () => import('./views/CameraVideoDescription.vue');
const Ambassador = () => import('./views/Ambassador.vue');
const ProductIntroduction = () => import('./views/ProductIntroduction.vue');

// Vue.use(Router);

export default new VueRouter({
  mode: 'history',
  scrollBehavior: () => {
    return { x: 0, y: 0 };
  },
  routes: [
    {
      path: '*',
      redirect: '/',
      meta: { title: 'myShape 形趣科技' }
    },
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: { title: 'myShape 形趣科技' }
    },
    {
      path: '/about',
      name: 'about',
      component: About,
      meta: { title: 'myShape 关于我们' }
    },
    {
      path: '/productintroduction',
      name: 'productintroduction',
      component: ProductIntroduction,
      meta: { title: 'myShape 产品介绍' }
    },
    {
      path: '/course',
      name: 'course',
      component: Course,
      meta: { title: 'myShape 课程列表' }
    },
    {
      path: '/coursedetails/:id',
      name: 'coursedetails',
      component: CourseDetails,
      meta: { title: 'myShape 课程详情' }
    },
    {
      path: '/joinus',
      name: 'joinus',
      component: JoinUs,
      meta: { title: 'myShape 加入我们' }
    },
    {
      path: '/disclaimer',
      name: 'disclaimer',
      component: Disclaimer,
      meta: { title: 'myShape 免责声明' }
    },
    {
      path: '/privacy',
      name: 'privacy',
      component: PrivacyClause,
      meta: { title: 'myShape 隐私条款' }
    },
    {
      path: '/cameradescription',
      name: 'cameradescription',
      component: CameraDescription,
      meta: { title: 'myShape 摄像头支架使用指南' }
    },
    {
      path: '/cameravideodescription',
      name: 'cameravideodescription',
      component: CameraVideoDescription,
      meta: { title: 'myShape 摄像头视频讲解' }
    },
    {
      path: '/ambassador',
      name: 'ambassador',
      component: Ambassador,
      meta: { title: 'myShape 明星大使' }
    }
  ]
});
