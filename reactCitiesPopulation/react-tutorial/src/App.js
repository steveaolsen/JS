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
        if (/^\d*$/.test(userPop)) {
            this.setState( {userInput: userPop } );
        }
    }
              
    popClear = (event) => {
        this.setState( {userInput: '' } );
    }

    /*popRanker = (array, number) => {
        let rank = 0;

        for (let i=0; i<array.length; i++) {
            if (array[i] > number) {
                rank++;
                
            }
        }
        this.setState({userRank: rank});
    }*/

    

    render() {

        const textBox = (
            <input 
                type='text' 
                onClick={this.popClear}
                onChange={this.popChanger}
                value={this.state.userInput}
            />
        )

        let cityPopulations = [];

        for (let i=0; i<cities.length; i++) {
            cityPopulations.push(cities[i].Population);
        }

            
        
        
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