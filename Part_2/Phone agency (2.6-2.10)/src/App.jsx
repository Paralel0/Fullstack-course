import { useState } from 'react'
import './App.css'
import Filter from './Components/Filter'
import Personsform from './Components/Personsform'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }])
  const [filterName, setFilterName] = useState('')
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

const filterByName = persons.filter(person => person.name.toLowerCase().includes(filterName.toLowerCase()))

  return (
    <div className='App'>
      <h1>Phonebook</h1>
      <div>Filter by name: <Filter filterName={filterName} setFilterName={setFilterName} /></div>
      <h2>Add a new person:</h2>
      <Personsform 
        addPerson={addPerson} 
        newName={newName} 
        handleNameChange={(event) => setNewName(event.target.value)} 
        newNumber={newNumber} 
        handleNumberChange={(event) => setNewNumber(event.target.value)} />        
      <h2>Numbers</h2> 
        <ul>
        {filterByName.map(person => (<li key={person.id}> {person.name} {person.number}
        </li>))}</ul>
    </div>
  )
}

export default App