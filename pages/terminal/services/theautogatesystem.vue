<template>
  <div class="the-autogate-system">
    <div class="the-autogate-system__header">
      <h4>Direct Access to the Autogate System</h4>
    </div>
    <div class="the-autogate-system__content">
      <div class="content-title">
        <a href="https://www.pct.com.gr/drivers-id" target="_blank">
         <h5>https://www.pct.com.gr/drivers-id</h5></a>
      </div>
      <div class="content-wrap">
        <p>The Auto-Gate Process System (Driver ID) enables the allocation of transportation activities to all holders of a Driver ID Card.<br>
          Aim of this system is the acceleration of the operation of the entry/exit gates through:<br>
          · Limiting Access to the Gates only to those who have work.<br>
          · Simplification of the entry/exit procedure.<br>
          · Facilitation of the allocation / administration of transportation activities. <br>
          PCT S.A. with the acceptance of the request produces in its system a new reserve task/activity. <br>
          The Auto-Gate system is automatically informed and assigns the reserve tasks to the transportation companies that have been registered. The holder or the authorized representative comes at the Free Zone office of PCT S.A. in order to collect an Acknowledgement / Certificate of Customs nature. The Custom Certificate received, is then forwarded to the Customs Office in order to be processed with the necessary Custom formalities. After the implementation of all necessary custom formalities, the holder or authorized representative returns to the Free Zone office of PCT S.A., where he/she demonstrates all essential documents for the collection of the Container. The Free Zone Office produces in PCT S.A. systems a new collection activity / task. <br>
          The Auto-Gate Process System is automatically informed and assigns the collection activities to the transportation companies that have been registered. 
          Access to the Auto-Gate Process system is acquired to all those who have dispatched all the necessary documents and 
           <!-- 可展开内容区域 -->
           <template v-if="isExpanded">
            completed the registration process. This includes submission of valid identification documents, proof of authorization from the transportation company, and any other relevant paperwork as specified by PCT S.A. Once registered, users can log in to the system using their unique credentials to view assigned tasks, update their availability, and manage their transportation activities efficiently. The system also provides real-time notifications regarding task assignments, gate availability, and any changes to the schedule, ensuring smooth coordination between all parties involved.
          </template>
          <!-- <span>… read more</span>  -->
         <!-- 展开/折叠按钮 -->
         <span 
         @click="isExpanded = !isExpanded"
         class="read-more-btn"
       >
         {{ isExpanded ? ' read less' : ' ... read more' }}
       </span>
        </p>
        <!-- <img :src="contentTheutogateproces" alt=""> -->
      </div>
    </div>
  </div>
</template>

<script setup >
import contentTheutogateproces from '~/assets/images/content-theutogateproces.png';
// 控制展开状态的响应式变量
const isExpanded = ref(false);



</script>

<style lang="scss" scoped>
.the-autogate-system{
  &__header{
    font-weight: 800;
    font-size: 30px;
    color: #333333;
    margin-bottom: 30px;
  }
  &__content{
    font-size: 20px;
    color: #262729;
    margin-bottom: 70px;
    .content-title{
      color: rgba(10, 71, 153, 1);
      margin-bottom: 18px;
      cursor: pointer;
      /* @apply flex justify-center items-center; */
    }
    .content-wrap{
      p{
font-size: 19px;
      }
      span{
        color: #3CC2EF;
        cursor: pointer;
      }
      .read-more-btn{
        color: #3CC2EF;
        cursor: pointer;
        text-decoration: underline;
        text-decoration: none;
        &:hover{
          color: #2aa8d6;
        }
      }
      /* @apply flex justify-center items-center; */
    }
  }
}
</style>