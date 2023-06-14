// proxy 설정 - CORS 이슈를 해결하기 위한
// 로컬 환경에서만 적용됨
const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {
  app.use(
    createProxyMiddleware("/api", {
      target: "http://127.0.0.1:5000",
      chagneOrigin: true,
    })
  );
};
