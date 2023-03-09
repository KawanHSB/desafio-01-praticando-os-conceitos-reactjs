import styles from "./styles.module.scss"
import Trash from "../../assets/trash.svg"
import {HiOutlineTrash} from "react-icons/hi2"
import { task } from "../../App"

export function TaskList({taskListState} : {taskListState: task[]}) {
    
            
    return (
        <div className={styles.wraper}>
            {taskListState.map(task => {
                return (
                    <div>
                    <div className={styles.task}>
                        <input className={styles.checkBox} type="checkbox"/>
                        <h3>{task.taskName}</h3>
                        <button /*onClick={}*/><HiOutlineTrash className={styles.trash}/></button>
                    </div>
                </div>
                )
            })}

        </div>
    )
}