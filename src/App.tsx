import { Header } from './components/Header'
import { NewTask } from './components/NewTask'
import { TaskCounter } from './components/TaskCounter'
import { EmptyTaskList } from './components/EmptyTaskList'
import { TaskList } from './components/TaskList'
import { useState } from 'react'

export interface task {
  taskName: string
  taskId: string
  isComplete: boolean
}

function App() {
  const [tasks, setTasks] = useState<task[]>([])

  function createNewTask(taskName: string) {
    if (taskName !== '') {
      const id = String(new Date().getTime())

      const newTask: task = {
        taskName,
        taskId: id,
        isComplete: false,
      }

      setTasks([...tasks, newTask])
    } else {
      return alert('Task precisa de um nome')
    }
  }

  // function handleTogleCompletion(taskRecived: task) {
  //   const index = tasks.indexOf(taskRecived)
  //   const isCompleteTogled =
  //     tasks[index].isComplete = !(tasks[index].isComplete)

  //   console.log(isCompleteTogled)
  //   console.log(tasks)
  // }

  function deleteTask(taskRecived: task) {
    const taskDeleted = tasks.filter((taskToFilter) => {
      return taskRecived.taskId !== taskToFilter.taskId
    })

    setTasks(taskDeleted)
  }

  return (
    <div className="App">
      <Header />
      <NewTask createNewTask={createNewTask} />
      <TaskCounter taskCounter={tasks} />
      {tasks?.length ? (
        <TaskList taskListState={tasks} deleteTask={deleteTask} />
      ) : (
        <EmptyTaskList />
      )}
    </div>
  )
}

export default App
