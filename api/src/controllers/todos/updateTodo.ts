// import { Context } from "hono";

// const updateTodos = async (c: Context) => {
//   const { todoStatus } = await c.req.json();
//   const todoId = c.req.param("todoId");

//   try {
//     const { success } = await c.env.DB.prepare(
//       "UPDATE todos SET is_completed = ? WHERE id = ?"
//     )
//       .bind(Number(todoStatus), todoId)
//       .run();

//     console.log("success", success);

//     return c.json({
//       success: true,
//     });
//   } catch (error) {
//     return c.json({
//       success: false,
//       message: "Error while updating  todos",
//     });
//   }
// };

// export default updateTodos;

import { Context } from "hono";

const updateTodos = async (c: Context) => {
  const { todoStatus } = await c.req.json();
  const todoId = c.req.param("todoId");

  try {
    const { success } = await c.env.DB.prepare(
      "UPDATE todos SET is_completed = ? WHERE id = ?"
    )
      .bind(Number(todoStatus), todoId)
      .run();

    console.log("success", success);

    return c.json(
      {
        success: true,
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
        message: "Error while updating todos",
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

export default updateTodos;
