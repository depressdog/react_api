import React from 'react'
import axios from 'axios'

class Location extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            countries: [],
            cities: [],
            country_id: this.props.user.country_id,
            city_id: this.props.user.city_id
        }
    }
    componentDidMount() {
        axios.get('//masterzz.club/api/v1/countries')
            .then(response => {
                this.setState({
                    countries: response.data
                })
            })
            .catch(error => console.log(error));
        axios.get(`//masterzz.club/api/v1/cities`)
            .then(response => {
                this.setState({
                    cities: response.data
                })
            })
            .catch(error => console.log(error));
    }
    handleInput = (e) => {
        this.setState({[e.target.name]: e.target.value})
    };
    render() {
        return(
            <React.Fragment>
                {this.props.user.email}
                {this.props.user.country_id}
                {this.state.country_id}
                <input type="text" name="country_id" onChange={this.handleInput} placeholder={this.state.country_id}/>
                <input type="text" name="city_id" onChange={this.handleInput} placeholder={this.state.city_id}/>
            </React.Fragment>
        )
    }
}
export default Location
