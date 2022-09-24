import { useState } from "react";

const Button = (props) => {
  return <button onClick={props.onClick}>{props.text}</button>;
};

const Anecdote = (props) => {
  return (
    <div>
      <p>{props.anecdote}</p>
      <p>Has {props.votes} votes</p>
    </div>
  );
};

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients",
  ];

  const [selected, setSelected] = useState(0);
  const [vote, setVote] = useState(Array(anecdotes.length).fill(0));

  const handleVote = () => {
    const voteArray = [...vote];
    voteArray[selected] += 1;
    setVote(voteArray);
  };

  const getMostVoted = () => {
    const maxNumber = Math.max(...vote);
    const mostVoted = vote.indexOf(maxNumber);
    return mostVoted;
  };

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <Anecdote anecdote={anecdotes[selected]} votes={vote[selected]} />
      <Button
        onClick={() =>
          setSelected(Math.floor(Math.random() * anecdotes.length))
        }
        text="Next Anecdote"
      />
      <Button onClick={handleVote} text="Vote" />
      <h1>Anecdote with most votes</h1>
      <Anecdote
        anecdote={anecdotes[getMostVoted()]}
        votes={vote[getMostVoted()]}
      />
    </div>
  );
};

export default App;
