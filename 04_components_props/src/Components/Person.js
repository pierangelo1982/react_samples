import React from 'react'

const person = (props) => {

return (
    <div>
        <p>{ props.name } ha { props.age } anni</p>
        <p>{props.children}</p>
        <p><hr/></p>
    </div>
)

}

export default person;