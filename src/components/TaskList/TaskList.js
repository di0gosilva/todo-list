import CheckboxInput from "../CheckboxInput/CheckboxInput";
import DeleteButton from "../DeleteButton/DeleteButton";
import TaskItem from "../TaskItem/TaskItem";

export default function TaskList({ taskList, onDeleteTarefa, onMarkTarefa }) {
  return (
    taskList.map((tarefa) => (
      <div className='item-lista' key={tarefa.id}>
        <div className='item-lista-checkbox'>
          <CheckboxInput
            tarefa={tarefa}
            onMarkTarefa={onMarkTarefa}
          />

          <TaskItem
            tarefa={tarefa}
          />
        </div>

        <DeleteButton
          tarefa={tarefa}
          onDeleteTarefa={onDeleteTarefa}
        />
      </div>
    ))
  )
}
