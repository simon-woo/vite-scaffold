import px2vw from 'postcss-px-to-viewport'

const cosmixPx2vp = px2vw({
  viewportWidth: 390, // UI设计稿的宽度
  exclude: [/node_modules/] // 设置忽略文件，用正则做目录名匹配
})

export default cosmixPx2vp
