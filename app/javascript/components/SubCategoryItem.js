import React from 'react'

class SubCategoryItem extends React.Component {
	constructor(props){
		super(props);
		this.state = {
		}
	}
	render() {
		return(
			<tr key={this.props.subcategory.id}>
				<td>{this.props.subcategory.id}</td>
				<td>{this.props.subcategory.category_id}</td>
				<td>{this.props.subcategory.name}</td>
				<td>
					<button className="ui button yellow">
						update
					</button>
				</td>
				<td>
					<button className="ui button red">
						delete
					</button>
				</td>
			</tr>
		)
	}
}
export default SubCategoryItem
