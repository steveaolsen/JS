import React, {Component} from 'react';
import Table from './Table';


class App extends Component {
//this is the main App that is being rendered in index.js by ReactDOM.render()
//in index.html, there is one element called root, this is targeted by getElementById
//in index.js and replaces the empty element with the React App.
    render() {

        const characters = [//a variable, an array of JSON data
            {
                'name': 'Charlie',
                'job': 'Janitor'
            },
            {
                'name': 'Mac',
                'job': 'Bouncer'
            },
            {
                'name': 'Dee',
                'job': 'Aspring actress'
            },
            {
                'name': 'Dennis',
                'job': 'Bartender'
            },
            {
                'name': 'Steve A Olsen',
                'job': 'Master React Developer'

            }
        ];

        return (
        //notice that we use className not class below, this is JS and not HTML.
        //returns the elements and props below to the Table class, now the Table
        //class (component) can use the props {characters}, we'll call it with 
        //props.characterData in the child component of the Table Class in Table.js
            <div className="container">
                <Table characterData={characters} />
            </div>
        );
    }
}

export default App;