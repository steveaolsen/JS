import React from 'react';//this needs to happen on every component we create

const userInput = (props) => {
    const style = {
        color: 'white',
        background: 'grey',
        border: '1px solid black',
        width: '40%',
        margin: 'auto',
        padding: '10px'
    
    };

    return (
        <div className='UserInput' style={style}>
            <label for='inputBox'>First Name on List: </label>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    )
};

export default userInput;