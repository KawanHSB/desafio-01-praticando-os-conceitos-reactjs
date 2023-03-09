import { Header } from "./components/Header"
import { NewTask } from "./components/NewTask"
import { TaskCounter } from "./components/TaskCounter"
import { EmptyTaskList } from "./components/EmptyTaskList"
import { TaskList } from "./components/TaskList"
import { useState } from "react"

interface task {
  taskName: string,
  taskId: string,
  isComplete: boolean,
}

function App() {
  const [tasks, setTasks] = useState<task[]>([])

  function createNewTask(taskName) {
    const id = String(new Date().getTime())

    const newTask: task = {
      taskName,
      taskId: id,
      isComplete: false,
    }

    setTasks([...tasks, newTask])
    console.log(tasks)
  }

  // function handleDeleteTask(taskRecived: task) {
  //   const deleteTask = tasks.filter(taskToFilter => taskRecived.taskId !== taskToFilter.taskId)

  //   setTasks(deleteTask)
  // }

  return (
    <div className="App">
      <Header/>
      <NewTask createNewTask={createNewTask}/>
      <TaskCounter/>
      {tasks?.length ? (
        <TaskList/>
      ):(
        <EmptyTaskList/>
      ) }
    </div>
  )
}

export default App
