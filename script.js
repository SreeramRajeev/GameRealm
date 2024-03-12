const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

app.use('/api', createProxyMiddleware({ 
  target: 'https://www.freetogame.com',
  changeOrigin: true,
  onProxyRes: function (proxyRes, req, res) {
    proxyRes.headers['Access-Control-Allow-Origin'] = 'https://127.0.0.1:5500';
  }
}));

app.listen(3000, () => {
  console.log('Proxy server running on https://localhost:3000');
});