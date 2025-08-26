<template>
  <transition name="fade-transform" mode="out-in">
    <div class="menu-modal">
      <div class="menu-modal__content">
        <img    :src="currentImage"  alt="">
        <!-- <img :src="menuImage || bgmenu" alt="菜单背景图"> -->
        <div class="menu-modal__main">
          <!-- 二级菜单项（递归渲染） -->
          <TopRecursiveMenu 
            :menuData="menuData" 
            :basePath="props.selectedMenu.path"  
            @menu-click="handleMenuClick" 
          />
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { computed } from 'vue';
import bgmenu from '~/assets/images/bg-menus.png';// 默认图片
import bgmenu1 from '~/assets/images/bg-menu1.png'; 
import bgmenu2 from '~/assets/images/bg-menu2.png';
import bgmenu3 from '~/assets/images/bg-menu3.png';
import bgmenu4 from '~/assets/images/bg-menu4.png';
import TopRecursiveMenu from './RecursiveMenu.vue';

const props = defineProps({
  selectedMenu: {
    type: Object,
    default: () => ({})
  }
});
const imageMap = {
  'About': bgmenu,
  'Terminal': bgmenu1,
  'Announcwements': bgmenu2,
  'MediaCenter': bgmenu3,
  'Careers': bgmenu4
  // 可以根据需要添加更多映射
};

// 计算当前应该显示的图片
const currentImage = computed(() => {
  const menuName = props.selectedMenu.name;
  // 如果有对应的图片则使用，否则使用默认图片
  return imageMap[menuName] || bgmenu;
});

// 监听name变化并打印日志
watch(() => props.selectedMenu.name, (newName) => {
  // console.log('当前菜单名称:', newName);
  // console.log('当前使用图片:', currentImage.value);
}, { immediate: true });

onMounted(() => {
  // console.log('当前menuImage的值:', props.selectedMenu);
  // console.log('当前menuImage的值123:', props.selectedMenu.name);
  if(props.selectedMenu.name){

  }
  // 同时可以打印是否使用了默认图片
  // console.log('是否使用默认图片:', !props.selectedMenu);
});

// 也可以在watch中监听menuImage的变化
watch(() => props.selectedMenu, (newVal) => {
  // console.log('menuImage发生变化:', newVal);
});

// 中转事件给父组件（关闭弹窗）
const emit = defineEmits(['close']);
const handleMenuClick = () => {
  emit('close'); // 触发关闭事件
};

// 处理子菜单数据
const menuData = computed(() => {
  return props.selectedMenu.children || [];
});
</script>

<style lang='scss' scoped>
/* .menu-modal__content {
  display: flex;

  img {
    height: 100%;
    object-fit: cover;
  }

  .menu-modal__main {
    padding: 25px 50px;
    flex: 1;
  }
} */

.menu-modal {
  /* padding-top: 20px; */
  /* border: 1px solid red; */
  /* overflow: hidden;  */
  /* // 避免内容溢出导致的视觉残留 */
}

/* .menu-modal__content {
  // 移除可能的外部间距
  margin: 0 !important;
  padding: 0 !important;
} */
.menu-modal__content {
  display: flex;
  margin: 0 !important;  
  padding: 0 !important; 
  
  img {
    height: 100%;
    object-fit: cover;
    display: block; 
  }

  .menu-modal__main {
    padding: 25px 50px;
    flex: 1;
  }
}
</style>