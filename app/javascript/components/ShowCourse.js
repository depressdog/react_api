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
    let button = null;

    let image1 = null;
    let image2 = null;
    let image3 = null;
    let image4 = null;
    let image5 = null;
    let image6 = null;
    let image7 = null;
    let image8 = null;
    let image9 = null;
    let image10 = null;

    if (this.props.currentuser != null && this.props.currentuser.id === this.props.course.user_id) {
      button = (
				<div className="item">
					<a className="ui button orange" href={`./${this.props.course.id}/edit`}>Редактировать</a>
					<a className="ui button red" rel="nofollow" data-method="delete" href={`/courses/${this.props.course.id}`}>удалить</a>
				</div>
      );
    }

    if (this.props.course.image1.url != null ) {
      image1 = <img src={this.props.course.image1.url}/>;
    }
    if (this.props.course.image2.url != null ) {
      image2 = <img src={this.props.course.image2.url}/>;
    }
    if (this.props.course.image3.url != null ) {
      image3 = <img src={this.props.course.image3.url}/>;
    }
    if (this.props.course.image4.url != null ) {
      image4 = <img src={this.props.course.image4.url}/>;
    }
    if (this.props.course.image5.url != null ) {
      image5 = <img src={this.props.course.image5.url}/>;
    }
    if (this.props.course.image6.url != null ) {
      image6 = <img src={this.props.course.image6.url}/>;
    }
    if (this.props.course.image7.url != null ) {
      image7 = <img src={this.props.course.image7.url}/>;
    }
    if (this.props.course.image8.url != null ) {
      image8 = <img src={this.props.course.image8.url}/>;
    }
    if (this.props.course.image9.url != null ) {
      image9 = <img src={this.props.course.image9.url}/>;
    }
    if (this.props.course.image10.url != null ) {
      image10 = <img src={this.props.course.image10.url}/>;
    }

    return(
      <React.Fragment>
        <div className="ui grid">
          <div className="five wide column">
            <div className="ui medium image">
              <UserAvatar id={this.props.course.user_id} />
            </div>
          </div>
          <div className="seven wide column">
            {button}

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
          <div class="sixteen wide column">
            <h3>Галлерея:</h3>
            <div class="ui medium images">
              {image1}
              {image2}
              {image3}
              {image4}
              {image5}
              {image6}
              {image7}
              {image8}
              {image9}
              {image10}
            </div>
          </div>

      </React.Fragment>
    )
  }
}
export default ShowCourse
