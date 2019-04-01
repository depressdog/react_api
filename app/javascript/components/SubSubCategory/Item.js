import React from 'react'
import axios from 'axios'

class Item extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			parentname: ''
		}
	}
	componentDidMount() {
		axios.get('api/v1/subcategories/' + this.props.subsubcategory.subcategory_id)
			.then(response => {
				this.setState({
					parentname: response.data.name
				})
			})

	}
	render(){
		return(
			<tr key={this.props.subsubcategory.id}>
				<td>{this.props.subsubcategory.id}</td>
				<td>{this.state.parentname}</td>
				<td>{this.props.subsubcategory.name}</td>
				<td>
					<button className="ui button yellow" onClick={() => { this.props.onCatUpdate(this.props.subsubcategory.id)}}>
						update
					</button>
				</td>
				<td>
					<button className="ui button red" onClick={() => { this.props.onDelete(this.props.subsubcategory.id)}}>
						delete
					</button>
				</td>
			</tr>
		)
	}
}

export default Item