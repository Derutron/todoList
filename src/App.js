import React, { useState } from 'react';
import './index.css';
import '../src/components/css/Form.css'
import moon from './image/icon-moon.svg'; 
import sun from './image/icon-sun.svg'
import Form from './components/Form';
import TodoItem from './components/TodoItem';
import FilterNav from './components/FilterNav';

function App() {
  const [todoList, setTodoList] = useState([]);
  const [filter, setFilter] = useState("all");
  const [darkMode, setDarkMode] = useState(false);


  

  // Function to add new todo item
  const addTodo = (userInput) => {
    const newTodo = {
      id: Date.now(),
      text: userInput,
      status: false,
    };
    setTodoList((prevData) => [newTodo, ...prevData]);
  };

  // Function to remove a todo item by its ID
  const removeTodoById = (id) => {
    const todoItems = todoList.filter((todo) => todo.id !== id);
    setTodoList(todoItems);
  };

  // Function to set todo status
  const toggleTodoStatus = (id) => {
    setTodoList(
      todoList.map((todo) => {
        if (todo.id === id) {
          return { ...todo, status: !todo.status };
        }
        return todo;
      })
    );
  };

  // Function to clear all completed todo items
  const clearCompletedTodos = () => {
    const todoItems = todoList.filter((todo) => !todo.status);
    setTodoList(todoItems);
  };

  // Function to update the filter value
  const updateFilterValue = (value) => setFilter(value);

  // Function to render todo list based on the filter value
  const renderTodoList = () => {
    let filteredTodo = todoList;

    if (filter === "active") {
      filteredTodo = todoList.filter((todo) => !todo.status);
    } else if (filter === "completed") {
      filteredTodo = todoList.filter((todo) => todo.status);
    }

    return filteredTodo.map((item) => (
      <TodoItem
        todoData={item}
        deleteItem={removeTodoById}
        statusUpdate={toggleTodoStatus}
        key={item.id}
      />
    ));
  };

  // Function to get the number of todos in a specific filter
  const getTodoCount = (filterValue) => {
    if (filterValue === "all") {
      return todoList.length;
    } else if (filterValue === "active") {
      return todoList.filter((todo) => !todo.status).length;
    } else if (filterValue === "completed") {
      return todoList.filter((todo) => todo.status).length;
    }
    return 0;
  }



  // bg-cover bg-[url('./image/bg-mobile-light.jpg')]}


return (
  <div className={`min-h-screen lg:w-[100%] bg-no-repeat bg-cover lg:mx-auto ${darkMode ? 'bg-gray-900' : 'bg-[url(./image/bg-mobile-light.jpg)]'}`} >  
     <div className={`px-5 pt-10 pb-10 bg-no-repeat bg-cover ${darkMode ? 'bg-gray-900' : 'bg-[url(./image/bg-mobile-light.jpg)]'}`} style={{ minHeight: todoList.length > 0 ? 'auto' : '750px' }}
>
    <div className="flex justify-between items-center">
    {!darkMode ? <p className="ml-[40px] text-3xl lg:text-5xl font-semibold text-black">TODO LIST</p>: <p className="ml-[40px] text-3xl lg:text-5xl font-semibold text-white">TODO LIST</p>}
          <div className="flex">
  {darkMode ? (
    <>
      <img
        src={sun}
        alt="sunIcon"
        className="cursor-pointer w-10 h-10 mr-10"
        onClick={() => setDarkMode(false)}
      />
      
    </>
  ) : (
    <>
      <img
        src={moon}
        alt="moonIcon"
        className="cursor-pointer w-10 h-10 mr-10"
        onClick={() => setDarkMode(true)}
      />
    </>
  )}
</div>


        </div>
      <Form addHandler={addTodo} />

      <div className="result rounded-md bg-white mx-auto lg:mx-[40px] md:mx-[40px] sm:mx-[40px]">
        <FilterNav filterHandler={updateFilterValue} />
        <div className="overflow-y-auto max-h-[300px]">
          {renderTodoList()}
        </div>
        {darkMode ? ( <div className="flex justify-between px-5 items-center h-14 ">
          <p className='text-[20px] font-bold'>Total: {getTodoCount("all")} items</p>
          <p className='text-[20px] font-bold'>Active: {getTodoCount("active")} items</p>
          <p className='text-[20px] font-bold'>Completed: {getTodoCount("completed")} items</p>
          <p className='text-[20px] font-bold w-[200px] h-[50px] bg-blue-200 flex justify-center item-center border-2 border-black rounded'><button onClick={clearCompletedTodos} type="button">
            Clear Completed
          </button></p>
        </div>):(<div className="flex justify-between px-5 items-center h-14 ">
          <p className='text-[20px] font-bold'>Total: {getTodoCount("all")} items</p>
          <p className='text-[20px] font-bold'>Active: {getTodoCount("active")} items</p>
          <p className='text-[20px] font-bold'>Completed: {getTodoCount("completed")} items</p>
          <p className='text-[20px] font-bold w-[200px] h-[50px] bg-blue-200 flex justify-center item-center border-2 border-black rounded'><button onClick={clearCompletedTodos} type="button">
            Clear Completed
          </button></p>
        </div>)}
      </div>
    </div>
  </div>
);
}

export default App;






