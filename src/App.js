import React, { useState } from 'react';
import './index.css';
import moon from './image/icon-moon.svg'; 
import Form from './components/Form';
import TodoItem from './components/TodoItem';
import FilterNav from './components/FilterNav';



function App() {
  const [todoList, setTodoList] = useState([]);

  const addTodo = (userInput) => {
    const newTodo = {
      id: Date.now(),
      text: userInput,
      status: false,
    }
    setTodoList(prevData => [newTodo,...prevData])
  }
  return (
    <div className="min-h-screen bg-[#2f2f2]">
      <div className="h-52 px-5 pt-10 bg-no-repeat bg-cover bg-[url('./image/bg-mobile-light.jpg')]">
      <div className="flex justify-between items-center">
        <p className="text-3x1 font-semibold text-white">TODO</p>
        <img src={moon} alt="MoonIcon" />
        </div>
        <Form addHandler={addTodo} />
      </div>
      <div className='relative -top-8 rounded-md bg-white h-56 w-[90%] mx-auto'>
        <FilterNav />
       {todoList.map(item => <TodoItem todoData={item} key={item.id} />)}
        <div className='flex justify-between px-5 items-center h-14'>
          <p>4 items</p>
          <button type='button'>Clear Completed</button>
        </div>
      </div>
    </div>

   
  );
}

export default App;
