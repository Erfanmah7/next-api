import { useEffect, useState } from "react";

export default function Home() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");

  useEffect(() => {
    async function fetching() {
      const res = await fetch("/api/todos");
      const data = await res.json();
      setTodos(data);
    }
    fetching();
  }, []);

  const clickHandler = async () => {
    const res = await fetch("/api/todos", {
      method: "POST",
      body: JSON.stringify({ todo }),
      headers: { "Content-Type": "appliaction/json" },
    });
    const data = await res.json();
    console.log(data);
  };

  const deleteHandler = async () => {
    const res = await fetch("/api/todos", { method: "DELETE" });
    const data = await res.json();
    setTodos(data.data);
    console.log(data);
  };

  const replaceHandler = async () => {
    const res = await fetch("/api/todos", {
      method: "PUT",
      body: JSON.stringify([
        { id: 5, title: "ali" },
        { id: 6, title: "milad" },
      ]),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    setTodos(data.data);
  };

  const replaceItemHandler = async () => {
    const res = await fetch(`/api/todos/${id}`, {
      method: "PATCH",
      body: JSON.stringify({ title }),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    setTodos(data);
  };

  return (
    <>
      <div>
        <h1>Todos</h1>
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>{todo.title}</li>
          ))}
        </ul>
      </div>
      <div>
        <input value={todo} onChange={(e) => setTodo(e.target.value)} />
        <button onClick={clickHandler}>Click</button>
      </div>
      <div>
        <button onClick={deleteHandler}>Delete All</button>
      </div>
      <div>
        <button onClick={replaceHandler}>Replace All</button>
      </div>
      <div>
        <input value={id} onChange={(e) => setId(e.target.value)} />
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
        <button onClick={replaceItemHandler}>Replace item</button>
      </div>
    </>
  );
}
