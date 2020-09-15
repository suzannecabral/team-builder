import React, { useState } from 'react';
import './App.css';
import Form from './Form'
import { tempTeam } from './constants'


function App() {
  const [teamMembers,setTeamMembers] = useState([tempTeam])
  console.log('teamMembers Initial State: ',teamMembers)
  return (
    <div className="App">
      <header>
      {/* <header className="App-header"> */}
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h1>The Team:</h1>
      </header>
      <div>
        {
          teamMembers[0].map((mem,idx) => {
          return <p key={idx}>{mem.name}, {mem.age}, {mem.role}</p>
          })
        }
      </div>
      <Form />
    </div>
  );
}

export default App;
