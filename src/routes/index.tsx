import { createFileRoute } from "@tanstack/react-router";
import { readFile } from "node:fs/promises";
import path from "node:path";

export const Route = createFileRoute("/")({
  server: {
    handlers: {
      GET: async () => {
        const html = await readFile(
          path.join(process.cwd(), "public", "landing.html"),
          "utf-8",
        );
        return new Response(html, {
          headers: { "Content-Type": "text/html; charset=utf-8" },
        });
      },
    },
  },
});
