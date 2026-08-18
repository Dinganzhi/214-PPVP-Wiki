import { defineConfig } from "vitepress";
import { withSidebar } from "vitepress-sidebar";

// VitePress 配置
const vitePressOptions = {
  // ========== 站点基本信息 ==========
  title: "214Wiki",
  description: "214服务器的官方Wiki",
  lang: "zh-CN",

  // ========== 国际化配置 ==========
  locales: {
    "/": {
      label: "简体中文",
      lang: "zh-CN",
    },
  },

  // ========== 主题配置 ==========
  themeConfig: {
    // ----- Logo（如有）-----
    // logo: "/logo.svg",

    // ----- 导航栏（保持不变）-----
    nav: [
      { text: "首页", link: "/" },
      { text: "第一章节", link: "/" }, // 未完成
      { text: "第二章节", link: "/" }, // 未完成
      {
        text: "相关链接",
        items: [
          { text: "GitHub 仓库", link: "https://github.com/Dinganzhi/214-PPVP-Wiki" },
          { text: "问题反馈", link: "https://github.com/Dinganzhi/214-PPVP-Wiki/issues" },
        ],
      },
    ],

    // ========== 界面文字中文化（保持不变）==========
    darkModeSwitchLabel: "切换主题",
    darkModeSwitchTitle: "切换到深色模式",
    lightModeSwitchTitle: "切换到浅色模式",

    docFooter: {
      prev: "上一篇",
      next: "下一篇",
    },

    outlineTitle: "页面内容",
    returnToTopLabel: "返回顶部",
    sidebarMenuLabel: "菜单",

    lastUpdated: {
      text: "最后更新于",
    },

    // ========== 搜索（本地搜索-完整汉化）==========
    search: {
      provider: "local",
      options: {
        placeholder: "搜索文档",
        translations: {
          button: {
            buttonText: "搜索文档",
            buttonAriaLabel: "搜索文档",
          },
          modal: {
            displayDetails: "显示详情",
            resetButtonTitle: "重置搜索",
            backButtonTitle: "返回",
            noResultsText: "没有找到相关结果",
            footer: {
              selectText: "选择",
              navigateText: "切换",
              closeText: "关闭",
            },
          },
        },
      },
    },

    // ----- 404 页面 -----
    notFound: {
      title: "页面未找到",
      quote: "此页面不存在，请检查链接地址是否正确",
      linkText: "返回首页",
    },
  },

  // ========== Markdown 配置 ==========
  markdown: {
    lineNumbers: true,
    codeCopyButtonTitle: "复制代码",
  },
};

// ========== 侧边栏插件配置 ==========
const sidebarOptions = {
  documentRootPath: "/",       // 扫描根目录
  collapsed: false,            // 是否默认折叠所有分组
  capitalizeFirst: true,       // 自动将标题首字母大写
};

// 导出用 withSidebar 包装后的配置
export default defineConfig(
  withSidebar(vitePressOptions, sidebarOptions)
);