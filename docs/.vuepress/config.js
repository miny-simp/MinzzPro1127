module.exports = {
    title: '走在路边的小园子', // 显示在左上角的网页名称以及首页在浏览器标签显示的title名称
    description: '一个爱学习的学渣', // meta 中的描述文字，用于SEO
    // 注入到当前页面的 HTML <head> 中的标签
    head: [
        // ['link', { rel: 'icon', href: '/minzz.png' }],  //浏览器的标签栏的网页图标
        ['link', { rel: 'manifest', href: '/manifest.json' }],
        ['link', { rel: 'apple-touch-icon', href: '/img/logo.png' }],
    ],
    markdown: {
        lineNumbers: true
    },
    serviceWorker: true,
    themeConfig: {    
        logo: '/minzz.png',
        lastUpdated: 'lastUpdate', // string | boolean
        nav: [
            { text: '首页', link: '/' },
            {
                text: '前端日记',
                ariaLabel: '分类',
                items: [
                    { text: '文章', link: '/pages/frontEnd/vueErrorRecord.md' },
                    { text: '琐碎', link: '/pages/frontEnd/vue引入第三方js.md' },
                ]
            },
            { text: '篱笆小故事', link: '/pages/moodDiary/20190610.md' },
            { text: 'Github', link: 'https://github.com/miny-simp' },
        ],
        sidebar: {
            '/pages/frontEnd/':[
                {
                    title: 'vue知识点记录',   // 必要的
                    collapsable: false, // 可选的, 默认值是 true,
                    sidebarDepth: 1,    // 可选的, 默认值是 1
                    children: [
                        ['vueErrorRecord.md', 'Vue报错问题整理一'],
                        ['vue引入第三方js.md', 'vue引入第三方js']
                    ]
                },
                {
                    title: '前端知识点记录',
                    collapsable: false, // 可选的, 默认值是 true,
                    children: [
                        ['lodash按需加载.md', 'lodash按需加载']
                    ]
                }
            ],
        }
    }
}