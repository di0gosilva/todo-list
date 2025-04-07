export default function DeleteButton({ tarefa, onDeleteTarefa }) {
  return (
    <button className="deletar" onClick={() => onDeleteTarefa(tarefa.id)}>Excluir</button>
  )
}
