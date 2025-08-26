# 框架
- https://nuxtjs.org.cn/#google_vignette

# node vesion
- v20.19.*
- v21.7.3

# install
- pnpm install

# run
- pnpm dev

# build
- pnpm generate
- rm -rf dist && mkdir dist
- cp -r .output/public/* dist/

# 路由
- 就是pages下面的路径去掉vue
- useMenuMeta.js // 面包屑

# 面包屑
- components/App/Breadcrumb.vue