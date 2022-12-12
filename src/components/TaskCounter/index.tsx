import styles from "./styles.module.scss"

export function TaskCounter() {

    return (
        <div className={styles.wraper}>
            <div className={styles.counters}>
                <h3 className={styles.tasksCounter}>
                    Tarefas criadas <div className={styles.counterNumber}
                    > 5 </div>
                    </h3>
                <h3 className={styles.taskDoneCounter}>
                    Concluidas <div className={styles.counterNumber}
                    > 20 </div>
                </h3>
            </div>
        </div>
    )
}
