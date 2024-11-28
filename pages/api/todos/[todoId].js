import { todos } from "@/data/todos";

export default function handler(req, res) {
  const { todoId } = req.query;
  const { title } = req.body;
  if (req.method === "GET") {
    const todo = todos.find((todo) => todo.id === +todoId);
    res.status(200).json(todo);
  } else if (req.method === "PATCH") {
    const index = todos.findIndex((todo) => todo.id === +todoId);
    todos[index] = { id: todoId, title };
    res.status(200).json(todos);
  }
}
