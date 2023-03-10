import { task } from '../../App'
import styles from './styles.module.scss'

export function TaskCounter({ taskCounter }: { taskCounter: task[] }) {
  const taskNumber = taskCounter.length

  const taskCompleted = taskCounter.filter((task) => task.isComplete === true)
  const taskCompleteD = taskCompleted.length

  return (
    <div className={styles.wraper}>
      <div className={styles.counters}>
        <h3 className={styles.tasksCounter}>
          Tarefas criadas{' '}
          <div className={styles.counterNumber}> {taskNumber} </div>
        </h3>
        <h3 className={styles.taskDoneCounter}>
          Concluidas{' '}
          <div className={styles.counterNumber}>
            {' '}
            {taskCompleteD} de {taskNumber}{' '}
          </div>
        </h3>
      </div>
    </div>
  )
}
