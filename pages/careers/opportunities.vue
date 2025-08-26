<template>
  <div class="opportunities">
    <div class="opportunities__header text-b mb-[34px]">
      <h4>At PCT, we believe our people are the driving force behind our success—today and in the future.</h4>
    </div>
    <div class="opportunities__content mb-[70px]">
      <p class="mb-[34px]">
        That is why we consistently invest in our employee’s growth, offering incentives and continuous development opportunities. Our goal is to cultivate a workplace that empowers every employee to build a meaningful career path with long-term prospects. We are committed to maintaining a high-integrity, productive, and humane work environment where both professional and personal development are a priority.
      </p>
      <p class="text-b mb-[34px]">
        You may send us your CV to: cv@pct.com.gr
      </p> 
      <p>
        Your personal data will remain strictly confidential and will be processed by PCT HR Department solely for assessment purposes when job opportunities arise. Your CV will be kept on file for two years unless you request otherwise. 
      </p>
      <p>
        We agree with your suggestion concerning career opportunities.
      </p>
    </div>

    <div>
      <div class="mb-[35px]">
        <h2 class="txt-h txt-wt">JOBS</h2>
      </div>
      <div class="opportunities__jobs">
        <CardInfo 
          class="opportunities__card" 
          :isReadMore="false" 
          :isActive="selectedCard === job.id" 
          :title="job.jobName" 
          :date="formatDate(job.createTime)" 
          v-for="job in jobList" 
          :key="job.id" 
          @click="handleClick(job)" 
        />
      </div>
    </div>

    <!-- 浮层背景（点击可关闭）       @click="closeDetail" -->
    <div 
      v-if="showDetail" 
      class="opportunities__overlay" 

    ></div>

    <!-- 浮层内容 -->
    <div v-if="showDetail" class="opportunities__detail">
      <div class="detail__header">
        <h3 class="detail__title">{{ currentJob.jobName }}</h3>
        <span class="detail__date">{{ currentJob.createTime }}</span>
        <button class="detail__close" @click="closeDetail">×</button>
      </div>

      <div class="detail__content">
        <div class="detail__section">
          <div v-html="currentJob.jobContent"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';

// 职位列表数据
const jobList = ref([]);
const selectedCard = ref(null);
const showDetail = ref(false); // 控制浮层显示
const currentJob = ref(null); // 存储当前选中的职位详情

// 控制背景滚动
const toggleBodyScroll = (isDisabled) => {
  const body = document.body;
  if (isDisabled) {
    // 保存当前滚动位置，避免弹窗关闭后页面回到顶部
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    body.style.position = 'fixed';
    body.style.top = `-${scrollTop}px`;
    body.style.width = '100%';
    body.style.overflow = 'hidden';
  } else {
    // 恢复滚动位置
    const scrollTop = Math.abs(parseInt(body.style.top || '0'));
    body.style.position = '';
    body.style.top = '';
    body.style.width = '';
    body.style.overflow = '';
    window.scrollTo(0, scrollTop);
  }
};

// 监听showDetail变化，控制滚动
watch(showDetail, (newVal) => {
  toggleBodyScroll(newVal);
});

// 页面初始化时获取职位列表
onMounted(() => {
  fetchJobList('lang');
});

// 调用接口获取职位列表
const fetchJobList = async (value) => {
  try {
    const token = '043f6736-89b6-4b29-a8ce-b9e4fa4eb58b';
    const response = await $fetch(`/api-proxy/cms/job/list?${value}`, { 
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      credentials: 'include',
      method: 'GET'
    });   
    if (response.code === 200) {
      jobList.value = response.data;
    } else {
      console.error('Failed to fetch job list:', response.msg);
    }
  } catch (error) {
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

const handleClick = (item) => {
  selectedCard.value = item.id;
  showDetail.value = true; // 点击时显示浮层
  currentJob.value = item;
  console.log("Selected job:", item);
};

// 关闭浮层的方法
const closeDetail = () => {
  showDetail.value = false;
};
</script>

<style lang="scss" scoped>
.opportunities {
  .text-b {
    color: rgba(10, 71, 153, 1);
  }

  .txt-wt {
    font-weight: 800;
  }

  &__header {
    font-size: 30px;
    color: #333333;
    margin-bottom: 28px;
  }

  &__content {
    font-size: 20px;
    color: #262729;
  }

  &__jobs {
    @apply flex flex-wrap;
    column-gap: 20px;
    row-gap: 24px;
    margin-bottom: 50px;
  }

  &__card {
    width: calc((100% - 20px * 2) / 3);
    box-sizing: border-box;

    &:hover {
      border-radius: 15px;
      box-shadow: 0 0 0 2px rgba(9, 70, 153, 0.2), 0 4px 20px rgba(9, 70, 153, 0.15);
      transition: all 0.3s ease;
    }
  }

  :deep(.card-box__title) {
    margin-bottom: 34px;
  }

  .txt-h {
    font-size: 50px;
    color: #333333;
  }

  /* // 浮层背景 */
  &__overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 100;
    backdrop-filter: blur(2px);
  }

  /* // 浮层内容 */
  &__detail {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 90%;
    max-width: 800px;
    max-height: 80vh;
    background-color: white;
    border-radius: 15px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    z-index: 2101;
    overflow-y: auto;
    padding: 30px;
    box-sizing: border-box;

    .detail__header {
      position: relative;
      margin-bottom: 25px;
      padding-bottom: 15px;
      border-bottom: 1px solid #eee;

      .detail__title {
        font-size: 24px;
        color: rgba(10, 71, 153, 1);
        margin: 0 0 10px 0;
      }

      .detail__date {
        color: #666;
        font-size: 14px;
      }

      .detail__close {
        position: absolute;
        top: 0;
        right: 0;
        background: none;
        border: none;
        font-size: 24px;
        cursor: pointer;
        color: #999;

        &:hover {
          color: #333;
        }
      }
    }

    .detail__content {
      .detail__section {
        margin-bottom: 25px;

        h4 {
          font-size: 18px;
          color: #333;
          margin-bottom: 10px;
        }

        p {
          color: #666;
          line-height: 1.6;
          margin-bottom: 16px;
        }

        ul {
          padding-left: 20px;
          margin-bottom: 16px;

          li {
            color: #666;
            margin-bottom: 8px;
            line-height: 1.5;
          }
        }
      }
    }
  }
}
</style>