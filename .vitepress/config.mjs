import { defineConfig } from "vitepress";

export default defineConfig({
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

    // ----- 导航栏 -----
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

    // ----- 侧边栏 -----
    sidebar: [
      {
        text: "ppvp-wiki",
        items: [
          { text: "ppvp/ppvp-wiki介绍", link: "/Sequence/introduction-ppvp" },
          { text: "职业介绍", link: "/Sequence/kitsIntroduction" },
          { text: "命令使用", link: "/guide/command" },
          { text: "配置", link: "/guide/config" },
        ],
      },
      {
        text: "开发者教程",
        items: [
          { text: "准备工作", link: "/develop-guide" },
          { text: "基础信息", link: "/develop-guide/info" },
          { text: "线路数据", link: "/develop-guide/lines" },
        ],
      },
    ],

    // ==========================================
    // ========== 界面文字中文化 ==========
    // ==========================================

    // ----- 主题切换按钮（Appearance）-----
    darkModeSwitchLabel: "切换主题",
    darkModeSwitchTitle: "切换到深色模式",
    lightModeSwitchTitle: "切换到浅色模式",

    // ----- 翻页按钮（Next page / Previous page）-----
    docFooter: {
      prev: "上一篇",
      next: "下一篇",
    },

    // ----- 右侧大纲标题（On this page）-----
    outlineTitle: "页面内容",

    // ----- 返回顶部（Return to top）-----
    returnToTopLabel: "返回顶部",

    // ----- 移动端菜单按钮（Menu）-----
    sidebarMenuLabel: "菜单",

    // ----- 最后更新时间（Last updated）-----
    lastUpdated: {
      text: "最后更新于",
    },

    // ==========================================
    // ========== 搜索（本地搜索-完整汉化） ==========
    // ==========================================
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
});