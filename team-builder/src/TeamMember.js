import React from 'react'

export default function TeamMember(props) {
    const { member, key } = props
    return(
        <div key={key}>
            <h2>{member.name}</h2>
            <p>{member.role}, {member.bending && `${member.bending}, `} {member.age}</p>
        </div>

    )
}