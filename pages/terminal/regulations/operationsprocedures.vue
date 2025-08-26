<template>
  <div>
   <div>
    <p>Operations procedures for Shipping Lines by the Piraeus Container Terminal S.A. for vessel operations, Land – side operations, terminal planning software and EDI, dangerous cargo and reefer containers.</p>
   </div>
   <div class="ais-tit__img-container">
    <img :src="ais" class="ais-tit__img w-[636px]"  alt="">
  </div>
  </div>
</template>

<script setup >
import ais from '~/assets/images/pdfbg.png';


</script>

<style lang="scss" scoped>
  /* // 为图片的父元素添加样式，使其内容水平居中 */
  .ais-tit__img-container {
    display: flex;
    justify-content: center; // 水平居中
    // 如需垂直居中可添加：align-items: center;（需父元素有明确高度）
  }
  
  // 可选：控制图片最大宽度，避免超出容器
  .ais-tit__img {
    max-width: 100%; // 保证图片在小屏幕上不会溢出
    height: auto; // 保持图片比例
  }
  </style>