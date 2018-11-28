import React from 'react';//this needs to happen on every component we create

const userOutput = (props) => {
    
    return (
        <div>
            <div className='UserOutput'>
                <h1 onClick={props.click}>Name: {props.name} - Age: {props.age} - Job: {props.job}</h1>
            </div>
        </div>
    );
};

export default userOutput;