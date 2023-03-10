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

  function togleCompletion(taskRecived: task) {
    setTasks((prevTasks) => {
      const indexOf = prevTasks.indexOf(taskRecived)
      if (indexOf === -1) return prevTasks
      const newTasks = prevTasks.map((task, idx) => {
        if (idx === indexOf) return { ...task, isComplete: !task.isComplete }
        return task
      })
      console.log(newTasks)
      return newTasks
    })
  }

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
        <TaskList
          taskListState={tasks}
          deleteTask={deleteTask}
          togleCompletion={togleCompletion}
        />
      ) : (
        <EmptyTaskList />
      )}
    </div>
  )
}

export default App
