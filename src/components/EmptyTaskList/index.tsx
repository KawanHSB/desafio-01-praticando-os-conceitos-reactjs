import styles from './styles.module.scss'
import ClipBoard from '../../assets/Clipboard.svg'

export function EmptyTaskList() {
  return (
    <div className={styles.wraper}>
      <div className={styles.top}>
        <div className={styles.note}>
          <img src={ClipBoard} alt="" />
          <h1>Você ainda não tem tarefas cadastradas</h1>
          <h2>Crie tarefas e organize seus itens a fazer</h2>
        </div>
      </div>
    </div>
  )
}
