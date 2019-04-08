import React from 'react'

import Video from './Video'
import Category from './courses/Category'
import UserAvatar from './UserAvatar'

class ShowCourse extends React.Component {
  constructor(props) {
    super(props)
    this.state ={
      video_url: this.props.course.video_url
    }
  }
  render(){
    return(
      <React.Fragment>
        <div className="ui grid">
          <div className="five wide column">
            <div className="ui medium image">
              <UserAvatar id={this.props.course.user_id} />
            </div>
          </div>
          <div className="seven wide column">
						<div className="item">
							<a className="ui button orange" href={`./${this.props.course.id}/edit`}>Редактировать</a>
							<a className="ui button red" rel="nofollow" data-method="delete" href={`/courses/${this.props.course.id}`}>удалить</a>
						</div>
						<div className="item">
							предмет обучения:
							<Category categorys="categories" id={this.props.course.category_id}/>
							<Category categorys="subcategories" id={this.props.course.subcategory_id}/>
							<Category categorys="subsubcategories" id={this.props.course.subsubcategory_id}/>
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
export default ShowCourse
