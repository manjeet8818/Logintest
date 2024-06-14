// import { Context } from "hono";

// const getTodos = async (c: Context) => {
//   try {
//     const { results: todos } = await c.env.DB.prepare(
//       "SELECT * FROM todos ORDER BY created_at desc"
//     ).all();

//     return c.json({
//       success: true,
//       data: todos,
//     });
//   } catch (error) {
//     return c.json({
//       success: false,
//       message: "Error while fetching  todos",
//     });
//   }
// };

// export default getTodos;

import { Context } from "hono";

const getTodos = async (c: Context) => {
  try {
    const { results: todos } = await c.env.DB.prepare(
      "SELECT * FROM todos ORDER BY created_at desc"
    ).all();

    return c.json(
      {
        success: true,
        data: todos,
      },
      200,
      {
        "Access-Control-Allow-Origin": "https://logintest-1br.pages.dev",
        "Access-Control-Allow-Methods": "POST, GET, OPTIONS, DELETE, PATCH",
        "Access-Control-Allow-Headers": "Content-Type",
      }
    );
  } catch (error) {
    return c.json(
      {
        success: false,
        message: "Error while fetching todos",
      },
      500,
      {
        "Access-Control-Allow-Origin": "https://logintest-1br.pages.dev",
        "Access-Control-Allow-Methods": "POST, GET, OPTIONS, DELETE, PATCH",
        "Access-Control-Allow-Headers": "Content-Type",
      }
    );
  }
};

export default getTodos;
