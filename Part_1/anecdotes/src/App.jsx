import { useState } from "react";
import "./App.css";

const TotalVotes = (votes) => {
    return (
        <div>
            <p>{votes.selected} Has {votes.votes} votes</p>
        </div>
    )
}

const getMostVoted = (votes) => Object.keys(votes).reduce((a, b) => votes[a] > votes[b] ? a : b)

const MostVoted = ({anecdotes, votes}) => {
    const mostVotedIndex = getMostVoted(votes)
    return (
        <div>
            <p>{anecdotes[mostVotedIndex]}</p>
            <p>Has {votes[mostVotedIndex]} votes</p>
        </div>
    )
}

const App = () => {
    const anecdotes = [
        'If it hurts, do it more often.',
        'Adding manpower to a late software project makes it later!',
        'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
        'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
        'Premature optimization is the root of all evil.',
        'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
    ]

    const [selected, setSelected] = useState(0)
    const [votes, setVotes] = useState({0:0,1:0,2:0,3:0,4:0,5:0})
    const mostvoted = getMostVoted(votes)
    const copyVotes = {...votes}

    return (
        <div className="App">
            <div className="Header1">Anecdote of the day</div>
            <p>{anecdotes[selected]}</p>

            <button onClick={() => setSelected (Math.floor(Math.random()*anecdotes.length))}>Next anecdote</button>
            <button onClick={() => {
                copyVotes[selected] += 1
                setVotes(copyVotes)
                console.log(votes)               
            }}>Vote</button>

            <div className="TotalVotes">Has a total votes of:</div>
            <TotalVotes votes={copyVotes[selected]} />

            <div className="Header1">Anecdote with most votes</div>     
            <MostVoted anecdotes={anecdotes} votes={votes} MostVoted={mostvoted}/>   
            </div>
    )
}

export default App