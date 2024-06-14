import { Hono } from "hono";

import todosRoutes from "./routes/todos";
import { cors } from "hono/cors";

type Bindings = {
  DB: D1Database;
  database_id: string;
  database_name: string;
};

const app = new Hono<{ Bindings: Bindings }>();

app.get("/", (c) => c.text("Hello Hono!"));

app.use(
  "/*",
  cors({
    // origin: ["https://my-app.manjeet88.workers.dev"],
    // origin: ["https://logintest-1br.pages.dev"],
    origin: "http://localhost:5173",

    allowMethods: ["POST", "GET", "OPTIONS", "DELETE", "PATCH"],
  })
);
app.route("/todos", todosRoutes);

export default app;

// ---------------------------------------------------------------
// ---------------------------------------------------------------
// ---------------------------------------------------------------
// ---------------------------------------------------------------

// import { Hono } from "hono";
// import todosRoutes from "./routes/todos";
// import { cors } from "hono/cors";

// type Bindings = {
//   DB: D1Database;
//   database_id: string;
//   database_name: string;
// };

// const app = new Hono<{ Bindings: Bindings }>();

// app.get("/", (c) => c.text("Hello Hono!"));

// // Global CORS Middleware
// app.use(
//   "/*",
//   cors({
//     //origin: "https://logintest-1br.pages.dev", // Allow specific origin
//     origin: "http://localhost:5173/", // Allow specific origin

//     allowMethods: ["POST", "GET", "OPTIONS", "DELETE", "PATCH"],
//     allowHeaders: ["Content-Type"],
//   })
// );

// // Explicit CORS Headers Middleware
// app.use("*", async (c, next) => {
//   await next();
//   c.res.headers.append(
//     "Access-Control-Allow-Origin",
//     "https://logintest-1br.pages.dev"
//   );
//   c.res.headers.append(
//     "Access-Control-Allow-Methods",
//     "POST, GET, OPTIONS, DELETE, PATCH"
//   );
//   c.res.headers.append("Access-Control-Allow-Headers", "Content-Type");
//   console.log("Request Headers:", c.req.headers);
//   console.log("Response Headers:", c.res.headers);
// });

// // Routes
// app.route("/todos", todosRoutes);

// export default app;
