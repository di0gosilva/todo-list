export default function TextInput({ input, setInput}) {
  return (
    <input
      required={true}
      className='input-tarefa'
      type='text'
      placeholder='Estudar...'
      value={input}
      onChange={(e) => setInput(e.target.value)}
    />
  )
}
