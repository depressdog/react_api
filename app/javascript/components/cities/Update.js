import React from 'react'
import axios from 'axios'

class Update extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: this.props.city.name,
            country_id: this.props.city.country_id,
            parentname: ''
        }
    }
    onSubmit = () => {
        const city = {
            name: this.state.name,
            country_id: this.state.country_id
        };

        axios.put(
            ('//localhost:3000/api/v1/cities/' + this.props.city.id),
            {
                city: city
            }
        )
            .then(response => {
                this.props.updateCat(response.data);
            })
            .catch(error => console.log(error))
    };
    componentDidMount() {
        axios.get('//localhost:3000/api/v1/countries/' + this.props.city.country_id)
            .then(response => {
                this.setState({
                    parentname: response.data.name
                })
            })

    }
    handleChange = (event) => {
        this.setState({country_id: event.target.value});
    };
    handleInput = (e) => {
        this.setState({[e.target.name]: e.target.value})
    };
    render() {
        return(

            <tr key={this.props.city.id}>
                <td>{this.props.city.id}</td>
                <td>
                    {this.state.parentname}
                </td>
                <td>
                    <form className="ui form" onBlur={this.onSubmit}>
                        <div className="ui field">
                            <input
                                name="name"
                                type="text"
                                value={this.state.name}
                                onChange={this.handleInput}
                            />
                        </div>
                    </form>
                </td>
                <td>
                    <button className="ui button yellow" onClick={() => { this.props.onCatUpdate('')}}>
                        update
                    </button>
                </td>
                <td>
                    <button className="ui button red" onClick={() => { this.props.onDelete(this.props.city.id)}}>
                        delete
                    </button>
                </td>
            </tr>
        )
    }
}
export default Update