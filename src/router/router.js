export default {
  "msg": "ok",
  "code": 0,
  "router": [
    {
      path: 'store', cname: '店铺管理',
      children: [
        { path: 'detail', cname: '店铺信息 ' },
        { path: 'publish', cname: '发货地址' },
        { path: 'open', cname: '开户信息 ' },
        { path: 'modify', cname: '修改密码' }
      ]
    },
    {
      path: 'charts', cname: '图表',
      children: [
        { path: 'index', cname: 'chart_介绍' },
        { path: 'keyboard', cname: '键盘图表' },
        { path: 'keyboard2', cname: '键盘图表2' },
        { path: 'line', cname: '折线图' },
        { path: 'mixchart', cname: '混合图表' }
      ]
    },
    {
      path: 'components', cname: '组件',
      children: [
        { path: 'index', cname: '介绍 ' },
        { path: 'tinymce', cname: '富文本编辑器' },
        { path: 'markdown', cname: 'Markdown' }
      ]
    },
    {
      path: 'permission', cname: '权限测试',
      children: [
        { path: 'index', cname: '权限测试页' }
      ]
    },
    {
      path: 'errorpage', cname: '错误页面',
      children: [
        { path: '401', cname: '401' },
        { path: '404', cname: '404' }
      ]
    },
    {
      path: 'errlog', cname: 'errlog',
      children: [
        { path: 'log', cname: '错误日志' }
      ]
    },
    {
      path: 'excel', cname: 'excel',
      children: [
        { path: 'download', cname: '导出excel' },
        { path: 'download2', cname: '选择导出excel' }
      ]
    },
    {
      path: 'theme', cname: 'theme',
      children: [
        { path: 'index', cname: '换肤' }
      ]
    },
    {
      path: 'example',
      cname: '综合实例',
      children: [
        {
          path: 'table',
          cname: 'Table',
          children: [
            { 
                path: 'index',  
                cname: 'Tab', 
                children:[
                  { path: 'inline_edit_table', cname: 'table内编辑' },
                  { path: 'table',  cname: '综合table' }
                ]
            },
            { path: 'dynamictable', cname: '动态table' },
            { path: 'dragtable',  cname: '拖拽table' }
          ]
        },
        { path: 'edit', icon: 'ziliaoshouce', cname: '编辑Form' },
        { path: 'create', icon: 'yinhangqia',  cname: '创建Form' }
      ]
    }
  ]
}