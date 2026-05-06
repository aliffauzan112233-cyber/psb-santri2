import { Hono } from "hono";
import { serve } from "@hono/node-server";
const app = new Hono();

//endpoint utama
app.get("/", (c) => {
    return c.text("Hello World");
});

// jalan server
serve({
    fetch: app.fetch,
    port: 3000,
});

console.log('Server running on http://localhost:3000 🚀')