import React, { useState } from 'react';
import './index.css';
import moon from './image/icon-moon.svg'; 
import Form from './components/Form';
import TodoItem from './components/TodoItem';
import FilterNav from './components/FilterNav';



function App() {
  const [todoList, setTodoList] = useState([]);

  //function to add new todo item
  const addTodo = (userInput) => {
    const newTodo = {
      id: Date.now(),
      text: userInput,
      status: false,
    }
    setTodoList(prevData => [newTodo,...prevData])
  }

  //function to remove a todoitem by its ID
  const removeTodoById = (id) => {
    const todoItems = todoList.filter(todo => todo.id !== id);
    setTodoList(todoItems);
  }

  //Function to set status
  const toggleTodoStatus = (id) => {
    setTodoList(
      todoList.map(todo => {
        if (todo.id === id) {
          return {...todo, status: !todo.status}
        }
        return todo;
      })
    )
  }

  //Function to clear all completed todo list
  const clearCompletedTodos = () => {
    const todoItems = todoList.filter(todo => !todo.status);
    setTodoList(todoItems);
  }

  return (
    <div className="min-h-screen bg-[#2f2f2] 1g:w-[60%] lg:mx-auto">
      <div className="h-52 px-5 pt-10 bg-no-repeat bg-cover bg-[url('./image/bg-mobile-light.jpg')]">
      <div className="flex justify-between items-center">
        <p className="text-3x1 font-semibold text-white">TODO</p>
        <img src={moon} alt="MoonIcon" />
        </div>
        <Form addHandler={addTodo} />
      </div>
      <div className='relative -top-8 rounded-md bg-white h-56 w-[90%] mx-auto'>
        <FilterNav />
       {todoList.map(item => <TodoItem
        todoData={item}
        deleteItem={removeTodoById}
        statusUpdate={toggleTodoStatus}
        key={item.id} />)}
        <div className='flex justify-between px-5 items-center h-14'>
          <p>4 items</p>
          <button onClick={clearCompletedTodos} type='button'>Clear Completed</button>
        </div>
      </div>
    </div>

   
  );
}

export default App;