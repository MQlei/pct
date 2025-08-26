<!-- <template>
  <div class="photo-video-gallery">
    <div class="photo-video-gallery__btnbox">
      <el-button-group class="button-group">
        <el-button 
          v-for="item in buttons"
          :key="item.value"
          :class="{ 'is-active': activeBtnIndex === item.value }"
          @click="activeBtnIndex = item.value"
          >{{ item.label }}</el-button>
      </el-button-group>
    </div>

    <div class="photo-grid">
      <el-image
        v-for="(img, index) in srcList"
        :key="index"
        :src="img"  
        :preview-src-list="srcList"
        :initial-index="index" 
        fit="cover"
        class="photo-item"
        hide-on-click-modal 
      >
        <div v-if="index === srcList.length - 1" class="overlay-count">
          <span>+35</span>
        </div>

        <template #progress="{ activeIndex, total }">
          <div>

            <div class="text-center">
              <span>{{ activeIndex + 1 + '/' + total }}</span>
            </div>
    
            <div class="custom-preview-wrapper">
              <div class="thumbnail-list">
                <div
                  v-for="(item, index) in srcList"
                  :key="index"
                  class="thumbnail-item"
                  :class="{ 'active-thumbnail': index === activeIndex }"
                  @click="handleThumbnailClick(index)"
                >
                  <img :src="item" class="thumbnail-img" />
                </div>
              </div>
            </div>
          </div>
      </template>

      </el-image>
    </div>
  </div>
</template> -->
<!-- <template>
  <div class="photo-video-gallery">
    <div class="photo-video-gallery__btnbox">
      <el-button-group class="button-group">
        <el-button 
          v-for="item in buttons"
          :key="item.value"
          :class="{ 'is-active': activeBtnIndex === item.value }"
          @click="activeBtnIndex = item.value"
        >{{ item.label }}</el-button>
      </el-button-group>
    </div>

    <div class="photo-grid">
      <el-image
        v-for="(item, index) in jobList"
        :key="item.id || index"  
        :src="`http://21xd945184.zicp.fun${item.photoUrl}`"  
        :preview-src-list="jobList.map(img => `http://21xd945184.zicp.fun${img.photoUrl}`)"  
        :initial-index="index" 
        fit="cover"
        class="photo-item"
        hide-on-click-modal 
      >
        <div v-if="index === jobList.length - 1" class="overlay-count">
          <span>+35</span>
        </div>

        <template #progress="{ activeIndex, total }">
          <div>
            <div class="text-center">
              <span>{{ activeIndex + 1 + '/' + total }}</span>
            </div>
    
            <div class="custom-preview-wrapper">
              <div class="thumbnail-list">
                <div
                  v-for="(imgItem, imgIndex) in jobList"
                  :key="imgItem.id || imgIndex"
                  class="thumbnail-item"
                  :class="{ 'active-thumbnail': imgIndex === activeIndex }"
                  @click="handleThumbnailClick(imgIndex)"
                >
                  <img   :src="`http://21xd945184.zicp.fun${item.photoUrl}`" class="thumbnail-img" />
                </div>
              </div>
            </div>
          </div>
      </template>

      </el-image>
    </div>
  </div>
</template> -->
<template>
  <div class="photo-video-gallery">
    <div class="photo-video-gallery__btnbox">
      <el-button-group class="button-group">
        <el-button 
          v-for="item in buttons"
          :key="item.value"
          :class="{ 'is-active': activeBtnIndex === item.value }"
          @click="activeBtnIndex = item.value"
        >{{ item.label }}</el-button>
      </el-button-group>
    </div>

    <div class="photo-grid" v-if="activeBtnIndex==1">
      <el-image
        v-for="(item, index) in jobList"
        :key="item.id || index"
        :src="`${currentOrigin}${item.photoUrl}`"  
        :preview-src-list="jobList.map(img => `${currentOrigin}${img.photoUrl}`)"  
        :initial-index="index" 
        fit="cover"
        class="photo-item"
        hide-on-click-modal 
      >
        <div v-if="index === jobList.length - 1" class="overlay-count">
          <span>+35</span>
        </div>

        <template #progress="{ activeIndex, total }">
          <div>
            <div class="text-center">
              <span>{{ activeIndex + 1 + '/' + total }}</span>
            </div>
    
            <div class="custom-preview-wrapper">
              <div class="thumbnail-list">
                <div
                  v-for="(imgItem, imgIndex) in jobList"
                  :key="imgItem.id || imgIndex"
                  class="thumbnail-item"
                  :class="{ 'active-thumbnail': imgIndex === activeIndex }"
                  @click="handleThumbnailClick(imgIndex)"
                >
                  <!-- 缩略图地址拼接当前浏览器地址 -->
                  <img :src="`${currentOrigin}${imgItem.photoUrl}`" class="thumbnail-img" />
                </div>
              </div>
            </div>
          </div>
      </template>

      </el-image>
    </div>
    <div class="photo-grid" v-else>
      <!-- <el-image
        v-for="(item, index) in jobList"
        :key="item.id || index"
        :src="`${currentOrigin}${item.photoUrl}`"  
        :preview-src-list="jobList.map(img => `${currentOrigin}${img.photoUrl}`)"  
        :initial-index="index" 
        fit="cover"
        class="photo-item"
        hide-on-click-modal 
      >
        <div v-if="index === jobList.length - 1" class="overlay-count">
          <span>+35</span>
        </div>

        <template #progress="{ activeIndex, total }">
          <div>
            <div class="text-center">
              <span>{{ activeIndex + 1 + '/' + total }}</span>
            </div>
    
            <div class="custom-preview-wrapper">
              <div class="thumbnail-list">
                <div
                  v-for="(imgItem, imgIndex) in jobList"
                  :key="imgItem.id || imgIndex"
                  class="thumbnail-item"
                  :class="{ 'active-thumbnail': imgIndex === activeIndex }"
                  @click="handleThumbnailClick(imgIndex)"
                >
                  <img :src="`${currentOrigin}${imgItem.photoUrl}`" class="thumbnail-img" />
                </div>
              </div>
            </div>
          </div>
      </template>

      </el-image> -->
    </div>
  </div>
   </template>
<script setup>
const activeBtnIndex = ref(1);
const buttons = [
  { value: 1, label: 'Photo' },
  { value: 2, label: 'Video' }
];
import { useLocaleStore } from '~/stores/locale'

// 获取 Pinia 仓库实例
const localeStore = useLocaleStore()
// 解构响应式状态和方法
const { currentLang, t } = localeStore
const url = ref('/images/photovideogallery/photo1.png');
const srcList = ref([
  '/images/photovideogallery/photo1.png',
  '/images/photovideogallery/photo2.png',
  '/images/photovideogallery/photo3.png',
  '/images/photovideogallery/photo4.png',
  '/images/photovideogallery/photo5.png',
  '/images/photovideogallery/photo6.png',
  '/images/photovideogallery/photo7.png',
  '/images/photovideogallery/photo8.png',
]);
const jobList = ref([]);
// 获取当前浏览器的基础地址（如 http://localhost:8080 或 https://example.com）
// const currentOrigin = ref(window.location.origin);
const currentOrigin = 'http://21xd945184.zicp.fun';
// 监听语言变化（可选，用于复杂逻辑）
watch(
  () => localeStore.currentLang,
  (newLang) => {
    console.log('语言已切换为:', newLang)
  },
  { immediate: true } // 初始化时立即执行一次
)
onMounted(() => {
  fetchJobList();
  console.log('当前语言:', currentLang)
});
// 调用接口获取列表
const fetchJobList = async (value) => {
  try {
    const token = '043f6736-89b6-4b29-a8ce-b9e4fa4eb58b';
        const response = await $fetch(`/api-proxy/cms/photo/list`, { 
   // 添加请求头，解决可能的跨域问题
   headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
          // 添加Token认证头（通常格式为Bearer + 空格 + Token）
          // 'Authorization': `Bearer ${token}`
      },
      // 允许携带凭证（如果需要）
      credentials: 'include',
      method: 'GET'
    });  
    if (response.code === 200) {
      console.log(response);
      jobList.value = response.rows;
      console.log('135',jobList.value);
   
  
    } else {
      console.error('Failed to fetch job list:', response.msg
);
    }
    
    // 存储获取的数据
    // cardData.value[item] = response.data;
    console.log(response);
  }
  catch (error) {
    console.error('Error fetching job list:', error);
  }
};
// 格式化日期（假设接口返回的是时间戳或ISO格式日期）
const formatDate = (dateString) => {
  if (!dateString) return '';
  const date = new Date(dateString);
  // 格式化为 dd.mm.yyyy
  return `${String(date.getDate()).padStart(2, '0')}.${String(date.getMonth() + 1).padStart(2, '0')}.${date.getFullYear()}`;
};

// 点击缩略图切换当前预览图片
const handleThumbnailClick = (index) => {
  // 通过修改 url 触发预览切换（需配合 el-image 的预览逻辑）
  url.value = `${currentOrigin.value}${jobList.value[index]?.photoUrl || ''}`;

  // url.value = `http://21xd945184.zicp.fun${jobList.value[index]?.photoUrl || ''}`;
  // url.value = srcList.value[index];
};

</script>

<style lang="scss" scoped>
.photo-video-gallery{

  /* &__btnbox{
    width: 100%;
    padding: 0 250px;
    margin-bottom: 32px;

    .button-group{
      display: flex;
      width: 100%;

      .el-button {
        flex: 1;
        min-width: 0;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        text-align: center;

        border-color: rgba(9, 70, 153, 0.02);
       
        font-weight: normal;
        font-size: 20px;
        padding-top: 10px;
        padding-bottom: 10px;
        &:hover, &:focus {
          border-color: rgba(9, 70, 153, 0.02) !important;
          background-color: #ffffff !important;
          color: #333333 !important;
        }


        &.is-active{
          font-size: 20px;
          color: #094699;
          border: 1px solid #094699 !important;
          background-color: white !important;
          z-index: 0;
        }
      }
    }
  } */
  &__btnbox {
    width: 100%;
    padding: 0 250px;
    margin-bottom: 32px;
    /* 增加容器内边距，避免按钮贴边 */
    padding-top: 8px;
    padding-bottom: 8px;

    .button-group {
      display: flex;
      width: 100%;
      /* 限制最大宽度，在大屏幕上避免按钮过宽 */
      max-width: 600px;
      /* 水平居中 */
      margin: 0 auto;
      /* 增加按钮组内阴影，增强层次感 */
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
      border-radius: 8px;
      overflow: hidden;

      .el-button {
        flex: 1;
        min-width: 0;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        text-align: center;
        /* 去除默认边框 */
        border: none !important;
        /* 调整字体大小和行高，增强可读性 */
        font-size: 18px;
        line-height: 1.5;
        padding: 12px 0;
        /* 增加过渡动画，提升交互体验 */
        transition: all 0.3s ease;
        /* 去除默认背景色 */
        background-color: transparent;
        color: #666;

        /* 鼠标悬停效果 */
        &:hover {
          background-color: rgba(9, 70, 153, 0.05);
          color: #094699;
          /* 增加轻微上浮效果 */
          transform: translateY(-1px);
        }

        /* 激活状态样式 */
        &.is-active {
          font-size: 18px;
          font-weight: 500;
          color: #094699;
          background-color: rgba(9, 70, 153, 0.08);
          /* 底部添加标识线，增强选中感 */
          box-shadow: inset 0 -3px 0 #094699;
          /* 恢复默认位置 */
          transform: translateY(0);
        }

        /* 去除按钮组内边框重叠问题 */
        &:not(:last-child) {
          border-right: 1px solid rgba(0, 0, 0, 0.05) !important;
        }

        /* 禁用状态优化 */
        &.is-disabled {
          color: #ccc;
          background-color: transparent;
          cursor: not-allowed;
        }
      }
    }
  }

  
  .photo-grid{
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    .photo-item{
      position: relative;
      width: calc((100% - 20px * 2) / 3);
      box-sizing: border-box;
            /* // 新增鼠标滑过效果 */
         
      /* // 过渡动画，使效果更平滑 */
      cursor: pointer; 

     &:hover {
      /* // 增强阴影层次感 */
  /* box-shadow: 0 4px 20px rgba(9, 70, 153, 0.15); */
  /* // 轻微内发光效果 */
  border-radius: 15px;
  box-shadow: 0 0 0 2px rgba(9, 70, 153, 0.2), 0 4px 20px rgba(9, 70, 153, 0.15);
  transition: all 0.3s ease;

   
      }
 
      &:has(.overlay-count):hover {
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
      }
 
      &:nth-last-child(-n+2) {
        width: calc((100% - 20px) / 2);
      }
      /* &:nth-last-child(1) {
      } */
    }
  }
  .overlay-count {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    font-size: 60px;
    color: #FFFFFF;
    z-index: 1; /* 确保覆盖在图片上方 */
  }

  /* 缩略图列表 */
  .thumbnail-list {
    display: flex;
    gap: 10px;
  }
  /* 单个缩略图 */
  .thumbnail-item {
    width: 84px;
    height: 68px;
    border: 1px solid transparent;
    /* border-radius: 4px; */
    cursor: pointer;
    overflow: hidden;
    transition: all 0.3s;
  
    /* 高亮当前选中的缩略图 */
    &.active-thumbnail {
      border-color: #3CC2EF;
      /* transform: scale(1.05); */
    }
  }
  /* 缩略图图片 */
  .thumbnail-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  :deep .el-image-viewer__mask{
 opacity: .8;
  }
}
</style>