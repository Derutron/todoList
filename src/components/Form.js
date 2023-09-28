import React, { useState } from 'react';

const Form = ({ addHandler }) => { // Destructure the addHandler prop
  const [userInput, setUserInput] = useState("");

  const handleForm = (e) => {
    e.preventDefault();
    addHandler(userInput);
    setUserInput("");
  }

  return (
    <div className="py-2 my-5 bg-white rounded-md">
      <form onSubmit={handleForm} className='flex items-center'>
        <div className='w-full'>
          <input
            name='todoItem'
            onChange={(e) => setUserInput(e.target.value)}
            value={userInput}
            required
            placeholder='Create a new Todo item'
            type="text"
            className='rounded-md h-6 text-sm px-3 block w-full focus:outline-none'
          />
        </div>
        <button type='submit' className='bg-blue-900 inline-flex px-3 py-1 mx-2 items-center font-medium text-white rounded-lg'>Add</button>
      </form>
    </div>
  );
}

export default Form;
