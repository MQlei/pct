<template>
  <div class="e-hub">
    <div>
      <h4 class="mb-[13px]">The Future of Digital Experience at the Terminal</h4>
      <p>
        PCT eHub, is an application designed to transform the drivers’ experience and streamline task management at
        Piraeus Container Terminal
      </p>
      <p>(PCT). This smart solution offers speed, simplicity, and intuitive guidance, boosting user productivity and
        convenience.</p>
    </div>
    <h4 class="mb-[13px]"> Powerful Features</h4>

    <div class="flex justify-between">
      <ul class="step-list mr-[60px]">
        <h3 class="mb-[10px]">PCT eHub is your personal digital assistant for your operations inside the port:</h3>
        <li>Instant port access via personal QR code scanned at the entry gate</li>
        <li>Real - time task management: View all active jobs with one tap</li>
        <li>“My Location” – track your real - time location within the terminal through an interactive map</li>
        <li style="font-size: 20px;">PIN reset functionality for secure and simple updates to your driver card</li>
        <li>24/7 alerts & notifications for key updates, delays, and assignments</li>
        <li>Estimated Waiting Time for each task, based on whether it moves full or empty containers</li>
        <li>One - call tap to the Free Zone (LZ) for immediate assistance</li>
      </ul>
      <div>
        <!-- 替换为实际展示船舶等场景的图片 -->
        <img :src="bgPlan" alt="PCT eHub related image">
      </div>
    </div>
    <div class="mb-[30px]">
      <h4 class="mb-[10px]">Security & Ease of Use</h4>
      <h3 class="mb-[10px]">PCT eHub is built with robust security and compliance features to protect users and data:
      </h3>
      <ul class="step-list">
        <li>Secure login via PIN, fingerprint, or facial recognition</li>
        <li>Language selection and customizable settings</li>
        <li>Access to Terms of Use and Privacy Policy directly from the app</li>
      </ul>
    </div>
    <div class="imgbgbox">
      <h4 class="mb-[10px]">Key Benefits for Drivers</h4>
      <h3 class="mb-[10px]">PCT eHub is built to enhance daily operations and improve the overall driver journey:</h3>
      <ul class="step-list">
        <li>Personalized notifications on container relocation, delays, customs status, and clearance updates</li>
        <li>Less waiting, faster processing</li>
        <li>Live task visibility and forecasting</li>
        <li>Clear navigation to cargo location</li>
        <li>Simple, secure, and user - friendly interface</li>
      </ul>
    <h4 class="mb-[43px] mb-[30px]"> Key Benefits for Drivers</h4>
  </div>
    <div class="e-hub__download ">
      <div class="hub__download_box app-store mr-[60px]">
        <div class="hub__download_box_img"><img :src="appStoreIcon" alt=""></div>
        <div class="hub__download_box_txt">
          <p>Download on the</p>
          <p class="txt">App Store</p>
        </div>
      </div>
      <div class="hub__download_box google-play">
        <div class="hub__download_box_img"><img :src="googlePlayIcon" alt=""></div>
        <div class="hub__download_box_txt">
          <p>ANDROID APP ON</p>
          <p class="txts">Google play</p>
        </div>
      </div>
      <!-- <a href="#" target="_blank">
        <img :src="appStoreIcon" alt="Download on the App Store"> 
      </a>
      <a href="#" target="_blank">
        <img :src="googlePlayIcon" alt="ANDROID APP ON Google play"> 
      </a> -->
    </div>
    <div class="qubox"> 
      <div class="imgbox">
        <img :src="benefitsI1" >
      </div>
      <div class="txtbox">
        <h4>Quick Links</h4>
        <ul class="step-list">
          <li>User Manual (upload link with the user manual)</li>
          <li>Contact the Free Zone Support Team:sapn <span style="color:#1758B6 ">+30 210 409 91 56</span> </li>
        </ul>
      </div>
   
    </div>
    <div class="section-end">
      <span>END OF WEBSITE SECTION</span>
    </div>

    <div>
      <h4>Indicative creative used for mobile promos so far:</h4>
      <p>The idea is to show that the whole port operation and navigation into terminal is carried out at the palm of
        the drivers’ hands – the text reads “Welcome to the Future of Transportation Logistics”.</p>
     <div class="endclass">

    <img :src="mobilePromoImg" alt="Mobile promo image">

     </div>
    </div>

    <div>

    </div>
  </div>
</template>

<script setup>
  import crsTitle from '~/assets/images/crs-title.png';
  import bgPlan from '~/assets/images/ehubbg.png';
  import benefitsI1 from '~/assets/images/benefits-i1.png';
  // 假设应用商店、谷歌商店、移动推广图的图标路径，实际按项目调整
  // import appStoreIcon from '~/assets/images/app-store-icon.png'; 
  // import googlePlayIcon from '~/assets/images/google-play-icon.png';
  // import mobilePromoImg from '~/assets/images/mobile-promo.png'; 
  import appStoreIcon from '~/assets/images/appleimg1.png';
  import googlePlayIcon from '~/assets/images/appleimg2.png';
  import mobilePromoImg from '~/assets/images/ehubipnone.png'; 
</script>

<style lang="scss" scoped>
  .e-hub {
    background: rgba(252, 253, 255, 1);

    h4 {
      font-weight: 600;
      font-size: 25px;
      color: #333333;
      margin-top: 20px;
    }

    h3 {
      font-weight: 400;
      font-size: 23px;
      color: #333333;
    }

    p {
      color: #262729;
      /* margin-bottom: 20px; */
    }

    &__wrap {
      width: 800px;
      height: 400px;
      background: url('~/assets/images/bg-csr.png') no-repeat;
      background-size: cover;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    &__download {
      img {
        margin-right: 10px;
      }
    }

    .step-list {
      li {
        position: relative;
        padding-left: 22px;
        margin-bottom: 20px;
        color: #262729;

        &:before {
          content: "";
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          border: 5px solid rgba(26, 6, 82, 1);
          border-radius: 50%;
        }
      }
    }

    .el-divider--horizontal {
      margin: 50px 0;
    }

    .imgbgbox {
      /* background: url('~/assets/images/bg-csr.png') no-repeat;enhubcsr */
      background: url('~/assets/images/enhubcsr.png') no-repeat;

      background-position: right;
      margin-top: 40px;

    }

    .e-hub__download {

      display: flex;
      /* align-items: center; */

      .hub__download_box {
        width: 260px;
        height: 72px;
        /* background: #1A0652;#1758B6 */
        background: #1758B6;

        border-radius: 4px;

        display: flex;
        /* text-align: center; */
        /* align-items: center; */

        .hub__download_box_img {
          width: 24px;
          height: 24px;
          margin: 24px 28px;

        }

        .hub__download_box_txt {
          p {
            font-family: Avenir, Avenir;
            font-weight: 500;
            font-size: 12px;
            color: #FFFFFF;
            line-height: 14px;
            text-align: right;
            font-style: normal;
            text-transform: none;
            margin-top: 10px;
          }

          .txt {
            font-family: Avenir, Avenir;
            font-weight: 800;
            font-size: 20px;
            color: #FFFFFF;
            line-height: 20px;
            text-align: right;
            font-style: normal;
            text-transform: none;
          }

          .txts {
            font-family: Avenir, Avenir;
            font-weight: 500;
            font-size: 20px;
            color: #FFFFFF;
            line-height: 20px;
            text-align: right;
            font-style: normal;
            text-transform: none;
          }

        }
        &.app-store:hover {
        background: #1A0652; /* 黑色（符合App Store品牌色调） */
      }

      /* // Google Play 盒子hover样式 */
      &.google-play:hover {
        background: #1A0652; /* 绿色（符合Google Play品牌色调） */
      }
    
      }
 


    }
    .qubox{
      /* width: 620px; */
height: 138px;
background: #F4F7FB;
border-radius: 7px;
border: 1px solid rgba(223,223,223,0.7);
display: flex;
margin-top: 20px;
.imgbox{
width: 60px;
height: 60px;
margin: 35px 60px;
}
.txtbox{

}
    }
    .section-end {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0; /* 可根据需要调整上下外边距 */
}

.section-end::before,
.section-end::after {
  content: "";
  flex: 1;
  height: 1px;
  background: #D3D3D3; /* 虚线颜色，可根据需要调整 */
  /* 以下是实现虚线的关键属性，不同浏览器可能需要不同前缀，这里写标准写法和webkit前缀示例 */
  background-image: linear-gradient(to right, #ccc 50%, transparent 50%);
  background-size: 40px 1px; /* 控制虚线的间隔和线条粗细，10px是间隔，1px是线粗 */
  background-repeat: repeat-x;
  -webkit-background-size: 10px 1px;
  -webkit-background-repeat: repeat-x;
}

.section-end span {
  padding: 0 10px; /* 文字与虚线之间的左右间距 */
  color: #999999; /* 文字颜色，可根据需要调整 */
}
.endclass{
  display: flex;
  justify-content: center;
  margin-top: 25px;
}
  }
</style>