import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import { useEffect, useState } from "react";



function Task({ id, task, handleDelete, update }) {
    const [isChecked, setIsChecked] = useState(false)

    const handleEdit = (e) => {
        e.preventDefault()
        update(id, task)

    }
    const handleCheckedChange = (e) => {
        setIsChecked(e.target.checked)
    }
    const handleDeleteClick = (e) => {
        e.preventDefault();
        handleDelete(id);
    }
    return (
        <div className="my-1 h-8 w-4/12 min-w-[300px] border flex justify-between px-4 items-center rounded-md py-5 bg-gray-200 hover:ring-2 ring-gray-300">
            <input
                type="checkbox"
                name=""
                id=""
                checked={isChecked}
                onChange={handleCheckedChange}
                className="appearance-none h-4 w-4 hover:ring-4 ring-gray-300 outline rounded-lg text-gray-700 checked:bg-black mr-2"
            />
            <h2 className={`w-10/12 text-left text-gray-500 ${isChecked ? 'line-through' : ''}`}>{task}</h2>
            <button onClick={handleEdit} className="mx-4"><CiEdit /></button>
            <button onClick={handleDeleteClick}><MdDeleteOutline /></button>
        </div>
    )
}

export default Task