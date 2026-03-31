import { useState } from 'react'
import './App.css'

const App = () => {
  const [persons, setPersons] = useState([{ name: 'Arto Hellas', number: '040-123456' }]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  console.log('persons', persons)
  console.log('newName:', newName)
  console.log('newNumber:', newNumber)

const addPerson = (event) => {
  event.preventDefault()
  const personObject = {
    name: newName,
    number: newNumber,
    id: persons.length + 1,
  }
  
  if (persons.map(person => person.name).includes(newName)) {
    alert(`${newName} is already added to phonebook`)} 
    else {
  setPersons(persons.concat(personObject))}
  setNewName('')
  setNewNumber('')
}

  return (
    <div className='App'>
      <h1>Phonebook</h1>
      <form onSubmit={addPerson}>
        <div> Name: <input value={newName} onChange={(event) => setNewName(event.target.value)} /></div>
        <div> Numbers: <input value= {newNumber} onChange={(event) => setNewNumber(event.target.value)} /></div>        
        <div><button type="submit">Add</button></div>      
        <ul>
        {persons.map(person => (<li key={person.id}> {person.name} {person.number}</li>))}
        </ul>
      </form>
    </div>
  )
}

export default App