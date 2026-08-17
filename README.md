# 三颗西兰花厂商官网

三颗西兰花（Triple Sprout Games，简称 TSG）的静态官方网站。

## 本地预览

需要安装 Node.js，然后在本目录运行：

```powershell
npm start
```

浏览器打开 `http://127.0.0.1:4173`。

## 页面内容

- `index.html`：厂商首页、团队简介、《蔬菜能量战》介绍、宣传画面和联系方式
- `vegetables-battle-privacy.html`：《蔬菜能量战》H5 与 Android 版本隐私政策
- `privacy.html`：官方网站隐私政策
- `assets/tsg-logo.png`：厂商 Logo
- `assets/vegetables-battle-*`：《蔬菜能量战》图标与宣传图
- `styles.css`：桌面端与移动端响应式样式

Android 测试包作为 GitHub Release 附件托管，官网首页提供直接下载入口，避免将大体积 APK 提交到 Git 仓库。

## 部署

这是一个不需要构建步骤的纯静态网站。上传整个目录到 Cloudflare Pages、Vercel、GitHub Pages 或其他静态网站服务即可。

GitHub Pages 使用 `main` 分支根目录作为发布源。推送到 `main` 后，Pages 会自动重新发布网站，不需要额外的构建步骤。
