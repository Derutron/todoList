import React, { useState } from 'react';
import "./css/Form.css"

const Form = ({ addHandler }) => { 
  const [userInput, setUserInput] = useState("");
  const [darkMode] = useState(false);

  const handleForm = (e) => {
    e.preventDefault();
    addHandler(userInput);
    setUserInput("");
  }

  return (
    <div className="form  py-2 my-10 lg:mx-[40px] md:mx-[40px] sm:mx-[40px] bg-white rounded-md">
      <form onSubmit={handleForm} className="flex items-center">
      {darkMode ? ( <div className="w-full">
          <input
            name="todoItem"
            onChange={(e) => setUserInput(e.target.value)}
            value={userInput}
            required
            placeholder="Create a new Todo item"
            type="text"
            className="rounded-md bg-gray-600 w-[99%] mx-auto h-6 pl-10 text-sm px-3 block  focus:outline-none sm:h-12 sm:text-base md:h-12 md:text-lg lg:h-12 lg:text-xl"
          />
        </div>):(<div className="w-full">
          <input
            name="todoItem"
            onChange={(e) => setUserInput(e.target.value)}
            value={userInput}
            required
            placeholder="Create a new Todo item"
            type="text"
            className="rounded-md w-[99%] mx-auto h-6 pl-10 text-sm px-3 block  focus:outline-none sm:h-12 sm:text-base md:h-12 md:text-lg lg:h-12 lg:text-xl"
          />
        </div>)}
        <button
          type="submit"
          className="bg-blue-900 inline-flex px-3 py-1 mx-2 items-center font-medium text-white rounded-lg sm:px-4 sm:py-2 md:px-5 md:py-2 lg:px-6 lg:py-3"
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default Form;



