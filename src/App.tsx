import { Header } from "./components/Header"
import { NewTask } from "./components/NewTask"
import { TaskCounter } from "./components/TaskCounter"
import { EmptyTaskList } from "./components/EmptyTaskList"
import { TaskList } from "./components/TaskList"



function App() {


  return (
    <div className="App">
      <Header/>
      <NewTask/>
      <TaskCounter/>
      <TaskList/>
    </div>
  )
}

export default App
