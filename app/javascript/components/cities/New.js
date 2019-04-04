import React from 'react'
import axios from "axios";

class SubCategoryNew  extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            country_id: '',
            countries: []
        }
    }
    onSubmit = () => {
        this.props.onNewCat(this.state.name, this.state.countre_id);
    };
    handleChange = (e) => {
        this.setState({countre_id: e.target.value});
    };
    handleInput = (e) => {
        this.setState({[e.target.name]: e.target.value})
    };
    componentDidMount() {
        axios.get('//localhost:3000/api/v1/countries')
            .then(response => {
                console.log(response);
                this.setState({
                    countries: response.data
                })
            })
            .catch(error => console.log(error))
    }
    render() {
        return(
            <form className="ui form" onSubmit={this.onSubmit}>
                <div className="field">
                    <select name="country_id" onChange={this.handleChange}>
                        <option>Выбирете категорию</option>
                        {
                            this.state.countries.map(country =>{
                                return(
                                    <option key={country.id} value={country.id}>{country.name}</option>
                                )
                            })
                        }
                    </select>
                </div>
                <div className="field">
                    <input
                        name="name"
                        type="text"
                        onChange={this.handleInput}
                    />
                </div>
                <button className="ui button green">создать</button>
            </form>
        )
    }
}

export default SubCategoryNew