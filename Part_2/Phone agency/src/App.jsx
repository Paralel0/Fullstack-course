import { useState, useEffect } from 'react'
import './App.css'
import Filter from './Components/Filter'
import Person from './Components/Person'
import PersonList from './Components/PersonList'
import axios from 'axios'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }])
  const [filterName, setFilterName] = useState('')
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [notes, setNotes] = useState([])
  console.log('persons', persons)
  console.log('newName:', newName)    //debugging
  console.log('newNumber:', newNumber)
  console.log('notes', notes)

  useEffect(() => {   //obtaining from the server using axios
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setNotes(response.data)
      })
  }, [])
  
  useEffect(() => { 
    console.log('notes changed', notes.length)   //debugging
  }, [notes])

const addPerson = (event) => {  //event handler for adding a new person to the phonebook
  event.preventDefault()
  const personObject = {
    name: newName,
    number: newNumber,
    id: persons.length + 1,
  }

axios
  .post('http://localhost:3001/persons', personObject)   //posting the new person to the server.
    .then(response => {
      console.log('person added to server', response)
      setPersons(persons.concat(response.data))   //updating the persons state with the new person added to the server
    }
  )

  if (persons.map(person => person.name).includes(newName)) {   //check if the name already exists in the phonebook, low and high case are ignored
    alert(`${newName} is already added to phonebook`)} 
    else {
  setPersons(persons.concat(personObject))}
  setNewName('')
  setNewNumber('')
}

const filterByName = persons.filter(person => person.name.toLowerCase().includes(filterName.toLowerCase()))   //filter the list of persons based on the filterName state

  return (  //components rendered and necessary props
    <div className='App'>
      <h1>Phonebook</h1>
      <div>Filter by: <Filter filterName={filterName} setFilterName={setFilterName} /></div>
      <h2>Add a new person:</h2>
      <Person
        addPerson={addPerson} 
        newName={newName} 
        handleNameChange={(event) => setNewName(event.target.value)} 
        newNumber={newNumber} 
        handleNumberChange={(event) => setNewNumber(event.target.value)} />        
      <h2>Full list</h2> 
      <PersonList persons={filterByName} />
    </div>
  )
}

export default App