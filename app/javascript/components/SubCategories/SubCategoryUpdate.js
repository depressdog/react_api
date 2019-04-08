import React from 'react'
import axiosClient from '../axiosClient'

class SubCategoryUpdate extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			name: this.props.subcategory.name,
			category_id: this.props.subcategory.category_id,
			parentname: ''
		}
	}
	onSubmit = () => {
		const subcategory = {
			name: this.state.name,
			category_id: this.state.category_id
		};

		axiosClient.put(
			(`subcategories/${this.props.subcategory.id}`),
			{
				subcategory: subcategory
			}
		)
			.then(response => {
				this.props.updateCat(response.data);
			})
			.catch(error => console.log(error))
	};
	componentDidMount() {
		axiosClient.get(`categories/${this.props.subcategory.category_id}`)
			.then(response => {
				this.setState({
					parentname: response.data.name
				})
			})

	}
	handleChange = (event) => {
		this.setState({category_id: event.target.value});
	};
	handleInput = (e) => {
		this.setState({[e.target.name]: e.target.value})
	};
	render() {
		return(

			<tr key={this.props.subcategory.id}>
				<td>{this.props.subcategory.id}</td>
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
					<button className="ui button green" onClick={() => { this.props.onCatUpdate('')}}>
						save
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
export default SubCategoryUpdate