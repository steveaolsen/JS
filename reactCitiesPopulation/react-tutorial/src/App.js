import React, {Component} from 'react';
import Table from './Table';
import cities from './Cities';
import YourCity from './YourCity';


class App extends Component {

    cityChanged = (e) => {
        return e.target.value;
    }


    render() {

    
        return (
       
            <div className = "container">
                <YourCity />
                <Table characterData = {cities} />
            </div>
        );
    }
}

export default App;