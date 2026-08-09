# 三颗西兰花厂商官网

三颗西兰花（Triple Sprout Games，简称 TSG）的静态官方网站。

## 本地预览

需要安装 Node.js，然后在本目录运行：

```powershell
npm start
```

浏览器打开 `http://127.0.0.1:4173`。

## 页面内容

- `index.html`：厂商首页、团队简介、游戏展示占位区和联系方式
- `privacy.html`：官方网站隐私政策
- `assets/tsg-logo.png`：厂商 Logo
- `styles.css`：桌面端与移动端响应式样式

## 部署

这是一个不需要构建步骤的纯静态网站。上传整个目录到 Cloudflare Pages、Vercel、GitHub Pages 或其他静态网站服务即可。部署完成并获得正式域名后，可再补充 `sitemap.xml`、规范链接和网站备案信息。

GitHub Pages 使用 `main` 分支根目录作为发布源。推送到 `main` 后，Pages 会自动重新发布网站，不需要额外的构建步骤。
