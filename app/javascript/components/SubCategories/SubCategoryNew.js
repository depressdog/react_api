import React from 'react'
import axios from "axios";

class SubCategoryNew  extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			name: '',
			category_id: '',
			categories: []
		}
	}
	onSubmit = () => {
		this.props.onNewCat(this.state.name, this.state.category_id);
	};
	handleChange = (e) => {
		this.setState({category_id: e.target.value});
	};
	handleInput = (e) => {
		this.setState({[e.target.name]: e.target.value})
	};
	componentDidMount() {
		axios.get('//localhost:3000/api/v1/categories')
			.then(response => {
				console.log(response);
				this.setState({
					categories: response.data
				})
			})
			.catch(error => console.log(error))
	}
	render() {
		return(
			<form className="ui form" onSubmit={this.onSubmit}>
				<div className="field">
					<select name="category_id" onChange={this.handleChange}>
						<option>Выбирете категорию</option>
						{
							this.state.categories.map(category =>{
								return(
									<option key={category.id} value={category.id}>{category.name}</option>
								)
							})
						}
					</select>
				</div>
				<div className="field">
					<input
						name="name"
						type="text"
						onChange={this.handleInput}
					/>
				</div>
				<button className="ui button green">создать</button>
			</form>
		)
	}
}

export default SubCategoryNew