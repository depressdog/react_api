import React from 'react'
import axios from "axios";
import update from 'immutability-helper'

import New from "./countries/New";
import Update from "./countries/Update";
import Item from "./countries/Item";

class IndexCountries extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            countries: [],
            editCatId: ''
        };

        this.addNewCat = this.addNewCat.bind(this);
        this.onCatUpdate = this.onCatUpdate.bind(this);
        this.updateCat = this.updateCat.bind(this)
    }
    componentDidMount() {
        axios.get('//localhost:3000/api/v1/countries')
            .then(response => {
                this.setState({
                    countries: response.data
                })
            })
            .catch(error => console.log(error))
    }
    addNewCat(name) {
        axios.post( '//localhost:3000/api/v1/countries', { country: {name: name} })
            .then(response => {

                const countries = update(this.state.countries, {
                    $splice: [[0, 0, response.data]]
                });
                this.setState({countries})
            })
            .catch(error => {
                console.log(error)
            })
    }
    onCatUpdate(e){
        this.setState({editCatId: e});
    }
    updateCat = (country) => {
        const countryIndex = this.state.countries.findIndex(x => x.id === country.id);

        const countries = update(this.state.countries, {
            [countryIndex]: { $set: country }
        });
        this.setState({countries: countries})
    };
    deleteCategory = (id) => {
        axios.delete(`/api/v1/countries/${id}`)
            .then(response => {
                const countryIndex = this.state.countries.findIndex(x => x.id === id);
                const countries = update(this.state.countries, { $splice: [[countryIndex, 1]]});
                this.setState({countries: countries})
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
                            <th>country name</th>
                            <th>update</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.state.countries.map( country => {
                        if(this.state.editCatId === country.id) {
                            return (<Update country={country} key={country.id} onCatUpdate={this.onCatUpdate} updateCat={this.updateCat} />
                            )
                        } else {
                            return (<Item country={country} key={country.id} onCatUpdate={this.onCatUpdate} onDelete={this.deleteCategory} />
                            )
                        }
                    })}
                    </tbody>
                </table>
            </React.Fragment>
        )
    }
}
export default IndexCountries