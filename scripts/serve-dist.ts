import { serve, file } from "bun";

const DIST = new URL("../dist/", import.meta.url);
const PORT = Number(process.env.PORT || 4173);

const MIME: Record<string, string> = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpeg": "image/jpeg",
  ".jpg": "image/jpeg",
  ".mp4": "video/mp4",
  ".pdf": "application/pdf",
  ".map": "application/json",
  ".webp": "image/webp",
  ".json": "application/json",
  ".txt": "text/plain; charset=utf-8",
};

const server = serve({
  port: PORT,
  async fetch(req) {
    const url = new URL(req.url);
    let pathname = decodeURIComponent(url.pathname);
    if (pathname === "/") pathname = "/index.html";

    const filePath = new URL(`.${pathname}`, DIST);
    const f = file(filePath);
    const exists = await f.exists();
    if (!exists) {
      // SPA fallback
      const index = file(new URL("./index.html", DIST));
      return new Response(index, {
        headers: { "Content-Type": MIME[".html"] ?? "text/html; charset=utf-8" },
      });
    }

    const ext = pathname.substring(pathname.lastIndexOf(".")).toLowerCase();
    const headers: Record<string, string> = {
      "Content-Type": MIME[ext] ?? "application/octet-stream",
    };
    // Serve the CV with a deterministic download filename (the bundled URL
    // carries a content hash). Mirrors the vercel.json production header.
    if (ext === ".pdf" && pathname.includes("Kumanayaka-CV")) {
      headers["Content-Disposition"] =
        'attachment; filename="Vihanga Chamodya Kumanayaka - CV.pdf"';
    }
    return new Response(f, { headers });
  },
});

console.log(`Static dist server running at http://localhost:${server.port}`);