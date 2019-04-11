import React from 'react'
import axiosClient from './axiosClient'

class Location extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            countries: [],
            cities: [],
            country_id: this.props.country_id,
            city_id: this.props.city_id
        }
        this.handleCountry = this.handleCountry.bind(this);
        this.handleCity = this.handleCity.bind(this);
    }
    componentDidMount() {
        axiosClient.get('countries')
            .then(response => {
                this.setState({
                    countries: response.data
                })
            })
            .catch(error => console.log(error));
        axiosClient.get(`cities`)
            .then(response => {
                this.setState({
                    cities: response.data
                })
            })
            .catch(error => console.log(error));
    }

    handleCountry = (e) => this.setState({country_id: e.target.value, city_id: ''});
    handleCity = (e) => this.setState({city_id: e.target.value});
    render() {
        const countries = this.state.countries.map((country) => {
          return <option key={country.id} value={country.id} selected={this.state.country_id === country.id } >{country.name}</option>;
        })
        const cities = this.state.cities.map((city) => {
          if(this.state.country_id != city.country_id){
          }else {
            return <option key={city.id} value={city.id} selected={this.state.city_id === city.id } >{city.name}</option>;
          }

        })
        return(
            <React.Fragment>
              <div className="two fields">
                <div className="field">
                  <label>страна:</label>
                  <select onChange={this.handleCountry}  name="user[country_id]" id="user_country_id">
                    <option value="">Выбор страны</option>
                    {countries}
                  </select>
                </div>
                <div className="field">
                  <label>город:</label>
                    <select onChange={this.handleCity}  name="user[city_id]" id="user_city_id">
                      <option value="">Выбор страны</option>
                      {cities}
                    </select>
                </div>
              </div>
            </React.Fragment>
        )
    }
}
export default Location
