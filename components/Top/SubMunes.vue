<template>
  <div class="hear-wrap">
    <div class="header">
      <div>
        <nuxt-link to="/">
          <img class="header-img" :src="logoh" />
        </nuxt-link>
      </div>
      <div class="header-search">

        <template v-for="menu in menuDate" :key="menu.name">
          <!-- 将 el-popover 包裹在 div 中，使 v-if 和 v-else 在同一层级 -->
          <div v-if="menu?.children?.length" class="menu-item-wrapper">
            <el-popover
              :popper-style="{ width: 'auto', left: '120px', right: '120px', padding: '0', top: '105px', border: 'none' }"
              :show-arrow="false"
              placement="bottom"
              trigger="click"
              :menuitem="menu"
              @show="handleShowMenu(menu)"
              popper-class="custom-nav-popover"  
            >
            <!-- trigger="hover" click -->
              <template #reference>
                <!-- 一级菜单项 -->
                <div class="menu-item">
                  <el-button link class="menu-text">
                    {{ menu.seoMeta?.title || '' }}
            <!-- {{ $t(menu.seoMeta?.titleKey) || item.seoMeta?.title || ''}} -->

                  </el-button> 
                  <el-icon class="el-icon--right" v-if="menu.children">
                    <ArrowDown />
                  </el-icon>
                </div>
              </template>
            </el-popover>
            <div class="fixed-menu-modal">
              <TopMenuItemModals 
                v-if="menuModel"
                :selectedMenu="selected"  
                @close="closeMenuModel"  
              />
            </div>
          </div>

          <!-- 一级菜单无子菜单，直接渲染链接 -->
          <div v-else class="menu-item">
            <nuxt-link
              :to="menu.path"
              class="menu-link"
              :class="{ 'active': isActive(menu.path) }"
            >
              <el-button @click="endClick()"  link class="menu-text">
                {{ menu.seoMeta?.title || '' }}
            <!-- {{ $t(menu.seoMeta?.titleKey) || item.seoMeta?.title || ''}} -->

              </el-button>
            </nuxt-link>
          </div>
        </template>

        <div class="header-search—box">
          <img class="header-search—img" :src="search" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import logoh from '~/assets/images/logo-h.png';
import search from '~/assets/images/search.png';
import telInfo from '~/assets/images/tel-info.png';
import { ArrowDown } from '@element-plus/icons-vue';

// 导航菜单数据
const { menuItems } = useNavigation()
const menuDate = computed(() => {
  return menuItems.filter(item => item.name !== 'Home');
});

// // 当前选择
const selected = ref(null);
const menuModel = ref(false);
// // 控制 el-popover 显示/隐藏的变量
const popoverVisible = ref(null);


// 监听 selected 的变化
watch(selected, (newVal) => {
  // if (selected) {
  //   console.log('0919newVal: ', selected);
  // }
  // if (newVal) {
  //   console.log('0920newVal: ', newVal);
  // }
})
const handleShowMenu = (selMenu) => {
  menuModel.value = true;
  selected.value = selMenu;
  popoverVisible.value = true; // 显示 popover
  // console.log('08888handleShowMenu: ', selMenu);
  // nextTick(() => {
  // const popoverEl = document.querySelector('.custom-nav-popover');
  //   if (popoverEl) {
  //     // 动态设置样式    visibility: hidden
  //     popoverEl.style.visibility = "visible";
   
  //   }
  // })
}
const closeMenuModel = (event) => {
  menuModel.value = false;
  selected.value = "";
  // console.log('0999close: ', event);
  // nextTick(() => {
  // const popoverEl = document.querySelector('.custom-nav-popover');
  //   if (popoverEl) {
  //     // 动态设置样式    visibility: hidden
  //     // popoverEl.style.visibility = "hidden";
  //   //   top: 85px;
  //   // right: 120px;
  //   // bottom: auto;
  //   // left: 120px;
  //   console.log("1111",popoverEl);

  //     // popoverEl.style.top = '0px';
  //     // popoverEl.style.right = '0px';
  //     // popoverEl.style.bottom = '0px';
  //     // popoverEl.style.left = '0px';
  //     // popoverEl.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
   
  //   }
  // })

  popoverVisible.value = false; // 关闭 popover，使其消失
}
const endClick = () => {
  menuModel.value = false;
  selected.value = "";
  popoverVisible.value = false; // 关闭 popover，使其消失
}


// 检查当前路由是否激活
const isActive = (path) => {
  // const fullPath = props.basePath ? `${props.basePath}/${path}` : path
  // return route.path.startsWith(fullPath) 
  return false;
}


</script>

<style lang='scss' scoped>
.hear-wrap {
  position: relative;
  z-index: inherit;

  .sub-menus {
    position: absolute;
    /* top: calc($top-submenus-height + 1px); */
    left: 60px;
    right: 60px;
    background-color: #ffffff;
    z-index: 10;
  }
}

.fixed-menu-modal {
    /* 固定定位，相对于浏览器窗口 */
  position: fixed;
  background-color: #ffffff;
  top: 105px; 
  width: auto;
  left: 120px;
  right: 120px;
  /* 距离顶部的距离，可根据需要调整 */
  /* left: 120px;  */
  /* 距离左侧的距离，可根据需要调整 */
  z-index: 9999; 
  /* 确保在其他内容上方显示 */
}

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* height: $top-submenus-height; */
  padding: 15px 80px;
  background: #ffffff;
  box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.06);
  /* z-index: 3000; */

  &-img {
    cursor: pointer;
    flex-shrink: 0;
    width: 85px;
    height: 100%;
    top: -17px;
    left: -40;
    z-index: 10;
    position: relative;
  }

  &-search {
    display: flex;
    align-items: center;

    &—box {
      border-radius: 50%;
      background: rgba(9, 70, 153, 0.10);
      padding: 5.5px;
      width: 30px;
      height: 30px;
      cursor: pointer;
    }

    &—img {
      flex: 1;
      flex-shrink: 0;
      width: 20px;
      height: 20px;
    }
  }
}

/* // 导航菜单样式调整 */
.menu-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 40px; /* 增加导航之间的间距 */
}

.menu-text {
  font-weight: 700 !important; /* 字体加粗 */
  color: #333333 !important; /* 默认文字颜色 */
  transition: color 0.2s ease-in-out; /* 平滑过渡效果 */
  
  &:hover {
    color: #094699 !important; /* 鼠标hover时呈现主题蓝色（使用了搜索框背景色的主色） */
  }
}

/* // 激活状态样式 */
.menu-link.active .menu-text {
  color: #094699 !important; /* 激活状态保持主题蓝色 */
}

/* // 移除按钮默认样式干扰 */
.el-button--text {
  padding: 0;
  background: none !important;
}

::v-deep .custom-nav-popover{
  /* width: 'auto', left: '120px', right: '120px', display: 'block' */
  width: auto;
  left: 120px;
  right: 120px;
  display: block;
  z-index: 15   
}


/* // 检查父容器是否有多余间距 */
.header-search {
  display: flex;
  align-items: center;
  gap: 0;  
  margin: 0;
  padding: 0;

  /* // 确保菜单项对齐，避免基线差异导致的空白 */
  .menu-item {
    vertical-align: middle;
    line-height: normal;
  }
}
::v-deep .el-popover {
  /* // 清除默认内边距和外边距 */
  padding: 0 !important;
  margin: 0 !important;
  --el-popover-padding: 0 !important;
  /* // 确保隐藏时无残留 */

}

/* // 检查弹出层内容容器是否有多余间距 */
::v-deep .el-popover__content {
  padding: 0 !important;

}
</style>