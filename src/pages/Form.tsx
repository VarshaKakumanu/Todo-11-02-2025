import { addTodolist } from '@/Redux/reducers/Todo';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { toast } from 'sonner';

export const Form = () => {
    const [text,setText] = useState("");
    const [data,setData] = useState({});
    const dispatch = useDispatch();

    const handleSubmit = (e:any) =>{
e.preventDefault();
if (text.trim()){
    console.log(text)
    const newData = {
        id:Date.now(),
        text:text,
    }
    setData(newData);
    dispatch(addTodolist(newData))
    setText("");
    toast.success("Added to TODO List!")
}
    };

  return (
    <div>
    <form className="w-full max-w-lg flex gap-2" onSubmit={handleSubmit}>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
            Name
          </label>
          <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="nick" type="text"
          value={text}
          onChange={(e)=> setText(e.target.value)}
          />
          <p className="text-gray-600 text-xs italic">Remove if not needed</p>
        </div>
      </div>
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <button className="shadow bg-teal-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">
            Add
          </button>
        </div>
        <div className="md:w-2/3"></div>
      </div>
    </form>
    </div>
  )
}
