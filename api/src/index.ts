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

// app.use(
//   "/*",
//   cors({
//     // origin: ["https://my-app.manjeet88.workers.dev"],
//     origin: ["https://logintest-1br.pages.dev"],

//     allowMethods: ["POST", "GET", "OPTIONS", "DELETE", "PATCH"],
//   })
// );
// app.route("/todos", todosRoutes);

// export default app;

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

// CORS Middleware
app.use(
  "/*",
  cors({
    origin: ["https://logintest-1br.pages.dev"],
    allowMethods: ["POST", "GET", "OPTIONS", "DELETE", "PATCH"],
    allowHeaders: ["Content-Type"],
  })
);

// Routes
app.route("/todos", todosRoutes);

export default app;
