import React, {Component} from 'react';

const TableHeader = () => { 
    return (
        <thead>
            <tr>
                <th>#</th>
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

const TableBody = (props) => { 
    const rows = props.characterData.map((row, index) => {
    
        return (
        
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

    return <tbody>{rows}</tbody>;
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