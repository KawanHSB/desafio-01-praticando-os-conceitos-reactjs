import { Header } from "./components/Header"
import { NewTask } from "./components/NewTask"
import { TaskCounter } from "./components/TaskCounter"
import { EmptyTaskList } from "./components/EmptyTaskList"
import { TaskList } from "./components/TaskList"
import { useState } from "react"

export interface task {
  taskName: string,
  taskId: string,
  isComplete: boolean,
}

function App() {
  const [tasks, setTasks] = useState<task[]>([])

  function createNewTask(taskName: string) {
    const id = String(new Date().getTime())

    const newTask: task = {
      taskName,
      taskId: id,
      isComplete: false,
    }
    
    setTasks([...tasks, newTask])
  }

  function handleTogleCompletion(taskRecived: task) {
    const index = tasks.indexOf(taskRecived)
    const isCompleteTogled = 
      tasks[index].isComplete = !(tasks[index].isComplete)

    console.log(isCompleteTogled)
    console.log(tasks)
  }
  
  // function handleDeleteTask(taskRecived: task) {
  //   const deleteTask = tasks.filter(taskToFilter => taskRecived.taskId !== taskToFilter.taskId)

  //   setTasks(deleteTask)
  // }

  return (
    <div className="App">
      <Header/>
      <NewTask 
        createNewTask={createNewTask}
      />
      <TaskCounter
        taskCounter={tasks}
      />
      {tasks?.length ? (
        <TaskList 
          taskListState={tasks}
          togleCompletion={handleTogleCompletion}
        />
      ):(
        <EmptyTaskList/>
      ) }
    </div>
  )
}

export default App
