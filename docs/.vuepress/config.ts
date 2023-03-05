import { defineUserConfig } from "vuepress";
import theme from "./config/theme.js";

import { searchProPlugin } from "vuepress-plugin-search-pro";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "API文档--three.js封装",

  theme,

  shouldPrefetch: false,

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
