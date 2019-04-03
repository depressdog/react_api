import React from 'react'
import axios from 'axios'

import Category from './courses/Category'
import Subcategory from './courses/Subcategory'
import Subsubcategory from './courses/Subsubcategory'

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
		axios.get('//localhost:3000/api/v1/courses')
			.then(response => {
				console.log(response);
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
						this.state.courses.map(course => {
							return(
								<div key={course.id} className="item">
									<div className="image">
										<a href={`courses/${course.id}`} className="ui small image">
											<img src="https://semantic-ui.com/images/avatar2/large/matthew.png" alt=""/>
										</a>
									</div>
									<div className="content">
										<a href={`courses/${course.id}`} className="header">{course.username}</a>
										<div className="meta">
											<span className="date"><Category category_id={course.category_id}/></span>
											<span className="cinema"><Subcategory subcategory_id={course.subcategory_id}/></span>
											<span><Subsubcategory subsubcategory_id={course.subsubcategory_id}/></span>
										</div>
										<div className="description">1</div>
										<div className="extra">
											цена: 123
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