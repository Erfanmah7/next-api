import { useEffect, useState } from "react";

export default function Home() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    async function fetching() {
      const res = await fetch("/api/todos");
      const data = await res.json();
      setTodos(data);
    }
    fetching();
  }, []);

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
    </>
  );
}
