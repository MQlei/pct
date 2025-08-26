<template>
  <div class="philosophy">
    <div class="philosophy__header">
      <h4>Message from Captain Wang Jihang</h4>
    </div>
    <div class="philosophy__content">
      <div class="philosophy__image text">
        <img :src="philosophyCont" alt="Captain's message content">
      </div>
      <!-- person容器设置为相对定位，作为wangbox的定位参考 -->
      <div class="philosophy__image person">
        <img :src="philosophyPerson" alt="Captain Wang Jihang">
        <!-- wangbox使用绝对定位，固定在person容器的底部 -->
        <div class="wangbox">
          <h3>Wang Jihang</h3>
          <p>Managing Director- Captain </p>
        </div>
      </div>
    </div>
    <el-divider />
    <div class="philosophy__header">
      <h4>History – Milestones</h4>
    </div>
    <div>
      <div class="t-btn">
        <el-button 
          v-for="item in years" 
          :key="item.value" 
          :class="{ active: selectedYear === item.value }"
          :color="selectedYear === item.value ? '#1758B6' : undefined" 
          @click="selectedYear = item.value"
        >
          {{ item.label }}
        </el-button>
      </div>
      <div class="year-wrap">
        <!-- 优化后的events循环 -->
        <template v-for="item in filteredEvents" :key="item.id">
          <div class="year-content" :class="{ 'last-item': item.id === filteredEvents.length }">
            <div class="year-image"> 
              <img :src="item.img"  class="event-image">
            </div>
            <div class="year-h">
              <p class="mr-[26px]">{{ item.year }}</p>
              <p>{{ item.month }}</p>
            </div>
            <div class="year-p">
              {{ item.description }}
            </div>
          </div>
        </template>
        
        <!-- 当没有事件时显示提示 -->
        <div v-if="filteredEvents.length === 0" class="no-events">
          No events recorded for {{ selectedYear }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import philosophyCont from '~/assets/images/philosophy-cont.png';
import philosophyPerson from '~/assets/images/philosophy-person.png';
import bgmenu1 from '~/assets/images/bg-menusch1.png'; 
import bgmenu2 from '~/assets/images/bg-menusch2.png';
import bgmenu3 from '~/assets/images/bg-menusch3.png';
  
// 完善事件数据结构，包含更多必要信息
const events = [
  {
    id: 1,
    year: '2025',
    month: 'January',
    img: bgmenu1,
  },
  {
    id: 2,
    year: '2024',
    month: 'May',
    img: bgmenu1,
  },
  {
    id: 3,
    year: '2023',
    month: 'September',
    img: bgmenu1,
  },
  {
    id: 4,
    year: '2022',
    month: 'March',
    img: bgmenu1,
  },
  {
    id: 5,
    year: '2022',
    month: 'November',
    img: bgmenu1,
  },
  {
    id: 6,
    year: '2021',
    month: 'June',
    img: bgmenu1,
  }
  ,
  {
    id: 6,
    year: '2025',
    month: 'June',
    img: bgmenu2,
  }
  ,
  {
    id: 7,
    year: '2025',
    month: 'June',
    img: bgmenu3,
  }
];
  
const years = [
  { value: '2025', label: '2025' },
  { value: '2024', label: '2024' },
  { value: '2023', label: '2023' },
  { value: '2022', label: '2022' },
  { value: '2021', label: '2021' },
  { value: '2020', label: '2020' },
];

const selectedYear = ref(years[0].value); // 默认选择第一个年份

// 根据选中的年份过滤事件
const filteredEvents = computed(() => {
  return events.filter(event => event.year === selectedYear.value);
});
</script>

<style lang="scss" scoped>
.philosophy {
  .el-divider--horizontal {
    margin-top: 79px;
  }

  .philosophy__content {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .el-button {
    border-radius: 0;
    margin-right: 8px; /* 增加按钮间距 */

    &:last-child {
      margin-right: 0;
    }

    &:hover {
      color: #000000;
      background: rgba(23, 88, 182, 0.08);
      border: 1px solid #1758B6;
    }

    &.active {
      padding-left: 64px;
      padding-right: 64px;
      background-color: #1758B6;
      color: white;
    }
  }

  .t-btn {
    margin-bottom: 60px;
    display: flex;
    flex-wrap: wrap; /* 允许按钮换行 */
    gap: 8px;
  }

  &__header {
    font-size: 24px;
    color: rgba(23, 88, 182, 1);
    margin-bottom: 20px;
    font-weight: 500;
  }

  &__content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 40px;

    .philosophy__image {
      margin: 0 10px;

      img {
        width: 100%;
        height: auto;
      }
    }

    .text {
      width: 60%;
    }

    .person {
      max-width: 306px;
      width: 40%;
      margin-left: 50px;
      position: relative;
      padding-bottom: 40px;
    }

    .wangbox {
      position: absolute;
      bottom: 70px;
      left: 50%;
      transform: translateX(-50%);
      width: 180px;
      padding: 5px 15px;
      background: #FFFFFF;
      border-radius: 4px;
      backdrop-filter: blur(10px);
      text-align: center;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

      h3 {
        font-family: Avenir, sans-serif;
        font-weight: 500;
        font-size: 12px;
        color: #094699;
        line-height: 16px;
        margin: 0 0 4px 0;
      }

      p {
        font-family: Avenir, sans-serif;
        font-weight: normal;
        font-size: 9px;
        color: #094699;
        line-height: 10px;
        margin: 0;
      }
    }
  }

  .year-wrap {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 30px; /* 事件卡片之间的间距 */
    flex-wrap: wrap; /* 响应式换行 */
    margin-bottom: 60px;
  }

  .year-content {
    flex: 1;
    min-width: 280px; /* 最小宽度，确保在小屏幕上显示正常 */
    max-width: calc(33.333% - 20px); /* 每行最多显示3个 */

    &.last-item {
      margin-right: 0;
    }
  }

  .year-image {
    width: 100%;
    height: 250px;
    box-sizing: border-box;
    border: solid 1px var(--el-border-color);
    border-radius: 8px;
    overflow: hidden;

    .event-image {
      width: 100%;
      height: 100%;
      object-fit: cover; /* 确保图片覆盖容器且保持比例 */
      transition: transform 0.3s ease;

      &:hover {
        transform: scale(1.03); /* 悬停时轻微放大 */
      }
    }
  }

  .year-h {
    display: flex;
    font-size: 14px;
    color: #333333;
    padding: 29px 0 23px;
  }

  .year-p {
    font-size: 20px;
    color: #094699;
    line-height: 1.4;
  }

  .no-events {
    width: 100%;
    text-align: center;
    padding: 40px;
    color: #666;
    font-style: italic;
  }

  /* 响应式调整 */
  @media (max-width: 1200px) {
    .year-content {
      max-width: calc(50% - 15px); /* 中等屏幕每行显示2个 */
    }
  }

  @media (max-width: 768px) {
    .year-content {
      max-width: 100%; /* 小屏幕每行显示1个 */
    }

    .philosophy__content {
      flex-direction: column; /* 垂直排列 */

      .person {
        width: 80%;
        margin-left: 0;
        margin-top: 30px;
      }

      .text {
        width: 100%;
      }
    }

    .el-button {
      padding: 8px 16px;

      &.active {
        padding-left: 20px;
        padding-right: 20px;
      }
    }
  }
}
</style>
