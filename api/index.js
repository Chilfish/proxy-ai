const app = require('express')()
const { createProxyMiddleware } = require('http-proxy-middleware')

app.use(
  '/*',
  createProxyMiddleware({
    target: 'https://api.openai.com',
    changeOrigin: true,
    pathRewrite: (path, req) => {
      // 移除 '/api' 前缀，将请求路径重写为 '/*'
      return path.replace('/api', '')
    },
    onProxyReq: (proxyReq, req, res) => {
      // 移除 'x-forwarded-for' 和 'x-real-ip' 头，以确保不传递原始客户端 IP 地址等信息
      proxyReq.removeHeader('x-forwarded-for')
      proxyReq.removeHeader('x-real-ip')
    },
    onProxyRes: function (proxyRes, req, res) {
      proxyRes.headers['Access-Control-Allow-Origin'] = '*'
    },
  }),
)

module.exports = app
