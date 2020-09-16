import React, { useState } from 'react'
import { tempTeam2 } from './constants'
// import { render } from 'react-dom'

export default function TeamForm(props) {

    // console.log(props)
    const { teamMembers, setTeamMembers } = props


    const [formValues, setFormValues] = useState({ 
        name:'',
        age:0,
        role:'',
        bending:'',
     });

    const change = evt => {    
        //send to formvalues state
        const { name, value } = evt.target

        // const newTeamMember = {}
        setFormValues({ ...formValues, [name]:value  })
        // console.log(evt.target.name)
        // console.log(evt.target.value)
    }
    const submit = evt => {
        evt.preventDefault()
        //send to teamMembers state
        setTeamMembers(teamMembers.concat(formValues))

    }
    return(
        <div>
            <h2>Add:</h2>
            <form onSubmit={submit}>
                <label>Name:</label>
                <input name='name' type='text' onChange={change} />
                {/* value reads a default value to display */}
                <label>Age:</label>
                <input name='age' type='text' onChange={change} />
                <label>Role:</label>
                <input name='role' type='text' onChange={change} />
                <label>Elements:</label>
                <input name='bending' type='text' onChange={change} />     
            <button type='submit'>Submit</button>
            </form>
        </div>
    )
}