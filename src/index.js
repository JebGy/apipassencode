import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { encoedpasswordfunc } from "./utils/encode.js";
const app = new Hono();
app.get("/", (c) => {
    return c.html(` <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Bienvenido a Api PassEncode</title>
      </head>
      <body>
        <h1>Bienvenido</h1>
        <code lang="javascript"> //POST "/api/encode?pass=yourpassword" </code>
      </body>
    </html>`);
});
app.get("/api/encode/:pass", (c) => {
    const pass = c.req.param("pass");
    console.log(pass);
    const encodePassword = encoedpasswordfunc(pass);
    return c.json({
        "encoded": encodePassword,
    });
});
const port = 3000;
console.log(`Server is running on http://localhost:${port}`);
serve({
    fetch: app.fetch,
    port,
});
