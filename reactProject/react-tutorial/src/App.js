import React, {Component} from 'react';
import Table from './Table';


class App extends Component {
    render() {
        return (//notice that we use className not class below, this is JS and not HTML
            <div className="small-container">
                <Table />
            </div>
        );
    }
}

export default App;