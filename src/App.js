import { useState } from 'react';
import './App.css';
import TaskList from './components/TaskList/TaskList';
import TextInput from './components/TextInput/TextInput';
import AddButton from './components/AddButton/AddButton';
import FilterBar from './components/FilterBar/FilterBar';

function App() {
  const [input, setInput] = useState('')
  const [taskList, setTaskList] = useState([])
  const [taskCounter, setTaskCounter] = useState(0)
  const [taskFilter, setTaskFilter] = useState('todas')

  const onAddTarefa = () => {
    const novaTarefa = {
      id: Date.now(),
      text: input,
      checked: false,
      status: "pendente"
    }

    if(!novaTarefa.text) {
      alert('Digite uma nova tarefa!')
      return
    }

    setTaskList([...taskList, novaTarefa])
    setTaskCounter((prev) => prev + 1)
    setInput('')
  }

  const onDeleteTarefa = (id) => {
    const newList = taskList.filter(tarefa => tarefa.id !== id)
    setTaskList(newList)

    if(taskCounter !== 0) {
      setTaskCounter((prev) => prev - 1)
    }
  }

  const onMarkTarefa = (id) => {
    setTaskList(
      taskList.map(tarefa =>
        tarefa.id === id ? {
          ...tarefa,
          checked: !tarefa.checked,
          status: tarefa.checked ? "pendente" : "concluída"
        } : tarefa
      )
    )

    if(taskCounter !== 0) {
      setTaskCounter((prev) => prev - 1)
    }
  }

  const tarefasFiltradas = taskList.filter(tarefa => {
    if (taskFilter === 'pendente') return tarefa.status === 'pendente';
    if (taskFilter === 'concluída') return tarefa.status === 'concluída';
    return true;
  })

  return (
    <>
      <div className='card-tarefas'>
        <h1>Lista de tarefas</h1>

        <p className='contador'>Você tem {taskCounter} tarefa(s) pendente(s).</p>

        <div className='adicionar-tarefas'>
          <TextInput
            input={input}
            setInput={setInput}
          />

          <AddButton
            onAddTarefa={onAddTarefa}
          />
        </div>
      </div>

      <FilterBar
        taskFilter={taskFilter}
        setTaskFilter={setTaskFilter}
      />

      <TaskList
        taskList={tarefasFiltradas}
        onDeleteTarefa={onDeleteTarefa}
        onMarkTarefa={onMarkTarefa}
      />
    </>
  );
}

export default App;
