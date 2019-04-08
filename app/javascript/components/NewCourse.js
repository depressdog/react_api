import React from 'react'
import axiosClient from './axiosClient'
import update from "immutability-helper";

import {Radio, List} from 'semantic-ui-react'

class NewCourse extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			username: this.props.user_username,
			phone: this.props.user_phone,
			email: this.props.user_email,
			education: this.props.user_education,
            age: this.props.user_age,
            video_url: this.props.user_video_url,
            body: this.props.user_body,
            price: '',
            image1: '',
            image2: '',
            image3: '',
            image4: '',
            image5: '',
            image6: '',
            image7: '',
            image8: '',
            image9: '',
            image10: '',
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
		axiosClient.get('categories')
			.then(response => {
				this.setState({
					categories: response.data
				})
			})
			.catch(error => console.log(error));
		axiosClient.get(`subcategories/`)
			.then(response => {
				this.setState({
					subcategories: response.data
				})
			})
			.catch(error => console.log(error));
		axiosClient.get(`subsubcategories/`)
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
		axiosClient.post( 'courses',
			{ course: {
					user_id: this.props.user_id,
					username: this.state.username,
					phone: this.state.phone,
					email: this.state.email,
					education: this.state.education,
          age: this.state.age,
          video_url: this.state.video_url,
          price: this.state.price,
          body: this.state.body,
					image1: this.state.image1,
					image2: this.state.image2,
					image3: this.state.image3,
					image4: this.state.image4,
					image5: this.state.image5,
					image6: this.state.image6,
					image7: this.state.image7,
					image8: this.state.image8,
					image9: this.state.image9,
					image10: this.state.image10,
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
					<div className="two fields">
						<div className="field">
							<label htmlFor="username">username</label>
							<input
								name="username"
								type="text"
								onChange={this.handleInput}
								placeholder={this.state.username}
							/>
						</div>
						<div className="field">
							<label htmlFor="phone">phone</label>
							<input
								name="phone"
								type="text"
								onChange={this.handleInput}
								placeholder={this.state.phone}
							/>
						</div>
						<div className="field">
							<label htmlFor="email">email</label>
							<input
								name="email"
								type="text"
								onChange={this.handleInput}
								placeholder={this.state.email}
							/>
						</div>
					</div>
					<div className="two fields">
                        <div className="field">
                            <label htmlFor="education">education</label>
                            <input
                                name="education"
                                type="text"
                                onChange={this.handleInput}
                                placeholder={this.state.education}
                            />
                        </div>
                        <div className="field">
                            <label htmlFor="age">age</label>
                            <input
                                name="age"
                                type="text"
                                onChange={this.handleInput}
                                placeholder={this.state.age}
                            />
                        </div>
                        <div className="field">
                            <label htmlFor="video_url">video_url</label>
                            <input
                                name="video_url"
                                type="text"
                                onChange={this.handleInput}
                                placeholder={this.state.video_url}
                            />
                        </div>
                        <div className="field">
                            <label htmlFor="price">price</label>
                            <input
                                name="price"
                                type="text"
                                onChange={this.handleInput}
                                placeholder={this.state.price}
                            />
                        </div>
                    </div>
                    <div className="field">
                        <label htmlFor="body">body</label>
                        <textarea
                            name="body"
                            onChange={this.handleInput}
                            placeholder={this.state.body}
                        ></textarea>
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
