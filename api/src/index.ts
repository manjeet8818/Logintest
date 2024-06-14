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
//     // This works
//     // origin: "http://localhost:5173",

//     origin: "*",

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

// Set up CORS
app.use(
  "/*",
  cors({
    origin: "*",
    allowMethods: ["POST", "GET", "OPTIONS", "DELETE", "PATCH"],
    allowHeaders: ["Content-Type", "Authorization"],
  })
);

app.route("/todos", todosRoutes);

export default app;
