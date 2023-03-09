import styles from "./styles.module.scss"
import {HiOutlineTrash} from "react-icons/hi2"
import { task } from "../../App"

export function TaskList({taskListState, togleCompletion} : {taskListState: task[]}) {

    function check() {
        togleCompletion(taskListState)
        console.log(taskListState)
    }

    return (
        <div className={styles.wraper}>
            {taskListState.map(task => {
                return (
                    <div>
                    <div className={styles.task}>
                        <input 
                            className={styles.checkBox} 
                            type="checkbox" 
                            key={task.taskId} 
                            onClick={() => check}
                        />
                        <h3>{task.taskName}</h3>
                        <button><HiOutlineTrash className={styles.trash}/></button>
                    </div>
                </div>
                )
            })}
        </div>
    )
}
