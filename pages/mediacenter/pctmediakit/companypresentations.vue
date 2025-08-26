<template>
  <div class="company-presentations">
    <div class="company-presentations__bg">
      <div class="g-filter"></div>
      <div class="inp-wrap flex flex-col items-center">
        <div class="i-box mb-[64px]">
          <i></i>
        </div>
        <div class="flex items-center">
          <span class="mr-[20px]">Password</span>
          <el-input v-model="input" style="width: 240px"@focus="handleFocus"   @blur="handleBlur" :placeholder="currentPlaceholder"  />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup >
const input = ref('')
// 原始占位文本
const originalPlaceholder = ref('password');
// 当前显示的占位文本
const currentPlaceholder = ref('password');
// 聚焦时清空占位文本
const handleFocus = () => {
  currentPlaceholder.value = '';
};

// 失焦时恢复占位文本（如果输入框为空）
const handleBlur = () => {
  if (!input.value) {
    currentPlaceholder.value = originalPlaceholder.value;
  }
};
</script>

<style lang="scss" scoped>
.company-presentations{
  &__bg {
    position: relative;
    overflow: hidden;
    border-radius: 12px;

    .g-filter {
      background: url('/images/banner-mediacenter-pctmediakit-companypresentations.png') no-repeat;
      background-size: cover;
      filter: blur(80px);
      min-height: 700px;
    }

    .inp-wrap{
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);

    }

    .i-box{
      i{
        display: block;
        background: url('~/assets/images/i-lock.png') no-repeat;
        background-size: cover;
        width: 40px;
        height: 40px;
      }
    }
  }
}
</style>