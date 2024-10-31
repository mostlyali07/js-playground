"use client"
import { useEffect, useState } from 'react';
import Image from "next/image";
import { getTodos, addTodo, updateTodo, deleteTodo } from '../app/lib/queries';


export default function Home() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");


  useEffect(() => {
    async function loadTodos() {
      const data = await getTodos();
      setTodos(data);
    }
    loadTodos()
  }, [])

  const handleAddTodo = async () => {
    await addTodo(newTodo);
    setNewTodo("");
    setTodos(await getTodos());
  }

  const handleUpdateTodo = async (id: number, isComplete: boolean) => {
    await updateTodo(id, !isComplete)
    setTodos(await getTodos());
  }

  const handleDeleteTodo = async (id: number) => {
    await deleteTodo(id)
    setTodos(await getTodos());
  }

  return (
    <>
      <h1>Todo List</h1>
      <input type="text" value={newTodo} onChange={(e) => setNewTodo(e.target.value)}
        placeholder='New Todo' />
      <button onClick={handleAddTodo}>Add</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span
              style={{ textDecoration: todo.is_complete ? 'line-through' : 'none' }}
              onClick={() => handleUpdateTodo(todo.id, todo.is_complete)}
            >
              {todo.title}
            </span>
            <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
}
