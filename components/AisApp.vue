<template>
  <div class="ais-app">
    <div class="tit-box">
      <img class="ais-tit__img w-[636px]" :src="ais" />
    </div>
    <div class="i-box">
      <h3><span class="ais-underline">AIS</span> app</h3>
      <p class="description-text">
        MarineTraffic displays near real-time positions of ships and yachts worldwide. Connected to the largest network of AIS receivers, the app covers most major ports and shipping routes. - View VESSELS ON THE LIVE MAP, search for ships, boats and seaports and see what's near you!
      </p>
      <a href="https://www.marinetraffic.com/" target="_blank">
        <h2>MarineTraffic.com</h2>
      </a>

      <!-- <h4>Marine Traffic.com</h4> -->
      <!-- <div class="i-wrap">
        <div class="flex mr-[74px]">
          <i class="i-img i-img__iphone" />
          <el-button>download</el-button>
        </div>
        <div class="flex">
          <i class="i-img i-img__android" />
          <el-button>download</el-button>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script setup>
import ais from '~/assets/images/bitmap.png';
import { reactive, toRefs, ref } from 'vue'
</script>

<style lang='scss' scoped>
  .ais-app{
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 120px;
    padding-right: 80px;
    font-size: 20px;
    color: #333333;
    background: rgba(247, 247, 248, 1);

    .tit-box{
      flex: 1;
      margin-right: 96px;
      border: 4px solid #1758B6;
    }

    .i-box{
      flex: 1;
      margin-top: 8px;
      max-width: 600px; /* 限制内容宽度，优化长文本阅读体验 */

      h3{
        font-size: 56px;
        margin-bottom: 30px;
        
        .ais-underline {
          position: relative;
          text-decoration: none;
        }
        
        .ais-underline::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: -12px;
          width: 100%;
          height: 2px;
          background-color: #1758B6;
          border-radius: 1px;
        }
      }

      
      .description-text {
        /* line-height: 1.6; /* 增加行间距，提升可读性 */
        margin-bottom: 40px; /* 增加与下方元素的间距 */
        letter-spacing: 0.3px; /* 微调字间距 */
        text-align: justify; /* 文本两端对齐，使版式更整齐 */
        /* padding-right: 20px; 右侧预留一点空间 */ 
      }
      
      h4{
        color: rgba(62, 193, 239, 1);
        font-weight: 600;
        margin-top: 24px;
      }
      h2{
        /* width: 89px; */
/* height: 16px; */
font-family: Arial, Arial;
font-weight: normal;
font-size: 20px;
color: #3EC1EF;
line-height: 16px;
text-align: left;
font-style: normal;
text-transform: none;
cursor: pointer;
&:hover {
  font-size: 21px;
      }
      } 
    }
    .i-wrap{
      display: flex;
      margin-top: 93px;
      
      .el-button{
        color: rgba(23, 88, 182, 1);
        border: 1px solid rgba(23, 88, 182, 1);
      }
    }
    .i-img{
      display: flex;
      width: 30px;
      height: 30px;
      margin-right: 6px;

      &__iphone{
        background: url('~/assets/images/iphone.png') no-repeat;
        background-size: cover;
      }
      &__android{
        background: url('~/assets/images/android.png') no-repeat;
        background-size: cover;
      }
    }
  }
</style>
