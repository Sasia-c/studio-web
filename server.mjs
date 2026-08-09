import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { dirname, extname, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(fileURLToPath(import.meta.url));
const port = Number(process.env.PORT || 4173);
const contentTypes = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".txt": "text/plain; charset=utf-8"
};

createServer(async (request, response) => {
  try {
    const url = new URL(request.url || "/", "http://localhost");
    let requestedPath = decodeURIComponent(url.pathname).replace(/^\/+/, "");
    if (!requestedPath) requestedPath = "index.html";

    let filePath = resolve(root, requestedPath);
    const pathFromRoot = relative(root, filePath);
    if (pathFromRoot === ".." || pathFromRoot.startsWith(`..\\`) || pathFromRoot.startsWith("../")) {
      response.writeHead(403).end("Forbidden");
      return;
    }

    const fileInfo = await stat(filePath);
    if (fileInfo.isDirectory()) filePath = resolve(filePath, "index.html");
    const body = await readFile(filePath);
    response.writeHead(200, {
      "Content-Type": contentTypes[extname(filePath).toLowerCase()] || "application/octet-stream",
      "Cache-Control": "no-cache",
      "X-Content-Type-Options": "nosniff"
    });
    response.end(body);
  } catch {
    response.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    response.end("404 - 页面不存在");
  }
}).listen(port, "127.0.0.1", () => {
  console.log(`三颗西兰花官网已启动：http://127.0.0.1:${port}`);
});
