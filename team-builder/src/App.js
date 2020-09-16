import React, { useState } from 'react';
import './App.css';
import TeamForm from './TeamForm'
import { tempTeam } from './constants'
import TeamMember from './TeamMember';


function App() {
  const [teamMembers,setTeamMembers] = useState(tempTeam)

  // console.log('teaMembers Initial State: ',teamMembers)
  return (
    <div className="App">
      <header>
      {/* <header className="App-header"> */}
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h1>The Team:</h1>
      </header>
      <div>
        {
          teamMembers.map((mem,idx) => {
          return <TeamMember member={mem} key={idx}/>
          })
        }
      </div>
      <TeamForm 
      teamMembers={teamMembers}
      setTeamMembers={setTeamMembers}
      />
    </div>
  );
}

export default App;
