<!-- <template>
  <div 
    class="cookie-settings" 
    :class="{ 'hidden': isHidden }"
  >
    <div class="container">
      <h4 class="text-lg font-medium">Cookie settings</h4>
      <p class="text-sm mt-3 text-blue-100">
        We use cookies to provide you with the best possible experience. They also allow us to analyze user behavior to improve the website for you.
      </p>
      <div class="mt-6 button-group">
        <el-button type="primary" @click="rejectAll">Reject All</el-button>
        <el-button type="primary" @click="acceptSelection">Accept Selection</el-button>
        <el-button @click="acceptAll">Accept all</el-button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const isHidden = ref(false);
const userIp = ref('');

// 获取用户IP地址（实际项目中建议通过后端接口获取）
const fetchUserIp = async () => {
  try {
    // 使用第三方服务获取IP，实际项目中建议替换为自己的后端接口
    const response = await fetch('https://api.ipify.org?format=json');
    const data = await response.json();
    userIp.value = data.ip;
    return data.ip;
  } catch (error) {
    console.error('Failed to fetch IP:', error);
    return null;
  }
};

// 检查是否需要显示Cookie提示
const checkCookieConsent = async () => {
  const ip = await fetchUserIp();
  if (!ip) return;

  const storedData = localStorage.getItem(`cookieConsent_${ip}`);
  if (storedData) {
    const { date } = JSON.parse(storedData);
    const storedDate = new Date(date);
    const today = new Date();
    
    // 检查是否是同一天
    if (
      storedDate.getDate() === today.getDate() &&
      storedDate.getMonth() === today.getMonth() &&
      storedDate.getFullYear() === today.getFullYear()
    ) {
      isHidden.value = true;
    }
  }
};

const acceptAll = async () => {
  console.log();
  // isHidden.value = true;
  
  // if (!userIp.value) {
  //   await fetchUserIp();
  // }
  
  // // 存储IP和当前日期
  // if (userIp.value) {
  //   localStorage.setItem(`cookieConsent_${userIp.value}`, JSON.stringify({
  //     accepted: true,
  //     date: new Date().toISOString()
  //   }));
  // }
  
  console.log('All cookies accepted');
};

const rejectAll = () => {
  // 拒绝所有cookie的逻辑
  console.log('All cookies rejected');
};

const acceptSelection = () => {
  // 接受选中的cookie的逻辑
  console.log('Selected cookies accepted');
};

// 组件挂载时检查是否需要显示
onMounted(() => {
  checkCookieConsent();
});
</script>

<style lang='scss' scoped>
.cookie-settings {
  background: rgba(23, 88, 183, 1);
  color: #ffffff;
  padding: 20px 0;
  transition: transform 0.5s ease-out, opacity 0.5s ease-out;
  transform: translateY(0);
  opacity: 1;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 9999; /* 确保在其他内容之上 */
  width: 100%;

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
    text-align: center;
  }

  &.hidden {
    transform: translateY(100%); /* 向下移出屏幕 */
    opacity: 0;
    pointer-events: none; /* 隐藏后不响应鼠标事件 */
  }

  .button-group {
    display: flex;
    gap: 12px;
    justify-content: center;
    flex-wrap: wrap; /* 确保在小屏幕上按钮不会溢出 */
  }

  .el-button {
    border-radius: 0;
    padding: 8px 21px;
    font-size: 13px;
    border-color: #ffffff;
    color: rgba(23, 88, 183, 1);
    background: #ffffff;
    transition: all 0.2s ease;

    &:hover {
      background: #f0f0f0;
      border-color: #f0f0f0;
    }

    &--primary {
      background: transparent;
      border-color: #ffffff;
      color: #ffffff;

      &:hover {
        background: rgba(255, 255, 255, 0.1);
        border-color: #ffffff;
      }
    }
  }
}
</style> -->

<template>
  <div 
    class="cookie-settings" 
    :class="{ 'hidden': isHidden }"
  >
    <div class="container">
      <h4 class="text-lg font-medium">Cookie settings</h4>
      <p class="text-sm mt-3 text-blue-100">
        We use cookies to provide you with the best possible experience. They also allow us to analyze user behavior to improve the website for you.
      </p>
      <div class="mt-6 button-group">
        <el-button type="primary" @click="rejectAll">Reject All</el-button>
        <el-button type="primary" @click="acceptSelection">Accept Selection</el-button>
        <el-button @click="acceptAll">Accept all</el-button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const isHidden = ref(false);
const STORAGE_KEY = 'cookie_consent_status'; // 本地存储键名

// 检查是否需要显示弹窗
const checkCookieConsent = () => {
  const storedData = localStorage.getItem(STORAGE_KEY);
  
  if (storedData) {
    try {
      const { date } = JSON.parse(storedData);
      const storedDate = new Date(date);
      const today = new Date();
      
      // 对比年月日，判断是否为同一天
      const isSameDay = 
        storedDate.getFullYear() === today.getFullYear() &&
        storedDate.getMonth() === today.getMonth() &&
        storedDate.getDate() === today.getDate();
      
      if (isSameDay) {
        isHidden.value = true; // 同一天已同意，隐藏弹窗
      }
    } catch (e) {
      console.error('解析存储数据失败:', e);
      localStorage.removeItem(STORAGE_KEY); // 数据异常时清除
    }
  }
};

// 处理"全部接受"
const acceptAll = () => {
  console.log(localStorage.getItem(STORAGE_KEY));
  isHidden.value = true;
  // 存储当前日期（无需IP或设备标识）
  localStorage.setItem(STORAGE_KEY, JSON.stringify({
    accepted: true,
    date: new Date().toISOString() // 存储标准时间格式
  }));
  console.log('All cookies accepted');
};

const rejectAll = () => {
  console.log('All cookies rejected');
};

const acceptSelection = () => {
  console.log('Selected cookies accepted');
};

// 组件挂载时检查
onMounted(checkCookieConsent);
</script>

<style lang='scss' scoped>
/* 样式保持不变 */
.cookie-settings {
  background: rgba(23, 88, 183, 1);
  color: #ffffff;
  padding: 20px 0;
  transition: transform 0.5s ease-out, opacity 0.5s ease-out;
  transform: translateY(0);
  opacity: 1;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 9999;
  width: 100%;

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
    text-align: center;
  }

  &.hidden {
    transform: translateY(100%);
    opacity: 0;
    pointer-events: none;
  }

  .button-group {
    display: flex;
    gap: 12px;
    justify-content: center;
    flex-wrap: wrap;
  }

  .el-button {
    border-radius: 0;
    padding: 8px 21px;
    font-size: 13px;
    border-color: #ffffff;
    color: rgba(23, 88, 183, 1);
    background: #ffffff;
    transition: all 0.2s ease;

    &:hover {
      background: #f0f0f0;
      border-color: #f0f0f0;
    }

    &--primary {
      background: transparent;
      border-color: #ffffff;
      color: #ffffff;

      &:hover {
        background: rgba(255, 255, 255, 0.1);
        border-color: #ffffff;
      }
    }
  }
}
</style>