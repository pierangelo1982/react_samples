import React from 'react';

const userInput = props => {

    const usernameInputStyle = {
        border: '1px solid #000000',
        backgroundColor: '#cccccc',
        height: 'auto',
        width: '600px',
        fontSize: '14pt',
        marginTop: '100px',
    };

    return (

        <input type="text"
            style={usernameInputStyle}
            className="UserInput"
            value={props.startUserName}
            onChange={props.click}/>

    );
}

export default userInput;