export default function CheckboxInput({ tarefa, onMarkTarefa}) {
  return (
    <input
      className='checkbox'
      type='checkbox'
      value={tarefa.text}
      checked={tarefa.checked}
      onChange={() => onMarkTarefa(tarefa.id)}
    />
  )
}
