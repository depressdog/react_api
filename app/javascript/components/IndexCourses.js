import React from 'react'
import axiosClient from './axiosClient'


import Category from './courses/Category'
import UserAvatar from './UserAvatar'

class IndexCourses extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			courses: [],
			category_name: '',
			subcategory_name: '',
			subsubcategory_name: ''
		}
	}
	componentDidMount() {
		axiosClient.get('courses')
			.then(response => {
				this.setState({
					courses: response.data
				})
			})
			.catch(error => console.log(error))

	}
	render() {
		return(
			<React.Fragment>
				<div className="ui items">
					{
						this.state.courses.map( course => {
							return(
								<div key={course.id} className="item">
									<div className="image">
										<a href={`courses/${course.id}`} className="ui small image">
											<UserAvatar id={course.user_id} />
										</a>
									</div>
									<div className="content">
										<a href={`courses/${course.id}`} className="header">{course.username}</a>
										<div className="meta">
											<Category categorys="categories" id={course.category_id}/>
											<Category categorys="subcategories" id={course.subcategory_id}/>
											<Category categorys="subsubcategories" id={course.subsubcategory_id}/>
										</div>
										<div className="description">{course.body}</div>
										<div className="extra">
											цена: {course.price}
										</div>
									</div>
								</div>
							)
						})
					}
				</div>
			</React.Fragment>
		)
	}
}
export default IndexCourses
