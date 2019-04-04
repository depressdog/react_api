import React from 'react'

class Item extends React.Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }
    render(){
        return(
            <tr key={this.props.country.id}>
                <td>{this.props.country.id}</td>
                <td>{this.props.country.name}</td>
                <td>
                    <button className="ui button yellow" onClick={() => { this.props.onCatUpdate(this.props.country.id)}}>
                        update
                    </button>
                </td>
                <td>
                    <button className="ui button red" onClick={() => { this.props.onDelete(this.props.country.id)}}>
                        delete
                    </button>
                </td>
            </tr>
        )
    }
}
export default Item