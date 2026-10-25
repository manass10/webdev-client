import todos from "./todos.json";

export default function TodoList() {
  return (
    <ul style={{ listStyle: "none", paddingLeft: 0 }}>
      {todos.map((todo) => (
        <li key={todo.id}>
          <label>
            <input type="checkbox" defaultChecked={todo.done} readOnly /> {todo.title}
          </label>
        </li>
      ))}
    </ul>
  );
}
