import React from 'react'
import axios from 'axios'

class New extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			name: '',
			category_id: '',
			subcategory_id: '',
			categories: [],
			subcategories: []
		}
	}
	onSubmit = () => {
		this.props.onNewCat(this.state.name, this.state.subcategory_id);
	};
	handleChange = (e) => {
		this.setState({subcategory_id: e.target.value});
	};

	handleInput = (e) => {
		this.setState({[e.target.name]: e.target.value})
	};
	componentDidMount() {
		axios.get('//masterzz.club/api/v1/categories')
			.then(response => {
				this.setState({
					categories: response.data
				})
			})
			.catch(error => console.log(error));
		axios.get(`//masterzz.club/api/v1/subcategories/`)
			.then(response => {
				this.setState({
					subcategories: response.data
				})
			})
			.catch(error => console.log(error));
	}
	catSelect = (e) => {
		this.setState({category_id: e.target.value});
	}
	render(){
		return(
			<form className="ui form" onSubmit={this.onSubmit}>
				<div className="field">
					<select name="category_id" onChange={this.catSelect}>
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
					<select name="subcategory_id" onChange={this.handleChange}>
						<option>Выбирете под категорию</option>
						{
							this.state.subcategories.map(subcategory =>{
								if(this.state.category_id != subcategory.category_id) {
								} else {
									return(
										<option key={subcategory.id} value={subcategory.id}>{subcategory.name}</option>
									)
								}
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
export default New