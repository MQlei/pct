<template>
  <div class="unclaimed-cargo">
    <div class="flex mb-[28px]">
      <div class="mr-[20px]">
        <el-dropdown popper-class="year-custom-popper">
          <el-button @click="handleClickYear">
            {{ selectedYear }}<el-icon class="el-icon--right"><arrow-down /></el-icon>
          </el-button>
          <template #dropdown>
            <el-dropdown-menu class="custom-dropdown-menu">
              <el-dropdown-item
                class="wide-item"
                v-for="item in years" 
                :key="item.value" 
                @click="selectedYear = item.value"
                >
                {{ item.value }}
              </el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>

      <div>
        <el-dropdown popper-class="auction-custom-popper">
          <el-button @click="handleClickAuction">
            {{ selectedAuction }}<el-icon class="el-icon--right"><arrow-down /></el-icon>
          </el-button>
          <template #dropdown>
            <el-dropdown-menu class="custom-dropdown-menu">
              <el-dropdown-item
                class="wide-item"
                v-for="item in auctions" 
                :key="item.value" 
                @click="selectedAuction = item.value"
                >
                {{ item.value }}
              </el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>
    <div class="unclaimed-cargo__content" >
      <!-- <CardInfo class="unclaimed-cargo__card" :isActive="selectedCard === item" :title="'Unclaimed Cargo Announcement Auction No. 88 /2025'" :date="'24.04.2025'" v-for="item in 12" :key="item" @click="handleClick(item)"> -->
      <CardInfo class="unclaimed-cargo__card" :isActive="selectedCard === item" :title="item.title" :date="formatDate(item.createTime)"  v-for="item in jobList" :key="item" @click="handleClick(item)">
       
        <div class="card-img">
          <img :src="scholarshipsBg" alt="">
        </div>
      </CardInfo>
    </div>
       <!-- 详情浮层 -->
       <el-dialog 
       v-model="isDetailVisible" 
       title="Auction Details" 
       :width="dialogWidth"
       :before-close="handleClose"
       class="detail-dialog"
     >
       <div class="detail-content">
         <div class="detail-image">
           <!-- <img :src="scholarshipsBg" alt="Cargo auction detailed image"> -->
         </div>
         <div class="detail-info">
           <h3>Unclaimed Cargo Announcement Auction No. {{ selectedCard }} /{{ selectedYear }}</h3>
           <p class="date">Date: 24.04.2025</p>
           <div class="detail-description">
             <p>This auction features unclaimed cargo items from various international shipments. All items have been stored for the legally required period and are now available for public auction.</p>
             <p class="mt-2">Auction details:</p>
             <ul class="mt-1">
               <li>Registration required before participation</li>
               <li>Inspection available 3 days prior to auction</li>
               <li>Payment due within 48 hours of winning bid</li>
               <li>All sales are final</li>
             </ul>
           </div>
         </div>
       </div>
       <!-- <template #footer>
         <el-button @click="handleClose">Close</el-button>
         <el-button type="primary" @click="handleClose">Register for Auction</el-button>
       </template> -->
     </el-dialog>

    <div class="pagination-box">
      <el-pagination background layout="prev, pager, next" :total="total" />
    </div>

  </div>
</template>

<script setup >
import { ArrowDown } from '@element-plus/icons-vue';

const selectedCard = ref(6)
const isDetailVisible = ref(false);
const dialogWidth = ref('80%');


const years = [
  { value: '2025', label: '2025' },
  { value: '2024', label: '2024' },
  { value: '2023', label: '2023' },
  { value: '2022', label: '2022' },
  { value: '2021', label: '2021' },
  { value: '2020', label: '2020' },
];
const selectedYear = ref(years[0].value); // 默认选择第一个年份
// const yearOptions = ref(years.map(year => ({ value: year.value, label: year.label })));
const jobList = ref([]);
const total = ref(null);
onMounted(() => {
  fetchJobList();
});

// 调用接口获取列表
const fetchJobList = async (value) => {
  try {
    const token = '043f6736-89b6-4b29-a8ce-b9e4fa4eb58b';
        const response = await $fetch(`/api-proxy/cms/cargo/list`, { 
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
      // console.log(response);
      jobList.value = response.rows;
      console.log('135',jobList.value);
      total.value = jobList.total
      // console.log('136',total);
  
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
const handleClick = (item) => {
  selectedCard.value = item
  isDetailVisible.value = true; // 显示浮层弹窗

}
const handleClickYear = () => {
}

const auctions = [
  { value: 'Announcement of Auction', label: 'Announcement of Auction' },
];
const selectedAuction = ref(auctions[0].value);
const handleClickAuction = () => {
}
</script>

<style lang="scss" scoped>
.unclaimed-cargo{
  &__content{
    @apply flex flex-wrap;
    column-gap: 27px; 
    /* // 控制列间距（左右间距） */
    row-gap: 20px;    
    /* // 控制行间距（上下间距） */
    margin-bottom: 50px;
  }

  &__card{
    width: calc((100% - 27px * 3) / 4); /* 总宽度减去3个gap，然后4等分 */
    box-sizing: border-box;
  }

  .pagination-box{
    display: flex;
    justify-content: center;
  }
}
</style>
