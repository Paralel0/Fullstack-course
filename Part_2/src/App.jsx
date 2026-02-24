import './App.css'
import Note from './components/note.jsx'

const App = (props) => {
  const {notes} = props
  console.log(notes)

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map(note => 
        <Note key={note.id} note={note} />)}
      </ul>
    </div>
  )
}

export default App  
