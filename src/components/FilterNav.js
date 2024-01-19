import React, { useState } from 'react';

const FilterNav = ({ filterHandler }) => {
  const [activeButton, setActiveButton] = useState("all");

  const handleButtonClick = (filter) => {
    setActiveButton(filter);
    filterHandler(filter);
  };

  return (
    <div className='border-gray-500 border-b-[1px] flex justify-center gap-[100px] h-14 rounded-tl rounded-tr-md'>
      < button
        className={`focus:font-bold ${activeButton === "all" ? 'text-blue-500' : ''}`}
        onClick={() => handleButtonClick("all")}
        type='button'
      >
        All
      </button>

      <button
        className={`focus:font-bold ${activeButton === "active" ? 'text-red-500' : ''}`}
        onClick={() => handleButtonClick("active")}
        type='button'
      >
        Active
      </button>

      <button
        className={`focus:font-bold ${activeButton === "completed" ? 'text-green-500' : ''}`}
        onClick={() => handleButtonClick("completed")}
        type='button'
      >
        Completed
      </button>
    </div>
  );
}

export default FilterNav;
