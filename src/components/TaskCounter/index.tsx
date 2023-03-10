import { task } from '../../App'
import styles from './styles.module.scss'

export function TaskCounter({ taskCounter }: { taskCounter: task[] }) {
  // const [taskCompleted, setTaskCompleted] = useState<task[]>([])

  const taskCompletionFilter = taskCounter.filter((taskCompletion) => {
    return taskCompletion.isComplete
  })

  const taskNumber = taskCounter.length
  const taskCompletedNumber = taskCompletionFilter.length

  return (
    <div className={styles.wraper}>
      <div className={styles.counters}>
        <h3 className={styles.tasksCounter}>
          Tarefas criadas{' '}
          <div className={styles.counterNumber}> {taskNumber} </div>
        </h3>
        <h3 className={styles.taskDoneCounter}>
          Concluidas{' '}
          <div className={styles.counterNumber}> {taskCompletedNumber} </div>
        </h3>
      </div>
    </div>
  )
}
