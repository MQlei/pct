<template>
  <div class="corporate-reports">
    <!-- <div>
      <div class="corporate-reports__header">
        <h4>Message from Captain Wang Jihang</h4>
      </div>
      <div>
        <div class="corporate-reports__content">
          <CardInfo isBgGray :title="'Unclaimed Cargo Announcement Auction No. 88 /2025'" :date="'24.04.2025'" v-for="item in 3" :key="item" class="corporate-reports__card"/>
        </div>
      </div>
    </div> -->
    <div class="philosophy__content">
      <div class="philosophy__image person">
        <img :src="responsibilitypot" alt="">
      </div>
      <div class="philosophy__image text">
        <img :src="responsibilitypotright" alt="">
      </div>
 
    </div>
   
    </div>
</template>

<script setup >
import responsibilitypot from '~/assets/images/responsibility-pot.png';
import responsibilitypotright from '~/assets/images/responsibility-pot-right.png';



</script>

<style lang="scss" scoped>
.corporate-reports{

  .philosophy__content{
    display: flex;
  align-items: center; /* 垂直居中 */
  justify-content: center; /* 水平居中 */
  }
  .philosophy__image {
      margin: 0 10px;

      img {
        width: 100%;
        height: auto;
        /* object-fit: cover; */
        /* object-position: center; */
      }
    }

    .text{
      /* flex: 1; */
      /* width: 70%; */

    }
    .person{
      /* max-width: 306px;
      width: 30%;
      margin-left: 50px; */
      margin-right: 20px;
    }
  /* &__header {
    font-size: 30px;
    font-weight: 800;
    color: #333333;
    margin-bottom: 28px;
  }

  &__content{
    @apply flex flex-wrap;
    gap: 27px;
  }
  &__card{
    width: calc((100% - 27px * 3) / 4);
    box-sizing: border-box;
  } */
}
</style>
