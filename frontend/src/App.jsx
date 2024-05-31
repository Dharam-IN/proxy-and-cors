import { useEffect, useState } from 'react'
import './App.css';
import axios from 'axios';

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios.get("/api/jokes").then((response) => setJokes(response.data)).catch((error) => console.log(error))
  })

  return (
    <>
      <h1>Dharam aur FullStack</h1>
      <h4>JOKES:- {jokes.length}</h4>

      {
        jokes.map((joke, index) => {
          return(
            <div key={joke.id} style={{textAlign: "start"}}>
              <ul>
                <li>
                  <b>{joke.title}</b>
                  <p>{joke.description}</p>
                </li>
                <hr />
              </ul>
            </div>
          )
        })
      }

    </>
  )
}

export default App
