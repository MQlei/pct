<template>
  <div class="tenders">
    <!-- <div 
      v-for="item in 3" 
      :key="item" 
      :class="{'tenders-card': true, 'active': activeIndex === item}" 
      @click="handleClick(item)">
      <div class="flex">
        <div>
          <h4 class="card-idx">0{{ item }}.</h4>
        </div>
        <div class="ml-[80px] flex-1">
          <h4 class="card-tit">Open Tender for the provision of daily meals to employees, with submission deadline</h4>
          <div class="card-timer flex justify-between items-center">
            <p class="txt-b">PIRAEUS CONTAINER TERMINAL S.A.</p>
            <p>14/03/2025</p>
          </div>
        </div>
      </div>
    </div> -->
    <div 
    v-for="item in jobList" 
    :key="item" 
    :class="{'tenders-card': true, 'active': activeIndex === item}" 
    @click="handleClick(item)">
    <div class="flex">
      <div>
        <h4 class="card-idx">0{{ item.orderNum }}.</h4>
      </div>
      <div class="ml-[80px] flex-1">
        <!-- <h4 class="card-tit">Open Tender for the provision of daily meals to employees, with submission deadline</h4> -->
        <h4 class="card-tit">    {{item.title}}</h4>
       
        <div class="card-timer flex justify-between items-center">
          <p class="txt-b">PIRAEUS CONTAINER TERMINAL S.A.</p> 
          <p>
            <!-- 14/03/2025 -->

            {{ formatDate(item.createTime) }}
          </p>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script setup >
// const activeIndex = ref(1);
const activeIndex = ref('');
const jobList = ref([]);
onMounted(() => {
  fetchJobList();
});

// 调用接口获取列表
const fetchJobList = async (value) => {
  try {
    const token = '043f6736-89b6-4b29-a8ce-b9e4fa4eb58b';
        const response = await $fetch(`/api-proxy/cms/tender/list`, { 
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
      // total.value = jobList.total
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


const handleClick = (idx) => {
  activeIndex.value = idx;
}

</script>

<style lang="scss" scoped>
.tenders{
  &-card{
    margin-bottom: 24px;
    padding: 38px 60px 34px;
    background: #FFFFFF;
    border-radius: 15px;
    border: 1px solid rgba(223,223,223,0.7);
    font-size: 14px;
    color: #999999;
    cursor: pointer;
    &.active{
      border: 1px solid #1758B6;
    }

    .card-idx{
      font-weight: 800;
      font-size: 28px;
      color: #3CC2EF;
    }
    .card-tit{
      font-weight: 500;
      font-size: 28px;
      color: #262729;
      margin-bottom: 20px;
    }
    .txt-b{
      color: #1758B6;
      font-size: 18px;
    }
  }
 .tenders-card{
  &:hover {
      border-radius: 15px;
      /* // 增强阴影层次感 */
  /* box-shadow: 0 4px 20px rgba(9, 70, 153, 0.15); */
  /* // 轻微内发光效果 */
  box-shadow: 0 0 0 2px rgba(9, 70, 153, 0.2), 0 4px 20px rgba(9, 70, 153, 0.15);
  transition: all 0.3s ease;


}
 }
}
</style>
