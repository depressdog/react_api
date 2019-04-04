import React from 'react'
import axios from 'axios'


class Update extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            name: this.props.country.name
        }
    }
    onSubmit = () => {
        const country = {
            name: this.state.name
        };

        axios.put(
            ('//masterzz.club/api/v1/countries/' + this.props.country.id),
            {
                country: country
            }
        )
            .then(response => {
                this.props.updateCat(response.data);
            })
            .catch(error => console.log(error))
    };
    handleInput = (e) => {
        this.setState({[e.target.name]: e.target.value})
    };
    render() {
        return(

            <tr key={this.props.country.id}>
                <td>{this.props.country.id}</td>
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
                    <button onClick={() => { this.props.onCatUpdate('')}}>
                        cansel
                    </button>
                </td>
            </tr>
        )
    }
}

export default Update