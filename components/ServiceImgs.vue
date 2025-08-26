<template>
  <div class="service-img">
    <div class="service__label" >
      <h2>Services High quality</h2>
      <!-- <h4>High quality</h4> -->
    </div>
    <div class="service-imgs">
    <div class="service__item" v-for="(item, index) in images" :key="index"  @click="handleItemClick(item.url)"
    :style="{ cursor: 'pointer' }">
      <div class="service__img" >
        <!-- <div class="service__label" v-if="index === 0">
          <h2>Services</h2>
          <h4>High quality</h4>
        </div> -->
        <img :src="item.src" />
        <p class="service__value">{{ item.value }}</p>
      </div>
    </div>
    </div>
  </div>
</template>

<script setup>
const imageModules = import.meta.glob('~/assets/images/*.png', { eager: true, import: 'default' });
import { useRoute } from 'vue-router';
const images = [
  {src: imageModules['/assets/images/pct-hpcs.png'], value: "PCT HPCS", url: "/terminal/services/pcthpcs"},
  {src: imageModules['/assets/images/automatic-system.png'], value: "Automatic System", url: ""},
  {src: imageModules['/assets/images/e-hub.png'], value: "eHub", url: "/terminal/services/ehub"},
  {src: imageModules['/assets/images/web-ip.png'], value: "Web IP", url: "/terminal/services/webip"},
];
const handleItemClick = (url) => {
  // 如果使用了Vue Router
  const router = useRouter()
  router.push(url)
  
  // 如果是外部链接或不使用路由
  console.log(url);
  // window.location.href = url;
  // window.open(url, '_blank');
};
</script>

<style lang='scss' scoped>

  .service-img{
    .service__label {
      padding: 0 0 30px 80px;
    /* position: absolute; */
    /* top: 30px;
    left: 44px;
    right: 0; */
    /* color: white; */
    /* z-index: 2; 确保文字在图片上方 */
    
    h2{
      font-size: 36px;
      font-weight: bold;
      margin: 0 0 8px 0;
    }
    h4{
      font-size: 24px;
      margin: 0;
    }
  }

.service-imgs{
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 80px;


  .service__item {
    width: 25%;
    margin-right: 27px;
    &:last-child {
      margin-right: 0;
    }
  }

  .service__img {
    width: 100%;
    height: 100%;
    border-radius: 8px;
    overflow: hidden;
    position: relative;
    cursor: pointer;
    transition: all 0.3s ease; /* 平滑过渡效果 */
    
    /* 鼠标滑过效果 */
    &:hover {
      transform: translateY(-8px) scale(1.02); /* 上移并轻微放大 */
      box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15); /* 增强阴影 */
    }
   
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.5s ease; /* 图片缩放过渡 */
    }
    
    /* 鼠标滑过时图片轻微放大 */
    &:hover img {
      transform: scale(1.05);
    }
  }

  /* .service__label {
    position: absolute;
    top: 30px;
    left: 44px;
    right: 0;
    color: white;
    z-index: 2; 
    
    h2{
      font-size: 36px;
      font-weight: bold;
      margin: 0 0 8px 0;
    }
    h4{
      font-size: 24px;
      margin: 0;
    }
  } */

  .service__value{
    position: absolute;
    bottom: 130px;
    left: 0;
    right: 0;
    color: white;
    text-align: center;
    font-size: 20px;
    font-weight: bold;
    z-index: 2; /* 确保文字在图片上方 */
    transition: opacity 0.3s ease; /* 文字透明度过渡 */
  }
  
  /* 可以添加一个半透明遮罩增强文字可读性 */
  .service__img::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.6) 100%);
    opacity: 0.7;
    transition: opacity 0.3s ease;
    z-index: 1;
  }
  
  .service__img:hover::after {
    opacity: 0.85;
  }
}
  }
</style>
