import React from 'react'
import axios from 'axios'
import update from "immutability-helper";

class NewCourse extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			username: '',
			category_id: '',
			subcategory_id: '',
			subsubcategory_id: '',
			categories: [],
			subcategories: [],
			subsubcategories: [],
			course: []
		}
	}
	componentDidMount() {
		axios.get('//localhost:3000/api/v1/categories')
			.then(response => {
				this.setState({
					categories: response.data
				})
			})
			.catch(error => console.log(error));
		axios.get(`//localhost:3000/api/v1/subcategories/`)
			.then(response => {
				this.setState({
					subcategories: response.data
				})
			})
			.catch(error => console.log(error));
		axios.get(`//localhost:3000/api/v1/subsubcategories/`)
			.then(response => {
				this.setState({
					subsubcategories: response.data
				})
			})
			.catch(error => console.log(error));
	}
	catSelect = (e) => {
		this.setState({category_id: e.target.value});
	}
	subcatSelect = (e) => {
		this.setState({subcategory_id: e.target.value});
	}
	subsubcatSelect = (e) => {
		this.setState({subsubcategory_id: e.target.value});
	}
	handleInput = (e) => {
		this.setState({[e.target.name]: e.target.value})
	};
	onSubmit = () => {
		axios.post( '//localhost:3000/api/v1/courses',
			{ course: {
					username: this.state.username,
					category_id: this.state.category_id,
					subcategory_id: this.state.subcategory_id,
					subsubcategory_id: this.state.subsubcategory_id
					}
				}
			)
			.then(response => {
				console.log(response);
				const course = response.data
				this.setState({course})
			})
			.catch(error => {
				console.log(error)
			})
	};
	render() {
		return (
			<React.Fragment>
				<h2>Новое обьявление</h2>
				<form className="ui form" onSubmit={this.onSubmit}>
					<div className="three fields">
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
							<select name="subcategory_id" onChange={this.subcatSelect}>
								<option>Выбирете под категорию</option>
								{
									this.state.subcategories.map(category =>{
										if(this.state.category_id != category.category_id){

										}else {
											return (
												<option key={category.id} value={category.id}>{category.name}</option>
											)
										}
									})
								}
							</select>
						</div>
						<div className="field">
							<select name="subsubcategory_id" onChange={this.subsubcatSelect}>
								<option>Выбирете под-категорию</option>
								{
									this.state.subsubcategories.map(category =>{
										if(this.state.subcategory_id != category.subcategory_id){
										} else {
											return(
												<option key={category.id} value={category.id}>{category.name}</option>
											)
										}
									})
								}
							</select>
						</div>
					</div>
					<div className="field">
						<label htmlFor="username"></label>
						<input
							name="username"
							type="text"
							onChange={this.handleInput}
						/>
					</div>
					<button className="ui button green">
						создать
					</button>
				</form>
			</React.Fragment>
		);
	}
}
export default NewCourse