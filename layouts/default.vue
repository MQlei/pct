<template>
  <div class="layout-default">
    <div class="layout-default__header">
 
      <!-- <TopSubMunes /> -->

      <AffixWrap>
        <TopSubTime />
        <TopSubMunes />
      </AffixWrap>
    </div>

    <!-- <slot /> -->
 
      <div class="bg">
        <div class="bg-box">
          <img class="bg-f" :style="{height: bannerImgHeightPx}" :src="bannerImg" />
          <div class="bg-tit" v-if="breadcrumbItems?.length > 0">
            {{ breadcrumbItems[breadcrumbItems.length - 1].title }}
          </div>
        </div>
      </div>
     <el-container >
      <div class="nav-container">
            <!-- <div>面包屑</div> -->
        <AppBreadcrumb />
      </div>
      <div class="fill-height">
        <el-scrollbar view-class="content-view" >
          <el-main class="main">
            <Transition name="fade-transform" mode="out-in">
              <slot />
            </Transition>
          </el-main>
        </el-scrollbar>
      </div>
    </el-container>
    
    <BottomFooder />
  </div>
</template>

<script lang='' setup>
  import { storeToRefs } from 'pinia';
  import { useRoute } from 'vue-router';
  import { useAppStore } from "~/stores/useAppStore";
  
  const route = useRoute();
  const { menuItems } = useNavigation();
  const { breadcrumbItems } = useBreadcrumb(route, menuItems);
  
  const appStore = useAppStore();
  
  // 初始化设置
  const initBanner = () => {
    // const imgUrl = `../assets/images/pct-hpcs.png`;
    const imgUrl = `/images/banner-${route.name}.png`;
    appStore.setBannerImg(imgUrl);
     // appStore.setBannerImgHeight(260);
    appStore.setBannerImgHeight(520) // 或根据路由动态设置不同高度
  }
  
  // 首次加载执行
  initBanner()
  
  // 监听路由变化
  watch(
    () => route.name,
    (newName) => {
      if (newName) {
        initBanner();
        // console.log('breadcrumbItems: ', breadcrumbItems);
      }
    }
  )
  
  const { bannerImg, bannerImgHeightPx } = storeToRefs(appStore) // 必须响应式绑定！
  
  </script>

<style lang="scss" scoped>
.layout-default {
  /* height: 100vh;
  display: flex;
  flex-direction: column; */
  .bg{
    &-f{
      width: 100%; 
      height: auto;
    }
    &-box{
      position: relative;
    }
    &-tit{
      position: absolute;
      left: 97px;
      bottom: 55px;
      width: auto;
      font-size: 54px;
      color: #FFFFFF;
      text-align: left;
      /* padding-left: 97px; */
      /* padding-bottom: 55px; */
    }
  }
  .layout-default__header {
    position: sticky;  
    top: 0;            
    z-index: 1000;     
    /* width: 100%;        */
    background: #fff;  
   /* box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1); */
  }
  /* // 内容区域样式 */
  .autobox {
    /* // 为了避免内容被吸顶元素遮挡，可以添加一个等于头部高度的padding-top */
    /* // 这里假设头部高度大约是60px，实际使用时请根据实际高度调整 */
    padding-top: 60px;
  }

  > .el-container{
    display: flex;
    flex-direction: column;
  }

  .nav-container {
    /* position: sticky;
    z-index: 1;
    top: 0; */
  }

  .fill-height {
    flex: 1;
    display: flex;
    height: 0;
     /* // 关键 */
    /* overflow: hidden; */

    .el-scrollbar {
      flex: 1;
      height: 100%;

      .content-view {
        min-height: 100%;
        display: flex;
        flex-direction: column;
      }

      .main {
        background-color: #ffffff;
        display: flex;
        flex-direction: column;
        flex: 1;
        height: auto;
        padding: 16px 100px 70px;
      }
    }
  }

  .footer-box{
    height: auto;
  }
}
</style>
