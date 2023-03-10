import styles from './styles.module.scss'
import { HiOutlineTrash } from 'react-icons/hi2'
import { task } from '../../App'

export function TaskList({
  taskListState,
  deleteTask,
  togleCompletion,
}: {
  taskListState: task[]
  deleteTask: (param: task) => void
  togleCompletion: (param: task) => void
}) {
  function handleDeleteTask(task: task) {
    deleteTask(task)
  }

  function handleTogleCompletion(task: task) {
    togleCompletion(task)
  }

  return (
    <div className={styles.wraper}>
      {taskListState.map((task) => {
        return (
          <div key={task.taskId}>
            <div className={styles.task}>
              <input
                className={styles.checkBox}
                type="checkbox"
                onClick={() => handleTogleCompletion(task)}
              />
              <h3
                // style={{
                //   textDecoration: task.isComplete ? 'line-through' : '',
                //   opacity: task.isComplete ? '0.7' : '',
                // }}
                className={task.isComplete ? styles.linethrough : ''}
              >
                {task.taskName}
              </h3>
              <button onClick={() => handleDeleteTask(task)}>
                <HiOutlineTrash className={styles.trash} />
              </button>
            </div>
          </div>
        )
      })}
    </div>
  )
}
