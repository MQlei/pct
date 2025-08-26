<template>
  <div class="l-header ">
    <div>
      <nuxt-link to="/">
        <!-- <p>{{ $t('header.home') }}</p>
        <p>{{ $t('common.switchLang') }}</p> -->

        <!-- <img class="header-img" :src="logoh" /> -->
      </nuxt-link>
    </div>
    <div class="hd-txt">
      <div class="hd-con">Athens&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; 20.4°C 11:46 丨 Hong Kong
        &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; 26.2°C 16:46</div>
    </div>
    <div class="t-btn">
      <el-button 
      size="small" 
        v-for="item in buttons"
        :key="item.value"
        :class="{ 'is-active': activeBtnIndex === item.value }"
       @click="switchLang(item.value)"
      >{{ item.label }}</el-button>
    </div>
  </div>



</template>

<script setup>
import logoh from '~/assets/images/logo-h.png';
import { onMounted, ref } from 'vue';
import { useLocaleStore } from '~/stores/locale';
const activeBtnIndex = ref('en');
const buttons = [
  { value: 'en', label: 'EN' },
  { value: 'el', label: 'EL' }
];

const localeStore = useLocaleStore();
const { currentLang, setLang } = localeStore;

// 切换语言：直接调用store的setLang方法
const switchLang = (lang) => {
  activeBtnIndex.value =lang
  setLang(lang);
};

// 确保组件挂载时初始化语言
onMounted(async () => {
  await localeStore.init();
  // 如果初始化后没有默认语言，强制设置为en
  if (!currentLang) {
    setLang('en');
  }
});
</script>

<style lang='scss' scoped>
.l-header {
  height: $top-subtime-height;
  padding: 0px 60px;
  display: flex;
  align-items: center;
  background: #ffffff;
  box-shadow: inset 0px 1px 1px 0px rgba(0, 0, 0, 0.06);
  font-size: 14px;
  font-family: Arial;
}

.header-img {
  cursor: pointer;
  flex-shrink: 0;
  width: 55px;
  height: 100%;
}

.hd-txt {
  color: #666666;
  flex: 1;

  .hd-con {
    text-align: center;
  }
}


      .el-button {
     

        /* 鼠标悬停效果 */
        &:hover {
          background-color: rgba(9, 70, 153, 0.05);
          color: #094699;
          /* 增加轻微上浮效果 */
          transform: translateY(-1px);
        }

        /* 激活状态样式 */
        &.is-active {
          background: #1A0652 !important;
    color: white !important;
    border-color: #1A0652 !important;
        
        }



        /* 禁用状态优化 */
        &.is-disabled {
          color: #ccc;
          background-color: transparent;
          cursor: not-allowed;
        }
      }


</style>
