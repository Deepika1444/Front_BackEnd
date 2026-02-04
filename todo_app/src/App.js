import { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);     //read
  const [input, setInput] = useState("");     //create 
  const [editId, setEditId] = useState(null); //update

  // CREATE & UPDATE
  const handleAddOrUpdate = () => {
    if (input.trim() === "") return;

    if (editId) {
      // UPDATE
      setTodos(
        todos.map((todo) =>
          todo.id === editId ? { ...todo, text: input } : todo
        )
      );
      setEditId(null);
    } else {
      // CREATE
      setTodos([
        ...todos,
        { id: Date.now(), text: input },
      ]);
    }

    setInput("");
  };

  // DELETE
  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // EDIT
  const handleEdit = (todo) => {
    setInput(todo.text);
    setEditId(todo.id);
  };

  return (
    <div className="app">
      <h1>📝 Todo App</h1>
      <h2>This is Todo App</h2>

      <div className="input-section">
        <input
          type="text"
          placeholder="Enter todo..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handleAddOrUpdate}>
          {editId ? "Update" : "Add"}
        </button>
      </div>

      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id}>
            <span>{todo.text}</span>
            <div>
              <button
                className="edit"
                onClick={() => handleEdit(todo)}
              >
                Edit
              </button>
              <button
                className="delete"
                onClick={() => handleDelete(todo.id)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

