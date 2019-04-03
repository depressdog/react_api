import React from 'react'
import axios from 'axios'
import update from "immutability-helper";

import {Radio, List} from 'semantic-ui-react'

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
			course: [],
			user_id: this.props.user_id
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
	handleInput = (e) => {
		this.setState({[e.target.name]: e.target.value})
	};
	onSubmit = () => {
		axios.post( '//localhost:3000/api/v1/courses',
			{ course: {
					user_id: this.props.user_id,
					username: this.state.username,
					category_id: this.state.category_id,
					subcategory_id: this.state.subcategory_id,
					subsubcategory_id: this.state.subsubcategory_id
					}
				}
			)
			.then(response => {
				console.log(response);
				const course = response.data;
				this.setState({course})
			})
			.catch(error => {
				console.log(error)
			})
	};
	handleCatChange = (e, { value }) => this.setState({ category_id: value, subcategory_id: '', subsubcategory_id: '' });
	handleSubCatChange = (e, { value }) => this.setState({ subcategory_id: value, subsubcategory_id: '' });
	handleSubSubCatChange = (e, { value }) => this.setState({ subsubcategory_id: value });
	render() {

		return (
			<React.Fragment>
				<h2>Новое обьявление</h2>
				<form className="ui form" onSubmit={this.onSubmit}>
					<div className="three fields">
						<div className="field">
							<List>
								{
									this.state.categories.map(category =>{
										return(
											<List.Item key={category.id}>
												<Radio
													label={category.name}
													name='category_id'
													value={category.id}
													checked={this.state.category_id === category.id}
													onChange={this.handleCatChange}
												/>
											</List.Item>
										)
									})
								}
							</List>
						</div>
						<div className="field">
							<List>
								{
									this.state.subcategories.map(category =>{
										if(this.state.category_id != category.category_id){

										}else {
											return(
												<List.Item key={category.id}>
													<Radio
														label={category.name}
														name='subcategory_id'
														value={category.id}
														checked={this.state.subcategory_id === category.id}
														onChange={this.handleSubCatChange}
													/>
												</List.Item>
											)
										}

									})
								}
							</List>
						</div>
						<div className="field">
							<List>
								{
									this.state.subsubcategories.map(category =>{
										if(this.state.subcategory_id != category.subcategory_id){
										} else {
											return(
												<List.Item key={category.id}>
													<Radio
														label={category.name}
														name='subsubcategory_id'
														value={category.id}
														checked={this.state.subsubcategory_id === category.id}
														onChange={this.handleSubSubCatChange}
													/>
												</List.Item>
											)
										}
									})
								}
							</List>
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