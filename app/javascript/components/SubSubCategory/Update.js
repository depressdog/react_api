import React from 'react'
import axios from 'axios'

class Update extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			name: this.props.subsubcategory.name,
			subcategory_id: this.props.subsubcategory.subcategory_id,
			parentname: ''
		}
	}
	onSubmit = () => {
		const subsubcategory = {
			name: this.state.name,
			subcategory_id: this.state.subcategory_id
		};

		axios.put(
			('api/v1/subsubcategories/' + this.props.subsubcategory.id),
			{
				subsubcategory: subsubcategory
			}
		)
			.then(response => {
				this.props.updateCat(response.data);
			})
			.catch(error => console.log(error))
	};
	componentDidMount() {
		axios.get('api/v1/subcategories/' + this.props.subsubcategory.subcategory_id)
			.then(response => {
				this.setState({
					parentname: response.data.name
				})
			})

	}
	handleChange = (event) => {
		this.setState({subcategory_id: event.target.value});
	};
	handleInput = (e) => {
		this.setState({[e.target.name]: e.target.value})
	};
	render() {
		return (
			<tr key={this.props.subsubcategory.id}>
				<td>{this.props.subsubcategory.id}</td>
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
					<button className="ui button red" onClick={() => { this.props.onDelete(this.props.subsubcategory.id)}}>
						delete
					</button>
				</td>
			</tr>
		);
	}
}
export default Update