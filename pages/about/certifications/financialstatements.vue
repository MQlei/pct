<template>
  <div class="financial-statements">
    <div>
      <div class="financial-statements__header">
        <h4>Choose years to download Financial statements</h4>
        <el-dropdown popper-class="custom-dropdown">
          <el-button class="year-selector-btn" @click="handleClick">
            {{ selectedYear }}<el-icon class="el-icon--right"><ArrowDown /></el-icon>
          </el-button>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item
                v-for="item in years"
                :key="item.value"
                @click="selectedYear = item.value"
                class="year-option"
              >
                {{ item.value }}
              </el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
      
      <div class="financial-statements__content">
        <CardInfo 
          :title="'Sustainability Report ' + selectedYear" 
          :date="''" 
          v-for="item in 6" 
          :key="item" 
          class="financial-statements__card"
        >
          <div class="card-img">
            <img :src="financialStatementsImg" alt="Financial statement cover">
            <p class="card-img-time">{{ selectedYear }}</p>
          </div>
          <template v-slot:footer>
            <div class="w-full flex justify-center pb-[30px]">
              <div class="card-btn">
                <i class="i-btn" />
              </div>
            </div>
          </template>
        </CardInfo>
      </div>
    </div>

    <div class="pagination-box">
      <el-pagination background layout="prev, pager, next" :total="90" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { ArrowDown } from '@element-plus/icons-vue';
import financialStatementsImg from '~/assets/images/financialstatements-img.png';

const years = [
  { value: '2025', label: '2025' },
  { value: '2024', label: '2024' },
  { value: '2023', label: '2023' },
  { value: '2022', label: '2022' },
  { value: '2021', label: '2021' },
  { value: '2020', label: '2020' },
];
const selectedYear = ref(years[0].value);

const handleClick = () => {
  // 可以添加点击按钮时的逻辑
};
</script>

<style lang="scss" scoped>
.financial-statements {
  &__header {
    font-size: 30px;
    font-weight: 800;
    color: #333333;
    margin-bottom: 28px;
    @apply flex justify-between items-center;
  }

  // 下拉按钮样式
  .year-selector-btn {
    padding: 8px 20px;
    font-size: 16px;
    border-radius: 6px;
  }

  // 下拉框整体样式
  :deep(.custom-dropdown) {
    width: 280px; // 增加下拉框宽度
    
    // 下拉菜单样式
    .el-dropdown-menu {
      border-radius: 8px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
      border: none;
      padding: 8px 0;
    }
  }

  // 下拉选项样式
  :deep(.year-option) {
    padding: 12px 20px;
    font-size: 15px;
    transition: all 0.2s ease;
    
    &:hover {
      background-color: #f5f7fa;
      color: #1890ff; // hover时文字变色
      padding-left: 24px; // 轻微缩进效果
    }
    
    &:active {
      background-color: #e6f7ff;
    }
  }

  &__content {
    @apply flex flex-wrap;
    gap: 27px;
    margin-bottom: 60px;
  }

  &__card {
    width: calc((100% - 27px * 2) / 3);
    box-sizing: border-box;

   .card-img {
      width: 100%;
      height: 304px;
      border-top-left-radius: 12px;
      border-top-right-radius: 12px;
      overflow: hidden;
      margin-bottom: 14px;
      position: relative;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
      }

     .card-img-time {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 56px;
        color: #FFFFFF;
      }
    }

   .card-btn {
     .i-btn {
        cursor: pointer;
        display: block;
        width: 90px;
        height: 36px;
        background: url('~/assets/images/financialstatements-btn.png') no-repeat;
        background-size: cover;
        background-position: center;

        &:hover {
          background: url('~/assets/images/financialstatements-btn-active.png') no-repeat;
          background-size: cover;
          background-position: center;
        }
      }
    }
  }

  .pagination-box {
    display: flex;
    justify-content: center;
  }

  :deep(.card-info .card-box) {
    padding: 0;
  }

  :deep(.card-box__title) {
    margin-bottom: 40px;
    text-align: center;
  }
}
</style>
