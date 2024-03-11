import Task from "./components/Task"
import axios from "axios"
import { useEffect, useState } from "react"
import Update from "./components/Update"

function App() {
  const [taskList, setTaskList] = useState([])
  const [newTask, setNewTask] = useState("")
  const [render, setRender] = useState(false)
  const [updateOn, setUpdateOn] = useState(false)
  const [id, setId] = useState("")
  const [task, setTask] = useState("")

  const updateHandler = (_id, _task) => {
    setId(_id)
    setTask(_task)
    setUpdateOn(!updateOn)
  }

  const handleDelete = async (id) => {
    try {
      const response = await axios({
        method: 'delete',
        url: `http://localhost:8000/${id}`,
        responseType: 'json'
      })
      console.log(response.data)
      setRender(!render)
    } catch (e) {
      console.log(e)
    }
  }
  const handleInputChange = (e) => {
    setNewTask(e.target.value)
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios({
        method: 'post',
        url: 'http://localhost:8000/',
        responseType: 'json',
        data: {
          taskName: newTask
        }
      })
      setNewTask(" ")
      setRender(!render)
    } catch (e) {
      console.log(e)
    }
  }
  useEffect(() => {
    const fetchData = async () => {
      try {
        axios({
          method: 'get',
          url: 'http://localhost:8000/',
          responseType: 'json'
        })
          .then(function (response) {
            setTaskList(response.data);
          });
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData();
  }, [render]); // Empty dependency array to run the effect only once


  return (

    <div className="h-full w-full text-center flex flex-col items-center">
      <h1 className="text-6xl font-bold my-5 text-gray-600 drop-shadow-xl py-5 px-3">ToDo App</h1>
      <form onSubmit={handleSubmit} className="w-4/12 min-w-[300px]">
        <div className="w-full min-w-[300px] my-4 flex justify-between max-h-10">
          <input
            required
            onChange={handleInputChange}
            value={newTask}
            type="text"
            id="AddTask"
            className="w-9/12 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5  focus-visible:ring-0 hover:ring-1 ring-gray-500"
            placeholder="Write your task here" />
          <button
            type="submit"
            className="border w-3/12 ml-2 p-2 rounded-lg bg-gray-500 text-gray-200 overflow-hidden text-sm hover:shadow-gray-950"> Add Task</button>
        </div>
      </form>
      {taskList.map(task => (<Task key={task._id} id={task._id} update={updateHandler} task={task.taskName} handleDelete={handleDelete} />))}
      {updateOn ? <Update updateOn={updateOn} update={setUpdateOn} id={id} task={task} render={render} setRender={setRender} /> : ""}
    </div>
  )
}

export default App
