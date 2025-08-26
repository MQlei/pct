<template>
  <div class="scholarships-program">
    <div class="flex justify-end mb-4">
      <el-dropdown popper-class="custom-popper">
        <el-button class="custom-dropdown-button">
          {{ selectedYear }}<el-icon class="el-icon--right"><arrow-down /></el-icon>
        </el-button>
        <template #dropdown>
          <el-dropdown-menu class="custom-dropdown-menu">
            <el-dropdown-item
              class="wide-item"
              v-for="item in years" 
              :key="item.value" 
              @click="handleYearChange(item.value)"
            >
              {{ item.value }}
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
    
    <div class="scholarships-program__content">
      <CardInfo 
        class="scholarships-program__card" 
        isBgGray 
        :title="item.title" 
        :date="formatDate(item.createTime)"  
        v-for="item in jobList" 
        :key="item.id"
        :isActive="selectedCard?.id === item.id"
        @click="handleClick(item)"
      >
        <div class="card-img">
          <img :src="scholarshipsBg" alt="Scholarship image">
        </div>
      </CardInfo>
      
      <!-- 无数据状态 -->
      <div v-if="jobList.length === 0" class="no-data">
        <p>No scholarships found for {{ selectedYear }}</p>
      </div>
    </div>
    
    <!-- 分页组件 -->
    <div class="pagination-container" v-if="total > 0">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[6, 12, 18, 24]"
        :page-size="pageSize"
        layout="total, sizes,  pager, next, jumper"
        :total="total"
      ></el-pagination>
    </div>

    <!-- 详情浮层 -->
    <el-dialog 
      v-model="isDetailVisible" 
      title="Auction Details" 
      :width="dialogWidth"
      :before-close="handleClose"
      class="detail-dialog"
    >
      <div class="detail-content" v-if="selectedCard">
        <div class="detail-image">
          <img :src="scholarshipsBg" alt="Cargo auction detailed image">
        </div>
        <div class="detail-info">
      
          <h3>Unclaimed Cargo Announcement Auction No. {{ selectedCard.id }} /{{ selectedYear }}</h3>
          <p class="date">Date: {{ formatDate(selectedCard.createTime) }}</p>
              <div v-html="selectedCard.newsContent"></div>
          <!-- <div class="detail-description">
            <p>{{ selectedCard.description || 'This auction features unclaimed cargo items from various international shipments. All items have been stored for the legally required period and are now available for public auction.' }}</p>
            <p class="mt-2">Auction details:</p>
            <ul class="mt-1">
              <li>Registration required before participation</li>
              <li>Inspection available 3 days prior to auction</li>
              <li>Payment due within 48 hours of winning bid</li>
              <li>All sales are final</li>
            </ul>
          </div> -->
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script setup >
import { ArrowDown } from '@element-plus/icons-vue';
import scholarshipsBg from '~/assets/images/scholarships-bg2.png';
import { ref, onMounted } from 'vue';

const years = [
  { value: '2025', label: '2025' },
  { value: '2024', label: '2024' },
  { value: '2023', label: '2023' },
  { value: '2022', label: '2022' },
  { value: '2021', label: '2021' },
  { value: '2020', label: '2020' },
];

// 分页相关变量
const currentPage = ref(1);        // 当前页码
const pageSize = ref(6);           // 每页显示条数
const total = ref(0);              // 总记录数

// 其他状态变量
const selectedYear = ref(years[0].value);
const selectedCard = ref(null);
const isDetailVisible = ref(false);
const dialogWidth = ref('80%');
const jobList = ref([]);

// 获取列表数据，增加分页参数
const fetchJobList = async () => {
  try {
    const token = '043f6736-89b6-4b29-a8ce-b9e4fa4eb58b';
    const response = await $fetch(`/api-proxy/cms/scholarships/list`, { 
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        // 'Authorization': `Bearer ${token}`
      },
      credentials: 'include',
      method: 'GET',
      // 添加分页参数和年份参数
      query: { 
        year: selectedYear.value,
        pageNum: currentPage.value,
        pageSize: pageSize.value
      } 
    });  

    if (response.code === 200) {
      jobList.value = response.rows || [];
      total.value = response.total || 0; // 从接口获取总条数
      // console.log(`获取${selectedYear.value}年第${currentPage.value}页数据成功`, jobList.value);
    } else {
      // console.error('Failed to fetch job list:', response.msg);
      jobList.value = [];
      total.value = 0;
    }
  } catch (error) {
    console.error('Error fetching job list:', error);
    jobList.value = [];
    total.value = 0;
  }
};

// 年份变化处理
const handleYearChange = (year) => {
  selectedYear.value = year;
  currentPage.value = 1; // 切换年份时重置到第一页
  fetchJobList();
  selectedCard.value = null;
  isDetailVisible.value = false;
};

// 每页条数变化
const handleSizeChange = (size) => {
  pageSize.value = size;
  currentPage.value = 1; // 改变每页条数时重置到第一页
  fetchJobList();
};

// 当前页码变化
const handleCurrentChange = (page) => {
  currentPage.value = page;
  fetchJobList();
  
  // 滚动到页面顶部，提升用户体验
  // window.scrollTo({
  //   top: 0,
  //   behavior: 'smooth'
  // });
};

// 日期格式化
const formatDate = (dateString) => {
  if (!dateString) return '';
  const date = new Date(dateString);
  if (isNaN(date.getTime())) return '';
  return `${String(date.getDate()).padStart(2, '0')}.${String(date.getMonth() + 1).padStart(2, '0')}.${date.getFullYear()}`;
};

// 卡片点击处理
const handleClick = (item) => {
  selectedCard.value = item;
  isDetailVisible.value = true;
};

// 关闭弹窗
const handleClose = () => {
  isDetailVisible.value = false;
};

// 页面初始化
onMounted(() => {
  fetchJobList();

  // 响应式调整对话框宽度
  const handleResize = () => {
    if (window.innerWidth < 768) {
      dialogWidth.value = '95%';
    } else if (window.innerWidth < 1200) {
      dialogWidth.value = '85%';
    } else {
      dialogWidth.value = '80%';
    }
  };
  
  handleResize();
  window.addEventListener('resize', handleResize);
  
  return () => {
    window.removeEventListener('resize', handleResize);
  };
});
</script>

<style lang="scss" scoped>
.scholarships-program{
  &__content{
    @apply flex flex-wrap;
    gap: 20px; 
    margin-top: 20px;
    margin-bottom: 30px;
  }

  &__card{
    width: calc((100% - 40px) / 3);
    box-sizing: border-box;
    cursor: pointer;
    .card-img{
      width: 100%;
      height: 236px;
      border-radius: 8px;
      overflow: hidden;
      margin-bottom: 14px;
      img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
      }
    }
  }

  :deep(.card-box__title){
    margin-bottom: 20px;
  }
  :deep(.card-info .card-box){
    padding: 16px 16px 21px;
  }
  .scholarships-program__card{
    &:hover {
      border-radius: 15px;
      box-shadow: 0 0 0 2px rgba(9, 70, 153, 0.2), 0 4px 20px rgba(9, 70, 153, 0.15);
      transition: all 0.3s ease;
      transform: translateY(-2px);
    }
  }

  .custom-dropdown-button {
    min-width: 120px;
    text-align: left;
  }

  :deep(.custom-dropdown-menu) {
    min-width: 120px;
  }

  :deep(.wide-item) {
    width: 100%;
  }

  // 分页样式
  .pagination-container {
    @apply flex justify-center mt-8;
  }

  // 无数据样式
  .no-data {
    @apply w-full text-center py-12 text-gray-500;
    font-size: 1.1rem;
  }

  :deep(.detail-dialog) {
    .el-dialog__body {
      padding: 20px;
      max-height: 80vh;
      overflow-y: auto;
    }
  }

  .detail-content {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;

    .detail-image {
      flex: 1;
      min-width: 300px;
      border-radius: 8px;
      overflow: hidden;
      img {
        width: 100%;
        height: auto;
        object-fit: cover;
      }
    }

    .detail-info {
      flex: 1;
      min-width: 300px;

      h3 {
        font-size: 1.25rem;
        color: #094699;
        margin-bottom: 15px;
      }

      .date {
        color: #666;
        margin-bottom: 20px;
        font-style: italic;
      }

      .detail-description {
        line-height: 1.6;

        ul {
          padding-left: 20px;
          li {
            margin-bottom: 8px;
          }
        }
      }
    }
  }
}

@media (max-width: 1024px) {
  .scholarships-program {
    &__card {
      width: calc((100% - 20px) / 2);
    }
  }
}

@media (max-width: 768px) {
  .scholarships-program {
    &__card {
      width: 100%;
    }

    .detail-content {
      flex-direction: column;
    }

    // 移动端分页样式调整
    :deep(.el-pagination) {
      .el-pagination__sizes {
        display: none;
      }
    }
  }
}
</style>
