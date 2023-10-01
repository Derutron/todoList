// import React, { useState } from 'react';
// import './index.css';
// import moon from './image/icon-moon.svg'; 
// import Form from './components/Form';
// import TodoItem from './components/TodoItem';
// import FilterNav from './components/FilterNav';

// function App() {
//   const [todoList, setTodoList] = useState([]);
//   const [filter, setFilter] = useState("all");

//   // Function to add new todo item
//   const addTodo = (userInput) => {
//     const newTodo = {
//       id: Date.now(),
//       text: userInput,
//       status: false,
//     };
//     setTodoList(prevData => [newTodo, ...prevData]);
//   }

//   // Function to remove a todo item by its ID
//   const removeTodoById = (id) => {
//     const todoItems = todoList.filter(todo => todo.id !== id);
//     setTodoList(todoItems);
//   }

//   // Function to set todo status
//   const toggleTodoStatus = (id) => {
//     setTodoList(
//       todoList.map(todo => {
//         if (todo.id === id) {
//           return { ...todo, status: !todo.status };
//         }
//         return todo;
//       })
//     );
//   }

//   // Function to clear all completed todo items
//   const clearCompletedTodos = () => {
//     const todoItems = todoList.filter(todo => !todo.status);
//     setTodoList(todoItems);
//   }

//   // Function to update the filter value
//   const updateFilterValue = (value) => setFilter(value);

//   // Function to get the number of todos in a specific filter
//   const getTodoCount = () => {
//     if (filter === "all") {
//       return todoList.length;
//     } else if (filter === "active") {
//       return todoList.filter(todo => !todo.status).length;
//     } else if (filter === "completed") {
//       return todoList.filter(todo => todo.status).length;
//     }
//     return 0;
//   }

//   // Function to render todoList based on the filter value
//   const renderTodoList = () => {
//     let filteredTodo = todoList;
//     if (filter === "active") {
//       filteredTodo = todoList.filter(todo => !todo.status);
//     } else if (filter === "completed") {
//       filteredTodo = todoList.filter(todo => todo.status);
//     }

//     return filteredTodo.map(item => (
//       <TodoItem
//         todoData={item}
//         deleteItem={removeTodoById}
//         statusUpdate={toggleTodoStatus}
//         key={item.id}
//       />
//     ));
//   }

//   return (
//     <div className="min-h-screen bg-[#2f2f2] lg:w-[60%] lg:mx-auto">
//       <div className="h-52 px-5 pt-10 bg-no-repeat bg-cover bg-[url('./image/bg-mobile-light.jpg')]">
//         <div className="flex justify-between items-center">
//           <p className="text-3xl lg:text-5xl font-semibold text-white">TODO</p>
//           <img src={moon} alt="MoonIcon" />
//         </div>
//         <Form addHandler={addTodo} />
//       </div>
//       <div className="relative -top-8 rounded-md bg-white h-56 w-[90%] mx-auto">
//         <FilterNav filterHandler={updateFilterValue} />
//         {renderTodoList()}
//         <div className="flex justify-between px-5 items-center h-14">
//           <p>{getTodoCount()} items</p>
//           <button onClick={clearCompletedTodos} type="button">
//             Clear Completed
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;


import React, { useState } from 'react';
import './index.css';
import moon from './image/icon-moon.svg'; 
import Form from './components/Form';
import TodoItem from './components/TodoItem';
import FilterNav from './components/FilterNav';

function App() {
  const [todoList, setTodoList] = useState([]);
  const [filter, setFilter] = useState("all");

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

  return (
    <div className="min-h-screen bg-[#2f2f2] lg:w-[60%] lg:mx-auto">
      <div className="h-52 px-5 pt-10 bg-no-repeat bg-cover bg-[url('./image/bg-mobile-light.jpg')]">
        <div className="flex justify-between items-center">
          <p className="text-3xl lg:text-5xl font-semibold text-white">TODO</p>
          <img src={moon} alt="MoonIcon" />
        </div>
        <Form addHandler={addTodo} />
      </div>
      <div className="relative -top-8 rounded-md bg-white h-56 w-[90%] mx-auto">
        <FilterNav filterHandler={updateFilterValue} />
        {renderTodoList()}
        <div className="flex justify-between px-5 items-center h-14">
          <p>Total: {getTodoCount("all")} items</p>
          <p>Active: {getTodoCount("active")} items</p>
          <p>Completed: {getTodoCount("completed")} items</p>
          <button onClick={clearCompletedTodos} type="button">
            Clear Completed
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;



