import React, { useState } from 'react'
import axios from 'axios'

function Update({ updateOn, update, id, task, render, setRender }) {

    const [inputValue, SetInputValue] = useState(task)

    const handleInputChange = (e) => {
        SetInputValue(e.target.value)
    }

    const handleSave = async (e) => {
        console.log("I'm clicked")
        e.preventDefault()

        try {
            const response = await axios({
                method: 'put',
                url: `http://localhost:8000/${id}`,
                responseType: 'json',
                data: {
                    taskName: inputValue
                }
            })
            console.log(response.data)
            setRender(!render)
        } catch (e) {
            console.log(e)
        }


        update(!updateOn)

    }
    return (
        <div className='w-[25rem] h-36 border
            bg-blue-200 rounded-lg flex 
            justify-center items-center
            absolute top-[50%] translate-y-[-50%]'>
            <input
                className='w-8/12 h-9 rounded-lg px-2'
                type="text"
                name=""
                id=""
                value={inputValue}
                onChange={handleInputChange}
                placeholder='Edit your task' />
            <button
                onClick={handleSave}
                className='border py-1 px-3 bg-gray-600 text-white rounded-lg ml-2'
            >Save</button>
        </div >
    )
}

export default Update