<template>
  <div class="contactus">
    <div class="mb-[100px]">
      <div class="contactus__header mb-[35px]">
        <h4>How to Find Us</h4>
      </div>
      <div class="sempo-wrap flex mb-[52px]">
        <div class="mr-[39px]">
          <h4>Sempo neo ikonio perama</h4>
          <h4 class="mb-[29px]">18863 Greece</h4>
          <div class="i-box">
            <div class="flex items-center mb-[20px]">
              <i class="i-img i-img__phone"></i>
              <span>+30 210 4099100</span>
            </div>
            <div class="flex items-center">
              <i class="i-img i-img__email"></i>
              <span>pr@pct.com.gr</span>
            </div>
          </div>
        </div>
  
        <div class="flex-1 flex items-center">
          <div class="i-box flex justify-between flex-1">
            <div class="flex items-center flex-1" v-for="item in 3">
              <i class="i-img i-img__mark"></i>
              <span class="text-b">Driving Instructions from Piraeus Center to PCT S.A.</span>
            </div>
          </div>
        </div>
  
      </div>
      <div class="contactus__cardbox" >
        <CardInfo class="contactus__card" :isActive="selectedCard === item" :title="'Vehicle & Heavy Machinery Engineer'" :date="'05.04.2025'" v-for="item in 4" :key="item" @click="handleClick(item)">
          <template #extraIntro>
            <div>
              <p class="mb-[41px] txt-wt">
                Media can address all their questions, requests for interviews to PCT's Public Relations department
              </p>
              <div class="i-box flex justify-between">
                <div class="flex items-center">
                  <i class="i-img i-img__phone"></i>
                  <span>+30 210 4099100</span>
                </div>
                <div class="flex items-center">
                  <i class="i-img i-img__email"></i>
                  <span>pr@pct.com.gr</span>
                </div>
              </div>
            </div>
          </template>
        </CardInfo>
      </div>
    </div>

    <div>
      <div class="contactus__header mb-[34px]">
        <h4>Request for a Visit</h4>
      </div>
      <div class="contactus__content mb-[68px]">
        <p class="">
          PCT focuses on hosting visitors who are directly related to PCT and her (operational) business.
        </p>
        <p class="text-b">
          PCT relations can send requests, preferably by e-mail, to Commercial Department 
        </p> 
      </div>
      <div class="map-box">
        <div class="i-box flex items-center mb-[30px]">
          <h6>VIEW LARGER MAP</h6>
          <i class="i-img i-img__map"/>
        </div>
        <div class="map-img">
          <img :src="bgContactus" alt="">
        </div>
      </div>
    </div>


  </div>
</template>

<script setup >
import { ref } from 'vue';
import bgContactus from '~/assets/images/bg-contactus.png';

const selectedCard = ref(6)
// const handleClick = (item) => {
//   selectedCard.value = item
// }
const cardData = ref({}); // 存储从接口获取的数据
const loading = ref(false); // 加载状态
const error = ref(null); // 错误信息


  // 页面加载时调用接口（默认加载第一个卡片数据）
//   onMounted(async () => {
//     console.log('页面加载时调用接口（默认加载第一个卡片数据）');
//   try {
//     // 加载默认卡片数据
//     const data = await fetchCardData(selectedCard.value);
//     console.log('页面加载时调用接口',data);
//     cardData.value[selectedCard.value] = data;
//   } catch (err) {
//     error.value = err;
//   } finally {
//     loading.value = false; // 结束页面加载状态
//   }
// });

// 获取Token的方法（根据实际存储位置调整）
const getToken = () => {
  // 从localStorage获取（也可从Pinia/ Vuex中获取）
  return localStorage.getItem('authToken');
  // 如果Token存储在Cookie中，可使用：
  // return useCookie('authToken').value;
}
// 点击卡片时获取接口数据
const handleClick = async (item) => {
  // 更新选中状态
  selectedCard.value = item;
  
  // 显示加载状态
  loading.value = true;
  error.value = null;
  

  try {
        // 获取Token
        // const token = getToken();
    const token = '043f6736-89b6-4b29-a8ce-b9e4fa4eb58b';
    // 调用服务端接口，传入卡片ID
    // const response = await $fetch(`http://192.168.1.100:3000/api/card/${item}`, {
      // const response = await $fetch(`http://192.168.1.100:3000/api/api`, { 
        const response = await $fetch(`/api-proxy/api/jie/invoice?KP-20250811010;${item}`, { 
   // 添加请求头，解决可能的跨域问题
   headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
          // 添加Token认证头（通常格式为Bearer + 空格 + Token）
          'Authorization': `Bearer ${token}`
      },
      // 允许携带凭证（如果需要）
      credentials: 'include',
      method: 'GET'
    });
    
    // 存储获取的数据
    cardData.value[item] = response.data;
    console.log(response);
  } catch (err) {
    // 处理错误
    error.value = err;
    console.error('Failed to fetch card data:', err);
  } finally {
    // 隐藏加载状态
    loading.value = false;
  }

// 加载数据的通用方法
const fetchCardData = async (item) => {
  try {
    // const token = getToken();
    const token = '043f6736-89b6-4b29-a8ce-b9e4fa4eb58b';
    if (!token) {
      throw new Error('未找到认证信息');
    }
    
    const response = await $fetch(`/api-proxy/api/jie/invoice?KP-20250811010;${item}`, { 
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    });
    
    return response;
  } catch (err) {
    console.error(`获取卡片${item}数据失败:`, err);
    throw err; // 抛出错误让调用方处理
  }
};

};

</script>

<style lang="scss" scoped>
.contactus{
  .text-b{
    color: rgba(10, 71, 153, 1);
  }
  .txt-wt{
    font-weight: 800;
    font-size: 24px;
  }
  .i-box{
  
    // 移除了这里重复定义的i-img__mark样式，避免冲突
  
    .i-img{
      display: inline-block;
      width: 20px;
      height: 20px;
      margin-right: 8px;
      background-position: center;  // 新增：确保背景图居中
      background-repeat: no-repeat; // 确保背景图不重复
      background-size: contain;     // 新增：保持图片比例，完整显示在元素内
 
      &__phone{
        background-image: url("~/assets/images/i-iphone.png");
      }
      &__email{
        background-image: url("~/assets/images/i-email.png");
      }
      &__mark{
        width: 54px;
        height: 54px;
        margin-right: 12px;
        background-image: url("~/assets/images/i-mark.png");
        // 移除了固定尺寸的background-size，使用contain保持比例
      }
      &__map{
        width: 36px;
        height: 36px;
        margin-left: 16px;
        background-image: url("~/assets/images/i-map.png");
      }
    }
  }

  .sempo-wrap{
    background: #FFFFFF;
    border-radius: 15px;
    border: 1px solid rgba(223,223,223,0.7);
    padding: 30px 30px 39px 25px;
    h4{
      font-weight: 800;
      font-size: 24px;
      color: #262729;
    }
  }
  
  .map-box{
    h6{
      font-size: 30px;
      color: #333333;
    }
  }

  &__header{
    font-size: 50px;
    color: #333333;
    margin-bottom: 35px;
  }
  &__content{
    font-size: 20px;
    color: #262729;
  }

  &__cardbox{
    @apply flex flex-wrap;
    column-gap: 20px; 
    row-gap: 24px;    
    margin-bottom: 50px;
  }

  &__card{
    width: calc((100% - 20px) / 2);
    box-sizing: border-box;
  }
  :deep(.card-box__title){
    margin-bottom: 10px;
    font-weight: 800;
    font-size: 24px;
  }
  :deep(.card-box__date){
    display: none;
  }

  .txt-h{
    font-size: 50px;
    color: #333333;
  }
  .contactus__card{
    &:hover {
      border-radius: 15px;
      box-shadow: 0 0 0 2px rgba(9, 70, 153, 0.2), 0 4px 20px rgba(9, 70, 153, 0.15);
      transition: all 0.3s ease;
    }
  }
}
</style>
