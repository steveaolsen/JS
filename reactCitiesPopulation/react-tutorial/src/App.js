import React, {Component} from 'react';
import Table from './Table';
import cities from './Cities';




class App extends Component {

    state = {
        userInput: "Enter Your City's Population",
        userRank: "This Will Display A Rank Once You Input A Number",
        popArray: [] //figure out a way to make an array of just the 
                        //population from the city file
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

    popRanker = () => {
        //figure out how to rank the population against the data in Cities
    }

    render() {

        
        

        return (
       
            <div>
                <input 
                    type='text' 
                    onClick={this.popClear}
                    onChange={this.popChanger}
                    value={this.state.userInput}
                    />
                <p>Your City's Population is: {this.state.userInput}</p>
                <p>{this.state.userRank}</p>
                <Table characterData = {cities} />
            </div>
        );


    }
}

export default App;