module.exports = {
  title: '弄晴',
  description: '弄晴',
  head:[
    // 增加一个自定义的浏览器icon
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  themeConfig: {
    logo: '/assets/img/hero.png',
    // 显示在底部最新的git提交时间, '默认值为'Last Updated'
    lastUpdated: 'Last Updated',
    // navbar: false, // 全局禁用导航栏
    // sidebar: 'auto',// 全局开起侧边栏
    sidebarDepth: 0,
    // 侧边栏的名称为其md下的一级标题
    sidebar: {
      '/foo/': [
        '', // 匹配README.md
        'one', // 匹配foo文件下的one.md
        'two'
      ],
      '/': [
        '',
        'contact',
        'about'
      ]
    },
    // nav: []
  },
  markdown: {
    lineNumbers: true
  }
}