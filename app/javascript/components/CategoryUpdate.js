import React from 'react'
import axiosClient from './axiosClient'


class CategoryUpdate extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			name: this.props.category.name
		}
	}
	onSubmit = () => {
		const category = {
			name: this.state.name
		};

		axiosClient.put(
			(`categories/${this.props.category.id}`),
				{
					category: category
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

				<tr key={this.props.category.id}>
					<td>{this.props.category.id}</td>
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
						<button className="ui button green" onClick={() => { this.props.onCatUpdate('')}}>
							Save
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

export default CategoryUpdate