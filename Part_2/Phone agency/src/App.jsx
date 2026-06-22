import { useState, useEffect } from 'react'
import './App.css'
import Filter from './Components/Filter'
import Person from './Components/Person'
import PersonList from './Components/PersonList'
import axios from 'axios'
import personService from './services/PersonsData'

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
  console.log('render', persons.length, 'persons') // debug

  useEffect(() => {   //obtaining from the server using axios
    console.log('effect')
    personService.getAll()
      .then(initialPersons => {
        console.log('promise fulfilled')
        setPersons(initialPersons)
      })
  }, [])

const addPerson = (event) => {  //event handler for adding a new person to the phonebook
  event.preventDefault()
  
  if (persons.some(person => person.name === newName)) { //checking if the name already exists in the phonebook
    if (window.confirm(`${newName} is already added to phonebook, do you wish to update the number?`)) {
      const person = persons.find(p => p.name === newName)
      const updatedPerson = { ...person, number: newNumber }
      personService.update(person.id, updatedPerson)
        .then(returnedPerson => {
          console.log('person updated on server', returnedPerson)
          setPersons(persons.map(p => p.id === person.id ? returnedPerson : p))
          setNewName('')
          setNewNumber('')
        })
    }
    return
  }

  const personObject = {
    name: newName, number: newNumber, }
  
    personService.create(personObject)
    .then(returnedPerson => {
      console.log('person added to server', returnedPerson)
      setPersons(persons.concat(returnedPerson))   //updating the persons state with the new person added to the server
      setNewName('')
      setNewNumber('')
    })
}

const deletePerson = (id) => {  //event handler for deleting a person from the phonebook
  const person = persons.find(p => p.id === id)
  if (window.confirm(`Confirm delete ${person.name}?`)) {
    personService.remove(id)
      .then(() => {
        console.log('person deleted from server')
        setPersons(persons.filter(p => p.id !== id))  //updating the persons state by removing the deleted person
      })
  }
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
        handleNumberChange={(event) => setNewNumber(event.target.value)}/>            
      <h2>Full list</h2> 
      <PersonList persons={filterByName}
      deletePerson={deletePerson} />
    </div>
  )
}

export default App