export default function FilterBar({ taskFilter, setTaskFilter }) {
  return (
    <div className='filter-bar'>
      <button
        className={taskFilter === 'todas' ? 'active' : ''}
        onClick={() => setTaskFilter('todas')}
      >Todas</button>
      <button
        className={taskFilter === 'pendente' ? 'active' : ''}
        onClick={() => setTaskFilter('pendente')}
      >Pendentes</button>
      <button
        className={taskFilter === 'concluída' ? 'active' : ''}
        onClick={() => setTaskFilter('concluída')}
      >Concluídas</button>
    </div>
  )
}
