import { todos } from "@/data/todos";

export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json(todos);
  } else if (req.method === "POST") {
    const { todo } = req.body;
    //storage data in a DB
    const newTodo = {
      id: todos.length + 1,
      title: todo,
    };
    res.status(201).json({ message: "added successfully", data: newTodo });
  } else if (req.method === "DELETE") {
    //Delete all todos
    res.status(200).json({ message: "Deleted on Success", data: [] });
  } else if (req.method === "PUT") {
    res.status(200).json({ message: "Replaced All", data: req.body });
  }
}
