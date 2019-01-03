import React, {Component} from 'react';
import Table from './Table';
import cities from './Cities';




class App extends Component {

    state = {
        userInput: "Enter Your City's Population",
        userRank: "This Will Display A Rank Once You Input A Number",
        popArray: []
                        
    }

   /* getPopFromCities = (cityData) => {
        if (this.state.popArray.length < 1) {
            let i = 0;
            let citiesCopy = cityData;
            let popOnly = [];
            for (i = 0; i < citiesCopy.length; i++) {
                popOnly.push(citiesCopy[i].population);
            }
            this.setState( {popArray: popOnly} )
        }
    }   */


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

        const textBox = (
            <input 
                type='text' 
                onClick={this.popClear}
                onChange={this.popChanger}
                value={this.state.userInput}
            />
        )
        
        //this.getPopFromCities(cities);

        return (
       
            <div>
                {textBox}
                <p>Your City's Population is: {this.state.userInput}</p>
                <p>{this.state.userRank}</p>
                <Table characterData = {cities} />
                {console.log(this.popArray)}
            </div>
            
        );


    }
}

export default App;