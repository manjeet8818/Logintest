// import { Context } from "hono";

// const deleteTodo = async (c: Context) => {
//   const todoId = c.req.param("todoId");

//   try {
//     const { success } = await c.env.DB.prepare("DELETE FROM todos where id = ?")
//       .bind(todoId)
//       .run();

//     if (!success) {
//       return c.json({
//         success: true,
//         data: {
//           deleted: false,
//         },
//         message: "Unable to delete. Please try later",
//       });
//     }

//     return c.json({
//       success: true,
//       data: {
//         deleted: true,
//       },
//     });
//   } catch (error) {
//     console.log("error", error);
//     return c.json({
//       success: false,
//       data: null,
//       message: "Server Error",
//     });
//   }
// };

// export default deleteTodo;

import { Context } from "hono";

const deleteTodo = async (c: Context) => {
  const todoId = c.req.param("todoId");

  try {
    const { success } = await c.env.DB.prepare("DELETE FROM todos where id = ?")
      .bind(todoId)
      .run();

    if (!success) {
      return c.json(
        {
          success: true,
          data: {
            deleted: false,
          },
          message: "Unable to delete. Please try later",
        },
        200,
        {
          "Access-Control-Allow-Origin": "https://logintest-1br.pages.dev",
          "Access-Control-Allow-Methods": "POST, GET, OPTIONS, DELETE, PATCH",
          "Access-Control-Allow-Headers": "Content-Type",
        }
      );
    }

    return c.json(
      {
        success: true,
        data: {
          deleted: true,
        },
      },
      200,
      {
        "Access-Control-Allow-Origin": "https://logintest-1br.pages.dev",
        "Access-Control-Allow-Methods": "POST, GET, OPTIONS, DELETE, PATCH",
        "Access-Control-Allow-Headers": "Content-Type",
      }
    );
  } catch (error) {
    console.log("error", error);
    return c.json(
      {
        success: false,
        data: null,
        message: "Server Error",
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

export default deleteTodo;
