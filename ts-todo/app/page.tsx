"use client"
import React, { useEffect, useState } from 'react'
import { Toaster, toast } from 'react-hot-toast';

interface Todo {
  id: number,
  text: string
}

const Page = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [editingId, setEditingId] = useState<number | null>(null);

  useEffect(() => {
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleAddorUpdateTodo = (e: React.FormEvent) => {
    e.preventDefault();

    if (inputValue.trim() === "") {
      toast.error("Please enter a todo item");
      return;
    }

    if (editingId !== null) {
      setTodos(todos.map(todo => (todo.id === editingId ? { ...todo, text: inputValue } : todo)));
      setEditingId(null)
    } else {
      const newTodo = { id: Date.now(), text: inputValue };
      setTodos([...todos, newTodo])
    }
    setInputValue("");
  }

  const handleEdit = (id: number) => {
    const todoToEdit = todos.find(todo => todo.id === id);
    if (todoToEdit) {
      setInputValue(todoToEdit.text);
      setEditingId(id);
    }
  }

  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo => todo.id !== id)));
  }

  return (
    <>
      <Toaster />
      <div className="flex items-center justify-center flex-col  w-[100vw] h-[100vh]">
        <form onSubmit={handleAddorUpdateTodo}>
          <input type="text" className='bg-white text-black py-3 px-4 rounded-lg' placeholder='Add Todo'
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button className='bg-white text-black py-3 px-4 ml-2 rounded-lg'>
            {editingId !== null ? "Update" : "Add"}
          </button>
        </form>

        <div className='mt-5 bg-white text-black p-3 rounded-lg w-[300px] h-[400px] overflow-auto'>
          {todos.length > 0 ? (
            todos.map(todo => (
              <div key={todo.id} className='flex justify-between items-center py-2'>
                <p className='w-[60%] text-sm'>
                  {todo.text}
                </p>
                <div className='w-[40%] flex items-center justify-end'>
                  <button onClick={() => handleEdit(todo.id)} className='mr-2 text-white bg-blue-500 p-2 rounded-md text-xs'>Edit</button>
                  <button onClick={() => handleDelete(todo.id)} className='text-white bg-red-500 p-2 rounded-md text-xs'>Delete</button>
                </div>
              </div>
            ))
          ) : (
            <h4 className='font-bold text-center'>Not Available</h4>
          )
          }
        </div>
      </div>
    </>
  )
}

export default Page;