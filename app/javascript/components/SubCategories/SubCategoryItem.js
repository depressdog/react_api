import React from 'react'
import axiosClient from '../axiosClient'

class SubCategoryItem extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			parentname: ''
		}
	}
	componentDidMount() {
		axiosClient.get(`categories/${this.props.subcategory.category_id}`)
			.then(response => {
				this.setState({
					parentname: response.data.name
				})
			})

	}

	render() {
		return(
			<tr key={this.props.subcategory.id}>
				<td>{this.props.subcategory.id}</td>
				<td>{this.state.parentname}</td>
				<td>{this.props.subcategory.name}</td>
				<td>
					<button className="ui button yellow" onClick={() => { this.props.onCatUpdate(this.props.subcategory.id)}}>
						update
					</button>
				</td>
				<td>
					<button className="ui button red" onClick={() => { this.props.onDelete(this.props.subcategory.id)}}>
						delete
					</button>
				</td>
			</tr>
		)
	}
}
export default SubCategoryItem
