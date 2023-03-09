import styles from "./styles.module.scss"
import plus from "../../assets/Plus.svg"
import {useState} from "react"

import { task } from "../../App"

export function NewTask({createNewTask}) {

    const [taskName, setTaskName] = useState("")

    function handleCreateNewTask() {
        createNewTask(taskName)
        setTaskName("")
    }
    
    return (
        <div className={styles.wraper}>
            <div className={styles.newTask}>
                <input placeholder="Adicione uma nova tarefa"
                onChange={(e) => setTaskName(e.target.value)}
                value={taskName}
                />
                <button onClick={handleCreateNewTask}
                >Criar <img src={plus} /></button>
            </div>
        </div>
    )
}
