import React, {Component} from 'react';

function TableHeader() { 
//non arrow version just for fun
    return (
        <thead>
            <tr>
                <th>City #</th>
                <th>City</th>
                <th>Country</th>
                <th>Population</th>
                <th>Type</th>
                <th>KM^2</th>
                <th>Density/KM</th>
            </tr>
        </thead>
    );
}

const TableBody = props => { 
//arrow version just for fun
//remember in arrow functions parens around the parameters, "props",
// are not required if only one parameter
    const rows = props.characterData.map((row, index) => {
    //create a variable caled rows, props is never defined but ia a part of React
    //which gets the props (properties) of characterData (which got the JSON data from
    //the characters array in App.js).
    //.map takes in parameters of the JSON data, each row and an index number,
    //we will use the index as our key below...
        return (
        //creates a table row element for each key, index being the number in the array from
        //the above .map((row, index)... 
        //for example, key = index 0, import that row.name, then the row.job, then on to index 1.
        //this will iterate over the whole data set no matter how many are in it.
            <tr key={index}>
                <td>{row.CityRank}</td>
                <td>{row.CityName}</td>
                <td>{row.Country}</td>
                <td>{row.Population}</td>
                <td>{row.CityType}</td>
                <td>{row.CityKM}</td>
                <td>{row.DensityKM}</td>
                            
            </tr>
        );
    });

    return <tbody>{rows}</tbody>;//returns the rows to the Table component below
}

class Table extends Component {
    render() {
        const { characterData } = this.props;
        return (
            <table>
                <TableHeader />
                <TableBody characterData={characterData} />
            </table>
        );
    }
}

export default Table;