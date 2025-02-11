import { addTodolist, deleteTodolist } from "@/Redux/reducers/Todo";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";


const List = () => {
    const TodoListData = useSelector((state:any)=>state.TodoData)
    const dispatch = useDispatch();

    const [editText,setEditText]=useState("");
    const [editId,setEditId]=useState(null);

    //edit handle
    const handleEdit =(id:any,text:any) =>{
        setEditId(id)
        setEditText(text)
    }

    //save handle 
    const handleSave =(id:number) =>{
        if(editText.trim()){
            dispatch(addTodolist({id,text:editText}));
        }
        setEditId(null);
        setEditText("");

    }
  return (
    <div className="text-gray-900 bg-gray-200">
      <div className="px-3 py-4 flex justify-center">
        <table className="w-full text-md bg-white shadow-md rounded mb-4">
          <tbody>
            <tr className="border-b">
              <th className="text-left p-3 px-5">Name</th>
              <th></th>
            </tr>
           {TodoListData.map((item:any)=>(
            <tr key={item.id} className="border-b hover:bg-orange-100 bg-gray-100">
              <td className="p-3 px-5">
                {editId === item.id ?
                <input 
                type="text"
                value={editText}
                onChange={(e)=>setEditText(e.target.value)} />:
                <span>{item.text}</span>
                }
                
              </td>
              <td className="p-3 px-5 flex justify-end">
              {editId === item.id ?
               <button
               onClick={()=> handleSave(item.id)}
                className="bg-green-500 text-white px-2 mx-2">
               save
             </button>
             :
                <button
                onClick={()=>handleEdit(item.id,item.text)}
                 className="bg-blue-500 text-white px-2 mx-2">
                  Edit
                </button>
}
                <button
                onClick={()=>dispatch(deleteTodolist(item.id))}
                 className="bg-red-500 text-white px-2">Delete</button>
              </td>
            </tr>))} 
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default List;
