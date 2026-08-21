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
        // logo: "/logo.svg",

        // ----- 导航栏 -----
        nav: [
            { text: "首页", link: "/" },
            { text: "PPVP", link: "/ppvp" },
            { text: "BW-wiki", link: "/bw" }, // 未完成
            {
                text: "相关链接",
                items: [
                    { text: "GitHub 仓库", link: "https://github.com/Dinganzhi/214-Wiki" },
                    { text: "问题反馈", link: "https://github.com/Dinganzhi/214-Wiki/issues" },
                ],
            },
        ],

        // ----- 侧边栏 -----
        sidebar: [
            {
                text: "PPVP",
                collapsed: false,
                items: [
                    { text: "PPVP介绍", link: "/ppvp" },
                    {
                        text: "职业介绍",
                        collapsed: true,
                        link: "/ppvp/kits",
                        items: [
                            { text: "铁血战士", link: "/ppvp/kits/predator" },
                            { text: "盘古", link: "/ppvp/kits/pangu" },
                            { text: "神射手", link: "/ppvp/kits/sharpshooter" },
                            { text: "刺客", link: "/ppvp/kits/assassin" },
                            { text: "赌徒", link: "/ppvp/kits/gambler" },
                            { text: "道士", link: "/ppvp/kits/taoist" },
                            { text: "终界使者", link: "/ppvp/kits/enderman" },
                            { text: "时空旅者", link: "/ppvp/kits/time_traveller" },
                            { text: "炸弹狂人", link: "/ppvp/kits/bomber" },
                            { text: "飞翔使", link: "/ppvp/kits/flyer" },
                        ],
                    },
                    {
                        text: "地图介绍",
                        collapsed: true,
                        link: "/ppvp/maps",
                        items: [
                            {
                                text: "第一张地图",
                                collapsed: true,
                                link: "/ppvp/maps/first_map",
                                /*
                items: [

                ]
                */
                            },
                            {
                                text: "第二张地图",
                                collapsed: true,
                                link: "/ppvp/maps/second_map",
                                items: [
                                    { text: "地道", link: "/ppvp/maps/second_map/tunnel" },
                                    {
                                        text: "特殊区域-scp67区域",
                                        link: "/ppvp/maps/second_map/scp67",
                                    },
                                    { text: "特殊区域-地狱", link: "/ppvp/maps/second_map/nether" },
                                    { text: "特殊生物-蜜蜂", link: "/ppvp/maps/second_map/bee" },
                                ],
                            },
                            { text: "据点守卫", link: "/ppvp/maps/mechanics/guard" },  
                            { text: "地图武器-高射炮", link: "/ppvp/maps/mechanics/Cannon" },
                        ],
              
                    }, 
                ], 
            },
            { text: "BW-WIKI",
                collapsed: false,
                items: [
                     { text: "起床介绍", link: "/bw" },
                  {
                        text: "物品/装备介绍",
                        collapsed: true,
                        link: "/bw/bw-kits",
                        items: [
                            { text: "大部分方块", link: "/bw/bw-kits/blocks" },
                             { text: "剑", link: "/bw/bw-kits/swords" },
                        ],
                    },
                     {
                        text: "机制介绍",
                        collapsed: true,
                        link: "/bw/mechanism",
                        items: [
                            { text: "起床个人商店", link: "/bw/mechanism/shop" },
                            { text: "起床团队商店", link: "/bw/mechanism/Team-shop" },
                        ],
                                            },
                     {
                        text: "起床地图介绍",
                        collapsed: true,
                        link: "/bw/maps",
                        items: [
                            { text: "Artemis", link: "/bw/maps/Artemis" },
                            { text: "Bw-mosdalr", link: "/bw/maps/Bw-mosdalr" },
                            { text: "Daolong", link: "/bw/maps/Daolong" },
                            { text: "Frost", link: "/bw/maps/Frost" },
                            { text: "Garden", link: "/bw/maps/Garden" },
                            { text: "Steampunk", link: "/bw/maps/Steampunk" },
                        ],
                    },
                ]
            }
        
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
            title: "页面未找到喵~",
            quote: "此页面不存在，请检查链接地址是否正确喵~",
            linkText: "返回首页",
        },
    },

    // ========== Markdown 配置 ==========
    markdown: {
        lineNumbers: true,
        codeCopyButtonTitle: "复制代码",
    },
});
