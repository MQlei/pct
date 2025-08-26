<template>
  <div class="company-news">
    <div class="company-news__content">
      <CardInfo 
        class="company-news__card" 
        :isActive="selectedCard === item" 
        :title="'Operations Contacts'"    
        :date="formatDate(item.createTime)"  
        v-for="item in jobList" 
        :key="item.id" 
        @click="handleClick(item)"
      >
        <!-- 匿名插槽：新闻图片 -->
        <div class="card-img">
          <img :src="bgCompanyNews" alt="News image">
        </div>

        <!-- 具名插槽：新闻内容 -->
        <template #extraIntro>
          <div class="extra-text">
            <div class="flex justify-between items-center mb-[12px]">
              <h6 class="txt-h">{{ item.title }}</h6>
              <p class="txt-d">{{ formatDate(item.createTime) }}</p>
            </div>
            <div v-html="item.newsContent"></div>
          </div>
        </template>
      </CardInfo>

      <!-- 空数据提示：优化用户体验 -->
      <div v-if="jobList.length === 0 && !loading" class="empty-tip">
        暂无新闻数据
      </div>
    </div>

    <!-- 分页组件：增加current-page、page-size绑定，添加页码切换事件 -->
    <div class="pagination-box">
      <el-pagination 
        background 
        layout="total, sizes,  pager, next, jumper"
        :total="total" 
        :current-page="currentPage"  
 
        :page-sizes="[6, 12, 18, 24]"  
        @current-change="handlePageChange"  
        @size-change="handleSizeChange"    
      />
    </div>
  </div>
</template>

<script setup >
import { ref, onMounted } from 'vue';  // 补充onMounted导入（原代码可能遗漏）
import bgCompanyNews from "~/assets/images/bg-company-news.png";

// 1. 分页核心状态：当前页码、每页条数、总条数
const currentPage = ref(1);    // 默认第一页
const pageSize = ref(6);       // 每页显示9条（匹配原代码v-for="item in 9"的设计）
const total = ref(0);          // 总数据条数（从接口获取）
const loading = ref(false);    // 加载状态（优化用户体验，避免重复请求）

// 2. 列表数据状态
const selectedCard = ref(null);  // 初始值设为null，避免与item冲突
const jobList = ref([]);

// 3. 页面挂载时请求第一页数据
onMounted(() => {
  fetchJobList();
});

// 4. 接口请求：增加分页参数，添加加载状态
const fetchJobList = async () => {
  try {
    loading.value = true;  // 开始加载
    const token = '043f6736-89b6-4b29-a8ce-b9e4fa4eb58b';
    const response = await $fetch(`/api-proxy/cms/news/list`, { 
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        // 若接口需要Token认证，取消注释下方代码（注意格式：Bearer + 空格 + Token）
        // 'Authorization': `Bearer ${token}`
      },
      credentials: 'include',
      method: 'GET',
      // 关键：传递分页参数（pageNum=当前页码，pageSize=每页条数）
      params: {
        pageNum: currentPage.value,
        pageSize: pageSize.value
      }
    });  

    if (response.code === 200) {
      jobList.value = response.rows;  // 接口返回的当前页数据
      total.value = response.total;   // 接口返回的总数据条数（关键：同步分页组件总条数）
      // 重置选中状态（切换页码时取消之前的选中）
      selectedCard.value = null;
    } else {
      console.error('Failed to fetch job list:', response.msg);
      jobList.value = [];  // 接口报错时清空列表
      total.value = 0;
    }
  } catch (error) {
    console.error('Error fetching job list:', error);
    jobList.value = [];
    total.value = 0;
  } finally {
    loading.value = false;  // 无论成功/失败，结束加载
  }
};

// 5. 分页事件：页码切换（点击上一页/下一页/具体页码时触发）
const handlePageChange = (newPage) => {
  currentPage.value = newPage;  // 更新当前页码
  fetchJobList();               // 重新请求对应页数据
};

// 6. 分页事件：每页条数切换（可选功能，如用户需要切换10条/20条每页）
const handleSizeChange = (newSize) => {
  pageSize.value = newSize;  // 更新每页条数
  currentPage.value = 1;     // 切换每页条数时重置为第一页
  fetchJobList();            // 重新请求数据
};

// 7. 日期格式化（保持原逻辑，优化边界处理）
const formatDate = (dateString) => {
  if (!dateString) return '未知日期';  // 空值时显示友好提示
  const date = new Date(dateString);
  // 兼容IOS系统（IOS不识别'-'分隔的日期，需转为'/'）
  const normalizedDate = new Date(dateString.replace(/-/g, '/'));
  return `${String(normalizedDate.getDate()).padStart(2, '0')}.${String(normalizedDate.getMonth() + 1).padStart(2, '0')}.${normalizedDate.getFullYear()}`;
};

// 8. 卡片点击选中（保持原逻辑）
const handleClick = (item) => {
  selectedCard.value = item;
};
</script>

<style lang="scss" scoped>
.company-news{
  &__content{
    @apply flex flex-wrap;
    gap: 32px;
    margin-bottom: 50px;
    transition: all 0.3s ease;
  }

  &__card{
    width: calc((100% - 32px * 2) / 3);
    box-sizing: border-box;
    cursor: pointer;
    transition: all 0.3s ease;
    
    &:hover {
      transform: translateY(-5px) scale(1.01);
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    }
    
    &.is-active {
      box-shadow: 0 10px 20px rgba(0, 86, 210, 0.15);
    }

    .card-img{
      width: 100%;
      height: 240px;
      border-top-left-radius: 8px;
      border-top-right-radius: 8px;
      overflow: hidden;
      
      img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
        transition: transform 0.7s ease;
      }
      
      &:hover img {
        transform: scale(1.05);
      }
    }
  }

  .pagination-box{
    display: flex;
    justify-content: center;
    margin-bottom: 30px; 
  }

  .extra-text{
    padding: 18px 14px 24px;
    font-weight: 400;
    font-size: 20px;
    color: #333333;
    transition: all 0.3s ease;
    
    .company-news__card:hover & {
      color: #0056D2;
    }

    .txt-h{
      font-weight: 800;
      font-size: 24px;
      color: #262729;
      transition: color 0.3s ease;
      margin: 0;  
      
      .company-news__card:hover & {
        color: #0056D2;
      }
    }
    
    .txt-d{
      font-weight: 400;
      font-size: 14px;
      color: #999999;
      transition: color 0.3s ease;
      margin: 0; 
      
      .company-news__card:hover & {
        color: #666;
      }
    }
  }

  /* // 空数据提示样式 */
  .empty-tip{
    width: 100%;
    text-align: center;
    padding: 50px 0;
    color: #999;
    font-size: 16px;
  }
  
  :deep(.card-box__title),
  :deep(.card-box__date){
    display: none;
  }
  
  :deep(.card-info .card-box){
    padding: 0;
    transition: all 0.3s ease;
  }

  /* // 加载状态样式（可选，配合loading状态使用） */
  :deep(.el-loading-mask){
    z-index: 10;
  }
}
</style>