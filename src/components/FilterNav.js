import React from 'react'

const FilterNav = () => {
  return (
    <div className='border-gray-500 border-b-[1px] flex justify-center gap-8 h-14 rounded-tl rounded-tr-md'>
      <button type='button'>All</button>
      <button type='button'>Active</button>
      <button type='button'>Completed</button>
    </div>
  )
}

export default FilterNav