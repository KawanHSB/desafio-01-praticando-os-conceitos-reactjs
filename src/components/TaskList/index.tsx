import styles from './styles.module.scss'
import { HiOutlineTrash } from 'react-icons/hi2'
import { task } from '../../App'

export function TaskList({ taskListState }: { taskListState: task[] }) {
  return (
    <div className={styles.wraper}>
      {taskListState.map((task) => {
        return (
          <div key={task.taskId}>
            <div className={styles.task}>
              <input className={styles.checkBox} type="checkbox" />
              <h3>{task.taskName}</h3>
              <button>
                <HiOutlineTrash className={styles.trash} />
              </button>
            </div>
          </div>
        )
      })}
    </div>
  )
}
