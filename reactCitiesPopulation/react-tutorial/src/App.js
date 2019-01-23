import React, {Component} from 'react';
import Table from './Table';
import cities from './Cities';




class App extends Component {

    state = {
        userInput: "Enter Your City's Population",
        userRank: "Your City's Rank: "                     
    }

    

    

    popChanger = (event) => {
        let userPop = event.target.value;
        userPop = userPop.replace(/,/g, '');
        this.setState( {userInput: userPop } );
    }
              
    popClear = (event) => {
        const clearText = "";
        this.setState( {userInput: clearText } );
    }

    

    render() {

        const textBox = (
            <input 
                type='text' 
                onClick={this.popClear}
                onChange={this.popChanger}
                value={this.state.userInput}
            />
        )

        
        

        return (
       
            <div>
                {textBox}
                <p>Your City's Population is: {this.state.userInput}</p>
                <p>{this.state.userRank}</p>
                <Table characterData = {cities} />
            </div>
            
        );


    }
}

export default App;