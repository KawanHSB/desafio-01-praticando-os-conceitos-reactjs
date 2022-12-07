import { Header } from "./components/Header"
import { Task } from "./components/Task"
import { TaskCounter } from "./components/TaskCounter"
import { EmptyTaskList } from "./components/EmptyTaskList"



function App() {


  return (
    <div className="App">
      <Header/>
      <Task/>
      <TaskCounter/>
      
    </div>
  )
}

export default App
