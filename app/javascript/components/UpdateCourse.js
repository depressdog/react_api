import React from 'react'
import axiosClient from './axiosClient'


import {Radio, List} from 'semantic-ui-react'
import UserAvatar from './UserAvatar'

class UpdateCourse extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			course_id: this.props.course_id,
			user_id: this.props.user_id,
			course: [],
			category_id: '',
			subcategory_id: '',
			subsubcategory_id: '',
			categories: [],
			subcategories: [],
			subsubcategories: [],
			img1: ''
		}
	}
	componentDidMount() {
		axiosClient.get(`courses/${this.state.course_id}`)
			.then(response => {
				this.setState({
					course: response.data,
					category_id: response.data.category_id,
					subcategory_id: response.data.subcategory_id,
					subsubcategory_id: response.data.subsubcategory_id
				})
			})
			.catch(error => console.log(error));
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
	onSubmit = () => {
		axiosClient.put(
			(`courses/${this.props.course_id}`),
			{
				body: this.state.body,
				video_url: this.state.video_url,
				username: this.state.username,
				phone: this.state.phone,
				email: this.state.email,
				education: this.state.education,
				age: this.state.age,
				price: this.state.price,
				img1: this.state.img1,
				category_id: this.state.category_id,
				subcategory_id: this.state.subcategory_id,
				subsubcategory_id: this.state.subsubcategory_id
			})
			.then(response => {
				const course = response.data;
				this.setState({course})
			})
			.catch(error => {
				console.log(error)
			})


	};
	handleInput = (e) => {
		this.setState({[e.target.name]: e.target.value})
	};
	handleCatChange = (e, { value }) => this.setState({ category_id: value, subcategory_id: '', subsubcategory_id: '' });
	handleSubCatChange = (e, { value }) => this.setState({ subcategory_id: value, subsubcategory_id: '' });
	handleSubSubCatChange = (e, { value }) => this.setState({ subsubcategory_id: value });
	getBase64 = (callback) => {
		const fileReader = new FileReader();
		fileReader.readAsDataURL(callback);
		fileReader.onload = () => {
			this.setState({img1: fileReader.result})
      console.log(fileReader.result);
    };
    fileReader.onerror = (error) => {
      console.log('Error :', error);
    };
	}
	handleFileUpload = e => {
	    this.getBase64(e.target.files[0])
			console.log("this", this.getBase64(e.target.files[0]))
			console.log("img1 = ", this.state.img1)
	  };
	render() {
		return(
			<React.Fragment>
				<form className="ui form" multipart="true" onSubmit={this.onSubmit}>
					<div className="ui grid">
						<div className="sixteen wide column">
							<img url={this.state.course.img1} />
							<input type="file" onChange={this.handleFileUpload} />
						</div>
						<div className="five wide column">
							<div className="ui medium circular image">
								<UserAvatar id={this.state.user_id} />
							</div>
						</div>
						<div className="seven wide column">
							<div className="item">
								<button className="ui button green">редактировать</button>
								<a className="ui button red" rel="nofollow" data-method="delete" href={`/courses/${this.state.course_id}`}>удалить</a>
							</div>
							<div className="item">
								предмет обучения:
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
							</div>
							<div className="item">
								Ник:
								<div className="field">
									<label htmlFor="username">username</label>
									<input
										name="username"
										type="text"
										onChange={this.handleInput}
										placeholder={this.state.course.username}
									/>
								</div>
							</div>
							<div className="item">
								Номер телефона:
								<div className="field">
									<label htmlFor="phone">phone</label>
									<input
										name="phone"
										type="text"
										onChange={this.handleInput}
										placeholder={this.state.course.phone}
									/>
								</div>
							</div>
							<div className="item">
								Имейл:
								<div className="field">
									<label htmlFor="email">email</label>
									<input
										name="email"
										type="text"
										onChange={this.handleInput}
										placeholder={this.state.course.email}
									/>
								</div>
							</div>
							<div className="item">
								цена:
								<div className="field">
									<label htmlFor="price">price</label>
									<input
										name="price"
										type="text"
										onChange={this.handleInput}
										placeholder={this.state.course.price}
									/>
								</div>
							</div>
							<div className="item">
								образование:
								<div className="field">
									<label htmlFor="education">education</label>
									<input
										name="education"
										type="text"
										onChange={this.handleInput}
										placeholder={this.state.course.education}
									/>
								</div>
							</div>
							<div className="item">
								возраст:
								<div className="field">
									<label htmlFor="age">age</label>
									<input
										name="age"
										type="text"
										onChange={this.handleInput}
										placeholder={this.state.course.age}
									/>
								</div>
							</div>
						</div>
					</div>
					<div className="sixteen wide column">
						<h2>Описание:</h2>
						<div className="field">
							<textarea
								name="body"
								onChange={this.handleInput}
								placeholder={this.state.course.body}
							></textarea>
						</div>
					</div>
					<div className="sixteen wide column">
						<h3>Видео</h3>
						<div className="field">
							<label htmlFor="video_url">video_url</label>
							<input
								name="video_url"
								type="text"
								onChange={this.handleInput}
								placeholder={this.state.course.video_url}
							/>
						</div>
					</div>

				</form>
			</React.Fragment>
		)
	}
}
export default UpdateCourse


// if(this.state.course.subcategory_id === category.id ){
// 	return(
// 		<option key={category.id} value={category.id} selected>{category.name}</option>
// 	)
// }else{
// 	return(
// 		<option key={category.id} value={category.id}>{category.name}</option>
// 	)
// }
