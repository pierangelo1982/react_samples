import React from 'react';

const userInput = props => {

    return (

        <input type="text"
            className="UserInput"
            value={props.startUserName}
            onChange={props.click}/>

    );
}

export default userInput;