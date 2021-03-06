import React from 'react'

class CategoryItem extends React.Component {
	constructor(props){
		super(props);
		this.state = {
		}
	}
	render(){
		return(
			<tr key={this.props.category.id}>
				<td>{this.props.category.id}</td>
				<td>{this.props.category.name}</td>
				<td>
					<button className="ui button yellow" onClick={() => { this.props.onCatUpdate(this.props.category.id)}}>
						update
					</button>
				</td>
				<td>
					<button className="ui button red" onClick={() => { this.props.onDelete(this.props.category.id)}}>
						delete
					</button>
				</td>
			</tr>
		)
	}
}
export default CategoryItem