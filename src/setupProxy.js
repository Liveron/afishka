const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api/**',
    createProxyMiddleware({
      target: 'http://localhost:5123',
      headers: {
        "Connection": "keep-alive"
      },
      secure: false,
      changeOrigin: true,
    })
  );
};
/*
const { createProxyMiddleware } = require('http-proxy-middleware');


module.exports = function (app) {

  app.use(createProxyMiddleware(
    '/api/**',
    {
      target: 'http://localhost:5123',
      changeOrigin: true
    }
  ));
}
*/