<template>
  <main class="app"  v-lazy-container="{ selector: 'img' }">
    <!--pc端样式-->
    <div class="pc-join visible-lg-block" v-lazy:background-image="require('../assets/img/join-us/pc/join-us-head.jpg')">
    </div>
    <main class="visible-lg pc-recruit">
      <div>
        <div class="join-header-bg" v-lazy:background-image="require('../assets/img/join-us/pc/pc-join-header.jpg')"></div>
      </div>
      <div>
        <div class="join-benefit-bg"  v-lazy:background-image="require('../assets/img/join-us/pc/pc-benefit.png')"></div>
      </div>
      <div class="join-benefit">
        <div class="gift-padding">
          <div class="gift" v-lazy:background-image="require('../assets/img/join-us/pc/pc-gift.jpg')"></div>
        </div>
        <div class="benefit-text">
          <div>
            <p v-for="(item, index) in denefitList" :key="index">{{index+1}}.{{item}};</p>
            <p class="benefit-focus">--- 更多福利等你来体验！</p>
          </div>
        </div>
      </div>
      <section class="job-content">
        <div class="job-wrap">
          <div class="recruit-job">招聘职位</div>
          <div class="recruit-category">
            <div class="category-item" :class="currentIndex===0?'active':''" @click="selectCategory(0)">技术&产品</div>
            <div class="category-item" :class="currentIndex===1?'active':''" @click="selectCategory(1)">运营&市场</div>
          </div>

          <div class="job-page job-page">
            <div class="job-row clearfix" v-for="(ele, ind) in jobList[currentIndex].length/2" :key="ind">
              <div class="job-item"
                   v-if="item.show"
                   v-for="(item, index) in (jobList[currentIndex][ind*2+1] ? [jobList[currentIndex][ind*2], jobList[currentIndex][ind*2+1]]: [jobList[currentIndex][ind*2]])"
                   :key="index"
              >
                <div class="job-title">{{item.title}}</div>
                <div class="job-conntent" v-if="item.future">
                  <div class="job-content-title">「未来,我们希望你能:」</div>
                  <div class="job-content-list">
                    <p v-for="(element, i) in item.future" :key="i">
                      {{i+1}}.{{element}};
                    </p>
                  </div>
                </div>
                <div class="job-conntent" v-if="item.UHave">
                  <div class="job-content-title">「我们需要的你拥有:」</div>
                  <div class="job-content-list">
                    <p v-for="(element, i) in item.UHave" :key="i">
                      {{i+1}}.{{element}};
                    </p>
                  </div>
                </div>
                <div class="job-conntent" v-if="item.add">
                  <div class="job-content-title">「这些还能为你加分:」</div>
                  <div class="job-content-list">
                    <p v-for="(element, i) in item.add" :key="i">
                      {{i+1}}.{{element}};
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>


    <!--手机端样式-->
    <div class="m-join hidden-lg" v-lazy:background-image="require('../assets/img/phone-img/phone-join-us.jpg')">
    </div>
    <main class="hidden-lg">
      <section class="mobile-header-word-box">
        <p> 一说起工作,</p>
        <p>年轻的你是不是就开始倍感话题的沉重？</p>
        <p>是不是想到了熬夜、加班、没时间管理自己,</p>
        <p> 然后默默地想象着自己“过劳肥”却又无能为力？</p>
        <p> 想努力工作又想保持健康？</p>
        <p>还想保持帅气&美丽？</p>
        <p>继续看下去,有惊喜在等待着你~</p>
      </section>
      <div class="mobile-train-line">
        <div v-lazy:background-image="require('../assets/img/join-us/mobile/train.png')"></div>
      </div>
      <section class="mobile-if-you-word-box">
        <p>如果你… </p>
        <p>勇敢、坚韧、有责任感,还非常能“扛”；</p>
        <p>如果你… </p>
        <p>掌握着足够实战的专业知识并想探索新鲜事；</p>
        <p>如果你… </p>
        <p>总有新点子,还能常常提供惊喜,创造奇迹；</p>
        <p>如果你… </p>
        <p>热衷运动,想拥有令人悦目的外表与身材… </p>
        <p>那么,快来吧！</p>
        <p>与我们一起,去给这个活力的世界助燃！</p>
      </section>
      <div class="ring">
        <img data-src="http://static.officialsite.shapejoy.com/img/join-us/mobile/ring.gif" alt="转圈">
      </div>
      <section class="mobile-team-introduce">
        <h4>
          <strong>福利待遇 WELFARE TREATMENT</strong>
        </h4>
        <p>我们是一个充满活力的团队,愿为有才华的你提供一份挑战和乐趣同在的工作……</p>
        <p>在这里,你可以得到：</p>
        <div class="p-center">
          <p>一份可以让你感到自豪的薪资待遇；</p>
          <p>一个可以让你获得认可的学习平台；</p>
          <p> 一个可以让你享受赞许的晋升机会；</p>
          <p>……</p>
        </div>
        <p>当然了,你还可以：</p>
        <div class="p-center">
          <p>携手颜值奇高的年轻团队,</p>
          <p>时刻在工作中感觉时光穿越的美好……</p>
        </div>
      </section>
      <div class="grass">
        <img data-src="http://static.officialsite.shapejoy.com/img/join-us/mobile/grass.png" alt="小草">
      </div>
      <section class="mobile-company-offers">
        <p>除此之外,公司还提供：</p>
        <p>1．年度13薪,有机会获得期权激励,每周双休,除上线外周末不加班；</p>
        <p>2．技术、商务英语免费培训,在线培训课程补贴,共享图书馆；</p>
        <p>3. 现磨咖啡、下午茶、水果、饮料供应；</p>
        <p>4. 专业教练动作餐食指导,免费黑科技产品辅助健身；</p>
        <p>5. 生日&节日&结婚礼物、新生儿礼物、节日聚会趴体、高温+严寒补贴；</p>
        <p>6. 不定期免费肩颈按摩,携家属的观影、话剧、聚餐等活动；</p>
        <p>……</p>
      </section>
      <div class="mobile-star">
        <section>
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 36 34.3"
               style="vertical-align: middle;max-width: 100%;box-sizing: border-box;"
               width="36">
            <g style="box-sizing: border-box;">
              <path
                d="M12.5,7.2c0-0.9,2.4-4.3,2.1-4.8C14.4,1.9,10,4.6,9.4,4.3C8.8,4.1,5.6-0.3,5.3,0   C4.6,0.8,5.6,5.5,5.4,6C5.1,6.5,0.2,7.7,0,8.5c-0.2,0.8,5.5,1.2,5.7,1.8c0.2,0.5,0,5.4,0.9,5.6c0.9,0.2,3.2-4.3,3.6-4.6   c0.4-0.3,6.2,1,6.6,0.5C17.3,11.2,12.5,8.1,12.5,7.2z M14.1,10.8c-0.4,0.5-3.6-0.8-4.4-0.5C9,10.6,7.5,14.3,7,14.1   C6.4,13.9,7.2,9.7,6.7,9s-3.3-0.3-3.4-1c-0.1-0.7,3-0.8,3.4-1.6C7.1,5.6,5.8,2.2,6.1,2c0.3-0.2,2.5,2.9,3,3.3   c0.5,0.4,3.5-1.9,3.6-1.2c0.1,0.7-1.7,2.7-1.6,3.3C11.2,8,14.5,10.3,14.1,10.8z"
                fill="rgb(153, 134, 117)" style="box-sizing: border-box;"></path>
              <path
                d="M32.7,14.1c0,0,1-3.2,0.6-3.4c-0.4-0.1-2.8,1.8-2.8,1.8s-3.3-2.2-3.6-1.9c-0.3,0.3,1.3,3.8,1.3,3.8   s-2.3,1.6-2.3,2.2c0.2,0.6,3.3-0.1,3.3-0.1s0.8,4.3,1.4,4.3s1.2-3.9,1.2-3.9s4.1-1,4.2-1.3C36.1,15.3,33.3,14.4,32.7,14.1z"
                fill="rgb(217, 162, 97)" style="box-sizing: border-box;"></path>
              <path
                d="M11,28.5c0,0-1.6-3.7-2.1-3.7c-0.5-0.1-1.5,3.7-1.5,3.7s-3.5-0.2-3.6,0.4c-0.1,0.6,3.1,1.9,3.1,1.9   s-1.2,2.9-0.9,3.2c0.3,0.3,3.2-1.5,3.4-1.6c0.2-0.1,3.6,2.1,3.9,1.8c0.4-0.3-1.2-2.8-1.5-3.4c0,0,3-1.9,2.9-2.2   C14.4,28.2,11,28.5,11,28.5z"
                fill="rgb(217, 162, 97)" style="box-sizing: border-box;"></path>
            </g>
          </svg>
        </section>
      </div>
      <section class="mobil-now">
        <p>Now,</p>
        <p>心动了的小伙伴们,</p>
        <p>我们的招聘岗位和要求来啦！</p>
      </section>
      <div class="recruitment">
        <img data-src="http://static.officialsite.shapejoy.com/img/join-us/mobile/socialr.jpg" alt="社招岗位" srcset="">
      </div>
      <div class="job">
        <div v-for="(item, index) in [...jobList[0], ...jobList[1]]" :key="index" v-if="item.show">
          <div class="job-title">
            <div class="line"></div>
            <div class="title">{{item.title}}</div>
          </div>
          <div class="sec-title" v-if="item.future">
            <div class="round">A</div>
            <p class="advantage">未来我们希望你能：</p>
          </div>
          <div class="job-content" v-if="item.future">
            <p v-for="(element, i) in item.future" :key="i">{{i+1}}.{{element}};</p>
          </div>
          <div class="sec-title" v-if="item.UHave">
            <div class="round">B</div>
            <p class="advantage">我们需要的你拥有:</p>
          </div>
          <div class="job-content" v-if="item.UHave">
            <p v-for="(element, i) in item.UHave" :key="i">{{i+1}}.{{element}};</p>
          </div>
          <div class="sec-title" v-if="item.add">
            <div class="round">C</div>
            <p class="advantage">这些还能为你加分:</p>
          </div>
          <div class="job-content" v-if="item.add">
            <p v-for="(element, i) in item.add" :key="i">{{i+1}}.{{element}};</p>
          </div>
        </div>
      </div>
      <div class="mailbox">
        <p>简历请投至：
          <strong>jobs@myshape.ai</strong>
        </p>
        <p>晴空万里</p>
        <p>myShape等你●♡●</p>
      </div>
    </main>
</main>
</template>
<script lang="ts">
import { Component, Vue, Provide } from "vue-property-decorator";

@Component({})
export default class JoinUs extends Vue {
  @Provide() currentIndex: number = 0;
  @Provide()
  denefitList: string[] = [
    "年终奖,有机会获得期权激励",
    "双休,除上线外周末不加班",
    "技术、商务英语免费培训,在线培训课程补贴,共享图书馆",
    "现磨咖啡,一点点葡茶皇茶快乐柠檬ETC.、健康零食、水果、饮料供应",
    "免费健身,专业教练动作餐食指导,黑科技产品辅助健身",
    "生日礼物、结婚礼物、新生儿礼物、高温/严寒补贴、节日聚会趴,贴心节日礼物",
    "免费肩颈按摩,不定期携家属的观影、话剧、聚餐KTV等活动"
  ];
  @Provide()
  jobList: Array<Array<object>> = [
    [
      {
        title: "高级UNITY开发工程师",
        future: [
          "负责myShape相关产品的Unity程序开发工作",
          "分析需求并设计出合适解决方案的",
          "和策划/美术/程序/运营等其他部门配合好,充分利用现有资源共同达成目标",
          "负责Unity3D项目资源管理,程序性能优化",
          "负责Unity3D项目的系统逻辑,UI,工具,图形特效的程序开发",
          "协同策划和美术,持续优化和改善程序",
          "完成部分配套工具和模块功能的开发"
        ],
        UHave: [
          "本科以上学历,计算机及相关专业毕业者优先",
          "3年及以上Unity程序开发经验,有体感游戏开发经验者优先",
          "精通Unity渲染和性能优化技术,能在表现力和性能上做很好的权衡",
          "精通C#语言",
          "精通数据结构及常用算法,具有较强的分析解决问题能力",
          "能熟练使用NGUI及各种Unity插件",
          "熟悉Shader和计算机图形学",
          "有良好的面向对象设计思想以及良好的编程习惯",
          "对于创新及解决具有挑战性的问题充满激情",
          "热爱技术,学习能力强,求知欲强、拥有较强的好奇心和进取心,能够持续关注和学习业界最新技术动态"
        ],
        add: [
          "有AI开发经验",
          "对云平台有所了解,有使用过Azure,阿里云等相关云平台产品的经历",
          "有在应用商店(IOS或者Android)中发布过用Unity开发的游戏",
          "具有创业热情,愿意与公司共同成长"
        ],
        show: true
      },{
        title: "高级JAVA开发工程师",
        future: [
          "负责myShape相关产品的后端开发工作",
          "负责myShape微信小程序和公众号后端的开发工作",
          "负责维护与优化现有的后端项目",
          "负责myShape相关产品管理平台的开发工作",
        ],
        UHave: [
          "本科以上学历,计算机及相关专业毕业者优先",
          "3年及以上Java程序开发经验,具有较强的设计和开发能力",
          "熟练掌握软件开发流程",
          "Java基础扎实,熟悉J2EE体系结构,熟练掌握J2EE企业级应用开发技能",
          "精通但不限于Spring Cloud, Hibernate, MySQL",
          "熟练掌握Spring-Boot、Spring-MVC、Junit等相关主流框架技术",
          "精通数据结构和算法",
          "熟悉多线程、分布式、缓存、消息队列等相关机制",
          "熟悉容器技术,对Docker有一定的了解",
          "精通计算机网络,熟悉TCP/IP协议,熟悉Netty,RestAPI",
          "精通计算机网络,熟悉TCP/IP协议,熟悉Netty,RestAPI",
          "热爱技术,学习能力强,求知欲强、拥有较强的好奇心和进取心 ,能够持续关注和学习业界最新技术动态",
        ],
        add: [
          "具有物联网行业开发经验",
          "熟悉Kubernetes",
          "精通其他开发语言,例如golang, python, C# 或者C++",
          "对云平台有所了解,有使用过Azure,阿里云等相关云平台产品的经历",
          "有发起或者参与过开源项目的经历, 拥有Github（或其他开源平台）账号并有持续的提交记录"
        ],
        show: true
      },{
        title: "视觉算法工程师",
        future: [
          "研究公司AI产品的算法",
          "数据提取与算法匹配",
          "研究计算机视觉，人体骨骼提取算法",
        ],
        UHave: [
          "硕博学历，计算机软件相关专业，在读硕博研究方向相符亦可",
          "计算机视觉，人体骨骼提取算法",
          "有深度学习相关经验",
          "熟悉python，tensorflow/caffe，c/c++，opencv",
          "了解GPU，FPGA，ASIC原理",
          "了解openpose优先",
          "有实体识别、脸部识别、特征识别研究经验优先",
        ],
        show: true
      },{
        title: "运维工程师",
        future: [
          "负责myShape产品的运维,能在保障服务的稳定高效的基础上不断提升用户体验",
          "负责应用服务和数据库相关的部署、维护和优化工作",
          "开发高效的自动化运维、管理工具,提升运维工作效率",
          "各类故障的应急响应、处理、协调,保证产品的业务连续性",
          "优化myShape现有的运维解决方案,包括但不限于柔性容灾、弹性扩容与防攻击等"
        ],
        UHave: [
          "精通MySQL,数据库的操作和维护",
          "熟练各种互联网应用服务:nginx/lvs/kafka/tomcat等,熟悉高可用机制,有监控和容灾的实际经验",
          "熟练使用Linux下的常用工具,熟练掌握Python / Shell / Go / PHP中至少一门语言",
          "自学能力及沟通能力强,组织协调能力强,有责任心,分析和解决问题的能力强",
          "有大型互联网公司运维工作经验优先,211、985院校优先",
        ],
        show: false
      }
      ],
      [
        {
          title: "市场运营经理",
          future: [
            "根据数据，负责myShape产品线上线下活动策划，提升用户体验",
            "管理myShape各线下合作点的推广和活动，跟踪效果，提升用户流量和转化",
            "参与沟通合作资源，帮助myShape用户获得更多的优惠资源，能够独立开发合作更佳",
          ],
          UHave: [
            "3年以上互联网或O2O产品运营经验",
            "能够独立策划和执行活动，有数据分析能力",
            "能够带领团队，激励组员共同推进工作",
            "学习能力强，且能接纳高速发展的工作环境"
          ],
          add: [
            "拥有丰富的健身行业资源，对有氧运动有理解及独特见解",
            "形象良好，颜值高身材好",
            "具有创业热情,愿意与公司共同成长"
          ],
          show: true
        }, {
        title: "市场品牌经理",
        future: [
          "负责确定品牌基调，制定品牌宣传计划",
          "维护公司品牌对外渠道，包括官网、自媒体等",
          "建立并维护合作资源及媒体伙伴关系",
          "协助处理品牌PR事件，维护品牌形象",
          "协助策划和执行品牌线上线下活动"
        ],
        UHave: [
          "重点本科或以上学历，营销、广告、新闻、中文、公共关系等相关专业优先",
          "有3年以上品牌规划和执行经验，有一定的品牌合作资源",
          "有参与品牌推广执行工作经验，了解具体的操作和执行",
          "工作认真负责，超强执行力与沟通能力",
          "公关公司、媒体公司、设计行业工作经验优先"
        ],
        show: true
      }, {
        title: "用户经理",
        future: [
          "沟通myShape粉丝，建立用户服务体系，并定期调研用户需求",
          "独立策划用户活动，组织用户参与其中，提升用户参与度和归属感",
          "参与沟通合作资源，帮助myShape用户获得更多优惠资源，能够独立开发合作更佳",
        ],
        UHave: [
          "3年以上互联网用户运营经验",
          "能够独立策划和执行活动，有数据分析能力",
          "能够带领团队，激励组员共同推进工作",
          "学习能力强，且能接受高速发展的工作环境"
        ],
        add: [
          "拥有丰富的健身行业资源，对有氧运动有理解及独特见解",
          "有过公会、论坛、群组组织和管理经验",
          "形象良好，颜值高身材好",
          "具有创业热情,愿意与公司共同成长"
        ],
        show: true
      }, {
        title: "用户服务专员",
        future: [
          "沟通myShape粉丝用户，建立与用户的良好关系，即时反馈用户意见",
          "协助组织用户活动，定期调研用户需求，提升用户参与度和归属感",
        ],
        UHave: [
          "1年以上互联网用户服务经验",
          "良好的耐心和用户热情",
          "能够承受一定压力",
          "学习能力强，且能接纳高速发展的工作环境"
        ],
        add: [
          "对有氧运动有理解及独特见解",
          "形象良好，颜值高身材好",
          "具有创业热情,愿意与公司共同成长"
        ],
        show: true
      }, {
        title: "课程设计师",
        future: [
          "负责设计myShape产品内的健身课程及后续优化工作",
          "负责沟通谈判拍摄供应商，寻找场地，课程视频拍摄的督导工作",
          "参与健身课程的包装及推广工作，使其更受用户欢迎"
        ],
        UHave: [
          "3年以上健身教练/指导经历",
          "对有氧运动有深入理解及独特见解",
          "学习能力强，且能接纳多种训练体系",
          "流利的英语口语&书写能力，会翻墙，熟练使用Ins，Youtube，Facebook等寻找最新健身内容动向和红人视频"
        ],
        add: [
          "拥有丰富的健身行业资源",
          "运动训练相关专业，有NSCA、NASM、ACSM认证者优先录用",
          "形象良好，颜值高身材好",
          "互联网运营岗位相关经验"
        ],
        show: true
      }, {
        title: "课程设计（实习生）",
        future: [
          "协助课程设计师完成课程内容的设计及优化",
          "有能力及时处理用户反馈并进行归纳整理",
        ],
        UHave: [
          "大专以上学历，能够保证每周至少3天的全职实习，连续实习期不少于3个月",
          "做事细心、有耐心",
          "喜欢健身运动，对市面上现有的健身产品有过一定的了解，有健身经验者优先",
          "英语好，会翻墙，熟练使用Ins，Youtube，Facebook等寻找最新健身内容动向和红人视"
        ],
        show: true
      }, {
        title: "线下活动执行（实习生）",
        future: [
          "参与人工智能健身设备的线下活动运营和执行，维持设备的活跃度和用户数",
          "向更多用户介绍和演示人工智能健身私教的使用",
          "收集用户的反馈，及时处理并进行归纳整理，上报给产品运营团队"
        ],
        UHave: [
          "能保证每周至少3天的全职实习，连续实习期不少于3个月",
          "做事细心、有耐心；性格外向，形象气质好。普通话流利，沟通与应变能力强",
          "喜欢健身运动，对市面上现有的健身产品有过一定的了解，有健身经验者优先",
        ],
        add: [
          "对有氧运动有理解及独特见解",
          "形象良好，颜值高身材好",
          "具有创业热情,愿意与公司共同成长"
        ],
        show: true
      }, {
        title: "新媒体运营（实习生）",
        future: [
          "负责myShape微信公众号的内容运营，提高用户关注度及转化",
          "配合团队及其他部门，针对不同的用户群体，制造其感兴趣的话题并进行内容推送",
          "配合团队及其他部门，完成相关运营工作"
        ],
        UHave: [
          "大专以上学历，文学、广告、传媒、新闻类专业优先，熟练使用word、excel、ppt等，熟练使用photoshop优先",
          "有策划、文案、编辑等方面的工作或实习经验，具备优秀的创造力和书面表达能力，良好的创新能力",
          "了解和热爱移动互联网，热爱创造新事物，网络重度患者优先；发布过大量传播量高的微信、微博或其他社交媒体文章者优先；长期混迹于微信公众号、豆瓣小组者优先",
        ],
        show: true
      }
      ]
    ];

    selectCategory(index: number): void {
      this.currentIndex = index;
    }
  }
</script>

<style lang="scss" scoped src="../assets/style/join-us.scss"></style>

