<template>
  <div class="vertical-swiper-container">
    <swiper :modules="modules" :direction="'vertical'" :slides-per-view="1" :space-between="100" :loop="false"
      :mousewheel="true" :keyboard="{
        enabled: true,  // 启用键盘控制
        onlyInViewport: true  // 仅在Swiper可见时生效
      }" class="my-swiper">

      <swiper-slide class="screen ">
        <PortService />
      </swiper-slide>
      <swiper-slide class="screen ">
        <Anniversary />
      </swiper-slide>
      <swiper-slide class="screen ">
        <ServiceImgs />
      </swiper-slide>
      <swiper-slide class="screen " style=" background: rgb(247, 247, 248);">
        <AisApp />
      </swiper-slide>
      <swiper-slide class="screen ">
        <div class="w-screen">
          <News />
          <BottomFooder />
        </div>
      </swiper-slide>


    </swiper>
    <div class="i-box">
      <a href="https://www.facebook.com/PiraeusContainerTerminalSA" target="_blank">
        <i class="i-img i-img__f"></i></a>
      <a href="https://www.linkedin.com/company/pct-coscoshippingports" target="_blank"> <i
          class="i-img i-img__in"></i></a>
      <a href="https://www.youtube.com/channel/UCrkn34UW3_UJK04rK2JqzbA" target="_blank"> <i
          class="i-img i-img__yt"></i> </a>
    </div>
  </div>
</template>

<script setup>
  definePageMeta({
    layout: 'home'
  })
  // 移除 Autoplay 模块导入
  import {
    Swiper,
    SwiperSlide
  } from 'swiper/vue';
  import {
    Mousewheel,
    Keyboard
  } from 'swiper/modules'; // 新增 Keyboard 模块

  // 移除 Autoplay 样式导入
  import 'swiper/css';

  // 模块注册中也移除 Autoplay
  const modules = [Mousewheel, Keyboard];
</script>

<style scoped>
  .vertical-swiper-container {
    width: 100%;
    height: 100vh;
    position: relative;

  }

  .my-swiper {
    width: 100%;
    height: 100%;
  }

  .screen {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    .footer-bg__img {
      height: 100%;
      width: 100%;
      background: url('~/assets/images/footer-img.png') no-repeat;
      background-size: cover;
      display: flex;
      justify-content: center;
      align-items: center;

      .bg-cont {
        text-align: center;
        font-weight: 800;
        font-size: 50px;
        color: #FFFFFF;
      }
    }
  }

  .i-box {
    display: block;
    /* margin-top: 8px; */
    position: absolute;
    right: 5%;
    top: 50%;
    z-index: 10;
    /* transform: translateY(-50%); */
  }

  .i-img {
    display: flex;
    width: 24px;
    height: 24px;
    margin-bottom: 12px;
    opacity: 0.4;

    &__f {
      /* background: url('~/assets/images/f-24.png') no-repeat; */
      background: url('~/assets/images/smicon1.png') no-repeat;

      background-size: cover;

    }

    &__in {
      /* background: url('~/assets/images/in-24.png') no-repeat; */
      background: url('~/assets/images/smicon2.png') no-repeat;
      background-size: cover;
    }

    &__yt {
      /* background: url('~/assets/images/youtube-24.png') no-repeat; */
      background: url('~/assets/images/smicon3.png') no-repeat;
      background-size: cover;
    }
  }
</style>