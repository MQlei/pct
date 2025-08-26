<template>
  <div class="security-policy">
    <div class="security-policy__content" >
      <CardInfo class="security-policy__card" isBgGray :isActive="selectedCard === item" :title="'Unclaimed Cargo Announcement Auction No. 88 /2025'" :date="'24.04.2025'" v-for="item in 12" :key="item" @click="handleClick(item)">
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
      <el-pagination background layout="prev, pager, next" :total="90" />
    </div>
  </div>
</template>

<script setup >
const selectedCard = ref(6)
const isDetailVisible = ref(false);
const dialogWidth = ref('80%');

const handleClick = (item) => {
  selectedCard.value = item;
  isDetailVisible.value = true; // 显示浮层弹窗
};

// 关闭浮层处理函数
const handleClose = () => {
  isDetailVisible.value = false;
};
</script>

<style lang="scss" scoped>
.security-policy{
  /* padding-bottom: 54px; */

  &__content{
    @apply flex flex-wrap;
    column-gap: 27px; // 控制列间距（左右间距）
    row-gap: 20px;    // 控制行间距（上下间距）
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
