import React from 'react'
import axios from 'axios'

class IndexCourses extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			courses: []
		}
	}
	componentDidMount() {
		axios.get('api/v1/courses')
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
									<div className="content">
										<h2>{course.username}</h2>
										<div className="meta">
											<ul>
												<li>{course.category_id}</li>
												<li>{course.subcategory_id}</li>
												<li>{course.subsubcategory_id}</li>
											</ul>
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