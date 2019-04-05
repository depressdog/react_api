import React from 'react'
import axios from "axios";
import update from "immutability-helper";

import New from './cities/New'
import Item from './cities/Item'
import Update from './cities/Update'

class IndexCities extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            cities: [],
            editSubCatId: ''
        };
        this.addNewCat = this.addNewCat.bind(this);
        this.onCatUpdate = this.onCatUpdate.bind(this);
        this.updateCat = this.updateCat.bind(this)
    }

    componentDidMount() {
        axios.get('//masterzz.club/api/v1/cities')
            .then(response => {
                console.log(response);
                this.setState({
                    cities: response.data
                })
            })
            .catch(error => console.log(error))
    }

    addNewCat(name, country_id) {
        axios.post( '//masterzz.club/api/v1/cities', { city: {name: name, country_id: country_id} })
            .then(response => {
                console.log(response);
                const cities = update(this.state.cities, {
                    $splice: [[0, 0, response.data]]
                });
                this.setState({cities})
            })
            .catch(error => {
                console.log(error)
            })
    }

    onCatUpdate(e){
        this.setState({editSubCatId: e});
        console.log(this.state.editSubCatId)
    }
    updateCat = (city) => {
        const citiyIndex = this.state.cities.findIndex(x => x.id === city.id);

        const cities = update(this.state.cities, {
            [citiyIndex]: { $set: city }
        });
        this.setState({cities: cities})
    };

    deleteCategory = (id) => {
        axios.delete(`//masterzz.club/api/v1/cities/${id}`)
            .then(response => {
                const cityIndex = this.state.cities.findIndex(x => x.id === id);
                const cities = update(this.state.cities, { $splice: [[cityIndex, 1]]});
                this.setState({cities: cities})
            })
            .catch(error => console.log(error))
    }
    render() {
        return(
            <React.Fragment>
                <New onNewCat={this.addNewCat}/>
                <table className="ui celled table">
                    <thead>
                    <tr>
                        <th>id</th>
                        <th>parrent</th>
                        <th>name</th>
                        <th>update</th>
                        <th>delete</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.cities.map( city => {
                            if(this.state.editSubCatId === city.id) {
                                return (
                                    <Update city={city} key={city.id} onCatUpdate={this.onCatUpdate} updateCat={this.updateCat} onDelete={this.deleteCategory} />
                                )
                            } else {
                                return (
                                    <Item city={city} key={city.id} onCatUpdate={this.onCatUpdate} onDelete={this.deleteCategory} />
                                )
                            }
                        })
                    }
                    </tbody>
                </table>
            </React.Fragment>
        )
    }
}

export default IndexCities