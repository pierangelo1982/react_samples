import React from 'react';


const validationComponent = (props) => {

    let msg = "Text too Short!";

    if (props.textLength >= 5) {
        msg = "Text Long Enough!";
    }

    return (

        <div>
            <p>{msg}</p>
        </div>

    )

}

export default validationComponent;