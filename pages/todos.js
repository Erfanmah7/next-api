import { todos } from "@/data/todos";

function Todos({ data }) {
  return (
    <div>
      {data.map((todo) => (
        <p key={todo.id}>{todo.title}</p>
      ))}
    </div>
  );
}

export default Todos;

export async function getStaticProps() {
  //....not req api
  //   const res = await fetch("/api/todos");
  //   const data = await res.json();

  return {
    props: { data: todos },
  };
}
