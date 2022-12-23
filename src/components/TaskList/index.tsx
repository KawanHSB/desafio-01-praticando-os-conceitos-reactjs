import styles from "./styles.module.scss"
import Trash from "../../assets/trash.svg"

export function TaskList() {
    return (
        <div className={styles.wraper}>
            <div>
                <div className={styles.task}>
                    <input className={styles.checkBox} type="checkbox"/>
                    <h3>Default task</h3>
                    <button><img src={Trash}/></button>
                </div>
            </div>
        </div>
    )
}
