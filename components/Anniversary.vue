<template>
  <div class="anniversary">
    <div class="tit-box">
      <img class="pct-year__img w-[588px] h-[184px]" :src="pctYear" />
      <div class="year-box w-[528px]">
        <h3 class="year-h">15 Years' anniversary of PCT's operation</h3>
        <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim
          velit mollit. Exercitation veniam consequat sunt nostrud amet.
        </p>
        <el-button type="primary" class="btnclass">Click to see more</el-button>
      </div>
    </div>
    <div>
      <el-tabs class="custom-tabs" type="border-card" v-model="activeName" @tab-click="handleTabClick">
        <el-tab-pane label="LONG TERM SCHEDULE" name="first">
          <div class="lts-con">
            <el-input v-model="longTerm" @focus="handleFocus" @blur="handleBlur" :placeholder="currentPlaceholder">
            </el-input>
            <!-- placeholder="type here..." -->
            <p class="lts-txt">Search with Vessel Name or Vessel Operator or call Sign</p>
            <el-button>TRACK</el-button>
          </div>
        </el-tab-pane>
        <el-tab-pane label="WORKING VESSELS" name="second">
          <div class="lts-con">
            <el-input v-model="longTerm" @focus="handleFocus" @blur="handleBlur" :placeholder="currentPlaceholder">
            </el-input>
            <!-- placeholder="type here..." -->
            <p class="lts-txt" style="margin-left: -115px;">Search with Vessel Name  or call Sign</p>
            <el-button>TRACK</el-button>
          </div></el-tab-pane>
        <el-tab-pane label="SCHEDULE VESSELS" name="third">
          <div class="lts-con">
            <el-input v-model="longTerm" @focus="handleFocus" @blur="handleBlur" :placeholder="currentPlaceholder">
            </el-input>
            <!-- placeholder="type here..." -->
            <p class="lts-txt">Search with Vessel Name  or Vessel Operator or call Sign</p>
            <el-button>TRACK</el-button>
          </div></el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script lang='' setup>
  import pctYear from '~/assets/images/pct-year.png';

  // 原始占位文本
  const originalPlaceholder = ref('type here...');
  // 当前显示的占位文本
  const currentPlaceholder = ref('type here...');

  // : '请输入内容'   // 当前显示的占位文本
  const longTerm = ref('');
  const activeName = ref('first');
  const handleTabClick = (tab, event) => {
    // console.log(event);
  }

  // 聚焦时清空占位文本
  const handleFocus = () => {
    currentPlaceholder.value = '';
  };

  // 失焦时恢复占位文本（如果输入框为空）
  const handleBlur = () => {
    if (!longTerm.value) {
      currentPlaceholder.value = originalPlaceholder.value;
    }
  };
</script>

<style lang='scss' scoped>
  .anniversary {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    /* background: rgba(247, 247, 248, 1); */
    background: #EDF1F6;

    color: #262729;
    /* padding: 15% 12vh 0 7.3vh; */
    align-items: center;
    /* 垂直居中 */
    justify-content: center;
    /* 水平居中 */

    .tit-box {
      /* max-width: 70vh; */
      margin-right: 12vh;

      .year-box {
        padding-left: 47px;
      }

      .year-h {
        /* font-size: 50px; */
        padding: 48px 0 18px;
        font-family: ArialMT;
        font-size: 50px;
        color: #262729;
        line-height: 50px;
        text-align: left;
        font-style: normal;
        text-transform: none;
      }

      p {

        font-family: ArialMT;
        font-size: 14px;
        color: #262729;
        /* line-height: 14px; */
        text-align: left;
        /* font-style: normal; */
        /* text-transform: none; */
        line-height: 1.8; /* 行高20px左右 */
        letter-spacing: 0.5px; /* 轻微增加字间距 */
      }

      .btnclass {
        width: 170px;
        height: 63px;
        background: #1758B6;
        border-radius: 2px;
        margin-top: 48px;
      }
    }

    .el-tabs {
      height: 538px;
      /* width: 450px; */
      margin-top: 13px;
      border-radius: 8px;
      /* border: 1px solid rgba(23, 88, 182, 0.21); */
      box-sizing: border-box;
 

    }

    .custom-tabs {
      :deep(.el-tabs__item) {
        flex: 0 0 150px;
        height: auto;
        white-space: normal;
        padding: 12px 0;
        text-align: center;
        color: #333333;
        font-weight: 700;

      }
   

      :deep(.el-tabs__nav) {
        display: flex;
        align-items: stretch;
        /* // 关键：让子项撑开整个父容器高度 */
        height: auto !important;
      }

      :deep(.el-tabs__nav-wrap),
      :deep(.el-tabs__nav-scroll) {
        height: auto !important;
        overflow: visible !important;
      }

      :deep(.el-tabs__header) {
        height: auto !important;
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
      }

      /* :v-deep(.el-tabs__nav-prev),
      :v-deep(.el-tabs__nav-next) {
        display: none !important;
      } */
      ::v-deep(.el-tabs__item.is-active) {
        border-bottom: 2px solid #1758B6;
        font-weight: 800;
        font-family: Arial, Arial;
        /* color: #3186ff; */
        color: #1758B6;
        box-sizing: border-box;
        
      }
    }

    :deep(.el-tabs--border-card > .el-tabs__content){
        padding: 0;
      }
    .lts-con {
      margin: 104px 20px 40px;
      display: flex;
      flex-direction: column;
      align-items: center;
 

      .lts-txt {
        padding: 28px 0 113px;
        color: #181818;
        /* margin-left: -115px; */
  
      }

      

      .el-button {
        /* border-color: rgba(23, 88, 182, 1); */
        color: #262729;
        padding: 14px 124px;
        width: 300px;
        height: 23px;
      }
      .el-button:hover {
        background-color: #1758B6; /* 使用与标题按钮一致的蓝色背景 */
        color: white; /* 文字颜色变为白色，增强对比度 */
        border-color: #1758B6; /* 边框颜色同步 */
      }
    }
  }
</style>