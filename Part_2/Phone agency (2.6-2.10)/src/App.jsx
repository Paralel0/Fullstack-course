import { useState } from 'react'
import './App.css'

const App = () => {
  const [persons, setPersons] = useState([{ name: 'Arto Hellas' }]) 
  const [newName, setNewName] = useState('')
  console.log('persons', persons)

const addPerson = (event) => {
  event.preventDefault()
  const personObject = {
    name: newName,
    id: persons.length + 1,
  }
  setPersons(persons.concat(personObject))
  setNewName('')
}

  return (
    <div className='App'>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={(event) => setNewName(event.target.value)} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map(person => (
          <li key={person.name}>{person.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default App