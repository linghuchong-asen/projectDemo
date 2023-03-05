import { defineUserConfig } from "vuepress";
import theme from "./config/theme.js";

import { searchProPlugin } from "vuepress-plugin-search-pro";

export default defineUserConfig({
  base: "/projectDemo/",

  lang: "zh-CN",
  title: "API文档--three.js封装",

  theme,

  shouldPrefetch: false,

  /* 配置打包输出文件位置，相对于根目录 */
  dest: "blog", // 举例：这里输出至根目录下的blog文件夹下

  plugins: [
    searchProPlugin({
      // 索引全部内容
      indexContent: true,
      locales: {
        "/": {
          placeholder: "搜索 Ctrl+K",
        },
      },
    }),
  ],
});
