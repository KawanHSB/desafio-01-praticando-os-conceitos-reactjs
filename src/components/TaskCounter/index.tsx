import styles from "./styles.module.scss"

export function TaskCounter() {

    return (
        <div className={styles.wraper}>
            <div className={styles.counters}>
                <h3 className={styles.tasksCounter}>
                    Tarefas criadas <span className={styles.counterNumber}
                    > 0 </span></h3>
                <h3 className={styles.taskDoneCounter}>
                    Concluidas <span className={styles.counterNumber}
                    > 5 </span></h3>
            </div>
        </div>
    )
}
