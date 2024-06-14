import { Context } from "hono";

const createTodos = async (c: Context) => {
  const { todo } = await c.req.json();

  if (!todo) {
    return c.json({
      success: false,
      data: null,
      message: "todo is required",
    });
  }
  try {
    const { success } = await c.env.DB.prepare(
      "INSERT INTO todos (todo) values (?)"
    )
      .bind(todo)
      .run();

    if (!success) {
      return c.json(
        {
          success: false,
          message: "Error while adding new todo",
        },
        { status: 500 }
      );
    }
    return c.json(
      {
        success: true,
        message: "Added Successfully",
      },
      { status: 201 }
    );
  } catch (error) {
    return c.json({
      success: false,
      message: "Error while adding new todo",
    });
  }
};

export default createTodos;

// import { Context } from "hono";

// const createTodos = async (c: Context) => {
//   const { todo } = await c.req.json();

//   try {
//     const { success, id } = await c.env.DB.prepare(
//       "INSERT INTO todos (todo) VALUES (?)"
//     )
//       .bind(todo)
//       .run();

//     return c.json(
//       {
//         success: true,
//         id,
//       },
//       201,
//       {
//         "Access-Control-Allow-Origin": "https://logintest-1br.pages.dev",
//         "Access-Control-Allow-Methods": "POST, GET, OPTIONS, DELETE, PATCH",
//         "Access-Control-Allow-Headers": "Content-Type",
//       }
//     );
//   } catch (error) {
//     return c.json(
//       {
//         success: false,
//         message: "Error while creating todo",
//       },
//       500,
//       {
//         "Access-Control-Allow-Origin": "https://logintest-1br.pages.dev",
//         "Access-Control-Allow-Methods": "POST, GET, OPTIONS, DELETE, PATCH",
//         "Access-Control-Allow-Headers": "Content-Type",
//       }
//     );
//   }
// };

// export default createTodos;
