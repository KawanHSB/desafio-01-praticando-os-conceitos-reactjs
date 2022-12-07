import styles from "./styles.module.scss"
import plus from "../../assets/Plus.svg"

export function Task() {

    
    return (
        <div className={styles.wraper}>
            <div className={styles.newTask}>
                <input placeholder="Adicione uma nova tarefa"/>
                <button>Criar <img src={plus} /></button>
            </div>
        </div>
    )
}
