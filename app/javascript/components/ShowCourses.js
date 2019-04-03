import React from 'react'
import axios from 'axios'

import Category from './courses/Category'
import Subcategory from './courses/Subcategory'
import Subsubcategory from './courses/Subsubcategory'
import Video from './Video'

class ShowCourses extends React.Component{
	constructor(props){
		super(props);
		this.state ={
			video_url: this.props.course.video_url
		}
	}
	render() {
		return(
			<React.Fragment>
				<div className="ui grid">
					<div className="five wide column">
						<div className="ui medium circular image">
							<img src="https://semantic-ui.com/images/avatar2/large/kristy.png" alt=""/>
						</div>
					</div>
					<div className="seven wide column">
						<div className="item">
							предмет обучения:
							<span><Category category_id={this.props.course.category_id}/></span>
							<span><Subcategory subcategory_id={this.props.course.subcategory_id}/></span>
							<span><Subsubcategory subsubcategory_id={this.props.course.subsubcategory_id}/></span>
						</div>
						<div className="item">
							Ник: {this.props.course.username}
						</div>
						<div className="item">
							Номер телефона: {this.props.course.phone}
						</div>
						<div className="item">
							Имейл: {this.props.course.email}
						</div>
						<div className="item">
							цена: {this.props.course.price}
						</div>
						<div className="item">
							образование: {this.props.course.education}
						</div>
						<div className="item">
							возраст: {this.props.course.age}
						</div>
					</div>
				</div>
				<div className="sixteen wide column">
					<h2>Описание:</h2>
                    <p>{this.props.course.body}</p>
				</div>
                <Video video_url={this.state.video_url} />
			</React.Fragment>
		)
	}
}
export default ShowCourses