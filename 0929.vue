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
              <!-- 显示所有缩略图 -->
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





</template>

<script setup>
const activeBtnIndex = ref(1);
const buttons = [
  { value: 1, label: 'Photo' },
  { value: 2, label: 'Video' }
];

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
// 点击缩略图切换当前预览图片
const handleThumbnailClick = (index) => {
  // 通过修改 url 触发预览切换（需配合 el-image 的预览逻辑）
  url.value = srcList.value[index];
};

</script>

<style lang="scss" scoped>
.photo-video-gallery{

  &__btnbox{
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
        /* background-color: #f5f5f5; */
        /* color: #333; */
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
  }
  
  .photo-grid{
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    .photo-item{
      position: relative;
      width: calc((100% - 20px * 2) / 3);
      box-sizing: border-box;
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
}





</style>




-------
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
              <!-- 显示所有缩略图 -->
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
</template>

<script setup>
const activeBtnIndex = ref(1);
const buttons = [
  { value: 1, label: 'Photo' },
  { value: 2, label: 'Video' }
];

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
// 点击缩略图切换当前预览图片
const handleThumbnailClick = (index) => {
  // 通过修改 url 触发预览切换（需配合 el-image 的预览逻辑）
  url.value = srcList.value[index];
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
}



.photo-video-gallery {
  .photo-grid {
    .photo-item {
      /* // 新增鼠标滑过效果 */
      transition: all 0.3s ease; 
      /* // 过渡动画，使效果更平滑 */
      cursor: pointer; 
      /* // 鼠标变为手型，提示可点击 */

      &:hover {
        transform: translateY(-5px); 
        /* // 轻微上浮 */
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1); 
        /* // 增加阴影，增强层次感 */
        z-index: 10; 
        /* / 确保悬浮时覆盖其他元素 */
      }

      /* // 针对带 "+35" 计数的最后一张图片，保持一致效果 */
      &:has(.overlay-count):hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
      }
    }
  }
}

</style>
------0805
<template>
  <div class="hear-wrap">
    <div class="header">
      <div>
        <nuxt-link to="/">
          <img class="header-img" :src="logoh" />
        </nuxt-link>
      </div>
      <div class="header-search">

        <template v-for="menu in menuDate" :key="menu.name"  >
        <!-- 一级菜单下有子菜单 -->
          <el-popover
            v-if="menu?.children?.length"
            :popper-style="{width: 'auto',left: '120px',right: '120px', display: 'block'}"
            :show-arrow="false"
            placement="bottom"
            trigger="hover"
            :menuitem="menu"
            @show="handleShowMenu(menu)"
          >
            <template #reference>
              <!-- 一级菜单项 -->
              <div class="flex items-center justify-between mr-[27px]">
                <el-button link>{{ menu.seoMeta?.title || '' }}</el-button>
                <el-icon class="el-icon--right" v-if="menu.children">
                  <ArrowDown />
                </el-icon>
              </div>
            </template>
            <!-- 二级菜单项 -->
            <TopMenuItemModals v-if="menuModel" @closeMenuModel="closeMenuModel" :selectedMenu="selected"/>
          </el-popover>

          <!-- 一级菜单无子菜单，直接渲染链接 -->
          <div v-else class="flex items-center justify-between mr-[27px]">
            <nuxt-link
              :to="menu.path" 
              class="menu-link"
              :class="{ 'active': isActive(menu.path) }"
            >
              <el-button link>{{ menu.seoMeta?.title || '' }}</el-button>
            </nuxt-link>
          </div>
        </template>


        <div class="header-search—box">
          <img class="header-search—img" :src="search">
        </div>
    </div>
  </div>

  </div>
</template>

<script lang='' setup>
import logoh from '~/assets/images/logo-h.png';
import search from '~/assets/images/search.png';
import telInfo from '~/assets/images/tel-info.png';
import { ArrowDown } from '@element-plus/icons-vue';

// 导航菜单数据
const { menuItems } = useNavigation()
const menuDate = computed(() => {
  return menuItems.filter(item => item.name !== 'Home');
});

// 当前选择
const selected = ref(null);
const menuModel = ref(false);
const handleShowMenu = (selMenu) => {
  menuModel.value = true;
  selected.value = selMenu;
}
// 监听 selected 的变化
watch(selected, (newVal) => {
  if (newVal) {
    // console.log('newVal: ', newVal);
  }
})
const closeMenuModel = () => {
  menuModel.value = false;
}

// 检查当前路由是否激活
const isActive = (path) => {
  // const fullPath = props.basePath ? `${props.basePath}/${path}` : path
  // return route.path.startsWith(fullPath)
}
</script>

<style lang='scss' scoped>
 .hear-wrap{
  position: relative;
  .sub-menus{
    position: absolute;
    top: calc($top-submenus-height + 1px);
    left: 60px;
    right: 60px;
    /* width: 100%; */
    /* height: auto; */
    background-color: #ffffff;
    z-index: 10;
  }
 }
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: $top-submenus-height;
    padding: 0 80px;
    background: #ffffff;
    box-shadow: 0px 1px 0px 0px rgba(0,0,0,0.06);
    &-img {
      cursor: pointer;
      flex-shrink: 0;
      width: 65px;
      height: 100%;
      top: -17px;
    left: -40;
    z-index: 10;
    position: relative;
    }
    &-search {
    display: flex;
    align-items: center;
 
      &—box {
        border-radius: 50%;
        background: rgba(9, 70, 153, 0.10);
        padding: 5.5px;
        width: 23px;
        height: 23px;
        cursor: pointer;
      }
      &—img {
        flex: 1;
        flex-shrink: 0;
        width: 12px;
        height: 12px;
      }
      .flex{
      
      }
    }
    
  }
</style>


------<template>
  <div class="service-imgs">
    <!-- <el-carousel :interval="4000" type="card" indicator-position="outside" height="80vh">
      <el-carousel-item v-for="(img, index) in images" :key="index">
        <img class="service__img" :src="img" />
      </el-carousel-item>
    </el-carousel> -->

    <div class="service__item" v-for="(item, index) in images" :key="index">
      <div class="service__img">
        <div class="service__label" v-if="index === 0">
          <h2>Services</h2>
          <h4>High quality</h4>
        </div>
        <img  :src="item.src" />
        <p class="service__value">{{ item.value }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
const imageModules = import.meta.glob('~/assets/images/*.png', { eager: true, import: 'default' });

const images = [
  {src: imageModules['/assets/images/pct-hpcs.png'], value: "PCT HPCS"},
  {src: imageModules['/assets/images/automatic-system.png'], value: "Automatic System"},
  {src: imageModules['/assets/images/e-hub.png'], value: "eHub"},
  {src: imageModules['/assets/images/web-ip.png'], value: "Web IP"},
];
</script>

<style lang='scss' scoped>
  .service-imgs{
    width: 100%;
    /* height: 100%; */
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 80px;

    .service__img {
      width: 100%;
      height: 100%;
      object-fit: cover; /* 让图片填满卡片并裁剪适配 */
      border-radius: 8px;
      overflow: hidden;

      position: relative;
   
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .service__label {
      position: absolute;
      top: 30px;
      left: 44px;
      right: 0;
      color: white;
      
      h2{
        font-size: 36px;
        font-weight: bold;
      }
      h4{
        font-size: 24px;
      }
    }

    .service__value{
      position: absolute;
      bottom: 130px;
      left: 0;
      right: 0;
      color: white;
      text-align: center;
      font-size: 20px;
      font-weight: bold;
    }

    .service__item {
      width: 25%;
      margin-right: 27px;
      &:last-child {
        margin-right: 0;
      }
    }
  }
</style>

@REM ------ cookie

<template>
  <div class="cookie-settings">
    <h4 class="text-lg">Cookie settings</h4>
    <p class="text-sm mt-[12px]">We use cookies to provide you with the best possilble experience. They also allow us to analyze user behavior in ord the website for you.</p>
    <div class="mt-[27px]">
      <el-button type="primary">Reject All</el-button>
      <el-button type="primary">Accept Selection</el-button>
      <el-button >Accept all</el-button>
    </div>
  </div>
</template>

<script lang='' setup>

</script>

<style lang='scss' scoped>
  .cookie-settings{
    background: rgba(23, 88, 183, 1);
    color: #ffffff;
    /* font-size: 14px; */
    text-align: center;
    height: 168px;
    padding: 16px;

    .el-button{
      border-radius: 0px;
      padding: 8px 21px;
      font-size: 13px;
      border-color: #ffffff;
      color: rgba(23, 88, 183, 1);

      &--primary{
        background: rgba(23, 88, 183, 1);
        border-color: #ffffff;
        color: #ffffff;
        &:hover{
          border-color: #ffffff;
        }
      }
    }
  }
</style>


------ 0806 SubMunes.vue


<template>
  <div class="hear-wrap">
    <div class="header">
      <div>
        <nuxt-link to="/">
          <img class="header-img" :src="logoh" />
        </nuxt-link>
      </div>
      <div class="header-search">
        <!-- 循环渲染一级菜单 -->
        <template v-for="menu in menuDate" :key="menu.name">
          <!-- 有子菜单的一级菜单（显示弹窗） -->
          <el-popover
            v-if="menu?.children?.length"
            :popper-style="{ width: 'auto', left: '120px', right: '120px', display: 'block' }"
            :show-arrow="false"
            placement="bottom"
            trigger="click"
            :visible="menuModel && selected?.name === menu.name"  <!-- 精准控制显示 -->
            @show="handleShowMenu(menu)"
          >
            <template #reference>
              <div class="menu-item">
                <el-button link class="menu-text">
                  {{ menu.seoMeta?.title || '' }}
                </el-button>
                <el-icon class="el-icon--right">
                  <ArrowDown />
                </el-icon>
              </div>
            </template>
            <!-- 弹窗内容组件 -->
            <TopMenuItemModals 
              :selectedMenu="selected"  
              @close="closeMenuModel"  <!-- 接收关闭事件 -->
            />
          </el-popover>

          <!-- 无子菜单的一级菜单（直接链接） -->
          <div v-else class="menu-item">
            <nuxt-link
              :to="menu.path"
              class="menu-link"
              :class="{ 'active': isActive(menu.path) }"
            >
              <el-button link class="menu-text">{{ menu.seoMeta?.title || '' }}</el-button>
            </nuxt-link>
          </div>
        </template>

        <div class="header-search—box">
          <img class="header-search—img" :src="search" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue';
import { useRoute } from 'vue-router';
import logoh from '~/assets/images/logo-h.png';
import search from '~/assets/images/search.png';
import { ArrowDown } from '@element-plus/icons-vue';
import TopMenuItemModals from './MenuItemModals.vue';
import { useNavigation } from '~/composables/useNavigation'; // 假设存在此导航数据 composable

// 导航菜单数据（过滤掉首页）
const { menuItems } = useNavigation();
const menuDate = computed(() => {
  return menuItems.filter(item => item.name !== 'Home');
});

const route = useRoute();
const selected = ref(null);
const menuModel = ref(false);

// 显示弹窗并记录选中的菜单
const handleShowMenu = (selMenu) => {
  menuModel.value = true;
  selected.value = selMenu;
};

// 关闭弹窗
const closeMenuModel = () => {
  menuModel.value = false;
  selected.value = null;
};

// 检查路由激活状态
const isActive = (path) => {
  return route.path.startsWith(path);
};
</script>

<style lang='scss' scoped>
.hear-wrap {
  position: relative;

  .sub-menus {
    position: absolute;
    top: calc($top-submenus-height + 1px);
    left: 60px;
    right: 60px;
    background-color: #ffffff;
    z-index: 10;
  }
}

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: $top-submenus-height;
  padding: 0 80px;
  background: #ffffff;
  box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.06);

  &-img {
    cursor: pointer;
    flex-shrink: 0;
    width: 65px;
    height: 100%;
    top: -17px;
    left: -40px;
    z-index: 10;
    position: relative;
  }

  &-search {
    display: flex;
    align-items: center;

    &—box {
      border-radius: 50%;
      background: rgba(9, 70, 153, 0.10);
      padding: 5.5px;
      width: 30px;
      height: 30px;
      cursor: pointer;
    }

    &—img {
      flex: 1;
      flex-shrink: 0;
      width: 20px;
      height: 20px;
    }
  }
}

.menu-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 40px;
}

.menu-text {
  font-weight: 700 !important;
  color: #333333 !important;
  transition: color 0.2s ease-in-out;
  
  &:hover {
    color: #094699 !important;
  }
}

.menu-link.active .menu-text {
  color: #094699 !important;
}

.el-button--text {
  padding: 0;
  background: none !important;
}
</style>

----
    <template v-for="menu in menuDate" :key="menu.name">
          <!-- 一级菜单下有子菜单 -->
          <el-popover
            v-if="menu?.children?.length"
            :popper-style="{ width: 'auto', left: '120px', right: '120px', display: 'block' }"
            :show-arrow="false"
            placement="bottom"
            trigger="click"
            :menuitem="menu"
            @show="handleShowMenu(menu)"
            popper-class="custom-nav-popover"  
          >
          <!-- trigger="hover" -->
            <template #reference>
              <!-- 一级菜单项 -->
              <div class="menu-item">
                <el-button link class="menu-text">
                  {{ menu.seoMeta?.title || '' }}
                </el-button>
                <el-icon class="el-icon--right" v-if="menu.children">
                  <ArrowDown />
                </el-icon>
              </div>
            </template>
            <!-- 二级菜单项 -->
            <TopMenuItemModals v-if="menuModel" @closeMenuModel="closeMenuModel" :selectedMenu="selected"  @close="closeMenuModel"  />
          </el-popover>

          <!-- 一级菜单无子菜单，直接渲染链接 -->
          <div v-else class="menu-item">
            <nuxt-link
              :to="menu.path"
              class="menu-link"
              :class="{ 'active': isActive(menu.path) }"
            >
              <el-button link class="menu-text">{{ menu.seoMeta?.title || '' }}</el-button>
            </nuxt-link>
          </div>
        </template>