import styles from "./styles.module.scss"
import Trash from "../../assets/trash.svg"
import {HiOutlineTrash} from "react-icons/hi2"

export function TaskList() {
    return (
        <div className={styles.wraper}>
                    <div>
                    <div className={styles.task}>
                        <input className={styles.checkBox} type="checkbox"/>
                        <h3>taskName</h3>
                        <button><HiOutlineTrash className={styles.trash}/></button>
                    </div>
                </div>
        </div>
    )
}
