import React from 'react'
import axios from 'axios'
class Item extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            parentname: ''
        }
    }
    componentDidMount() {
        axios.get('//localhost:3000/api/v1/countries/' + this.props.city.country_id)
            .then(response => {
                this.setState({
                    parentname: response.data.name
                })
            })

    }

    render() {
        return(
            <tr key={this.props.city.id}>
                <td>{this.props.city.id}</td>
                <td>{this.state.parentname}</td>
                <td>{this.props.city.name}</td>
                <td>
                    <button className="ui button yellow" onClick={() => { this.props.onCatUpdate(this.props.city.id)}}>
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
export default Item
