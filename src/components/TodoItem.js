import React from 'react';
import { MdDeleteForever, MdCheck, MdCancel } from "react-icons/md";

const TodoItem = ({ todoData, deleteItem, statusUpdate }) => {
  return (
    <div>
      <div className='h-14 px-5 flex items-center'>
        <div className='flex items-center justify-between w-full'>
          <div className='flex items-center justify-between'>
            {todoData.status ? <MdCheck onClick={() => statusUpdate(todoData.id)} className='text-purple-500 h-5 w-4 mr-3' />: <MdCancel onClick={() => statusUpdate(todoData.id)} className='text-blue-500 h-5 w-4 mr-3' />} 
            <p className={`text-gray-500 ${todoData.status ? 'line-through' : ''}`}>{todoData.text}</p>
          </div>
          <div>
            <MdDeleteForever onClick={() => deleteItem(todoData.id)} className='h-5 w-5 text-red-500' />
          </div>
        </div>
      </div>
      <div className='bg-slate-500 h-[1px]'></div>
    </div>
  );
}

export default TodoItem;
