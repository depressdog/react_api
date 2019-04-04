import React from 'react'
import axios from 'axios'

class ShowUser extends React.Component {
	render() {
		return (
			<React.Fragment>
				<div className="ui grid">
					<div className="five wide column">
						<div className="ui medium circular image">
							<img src="https://semantic-ui.com/images/avatar2/large/molly.png" alt=""/>
						</div>
						<a href="http://masterzz.club/users/edit" className="fluid ui button blue">редактировать</a>
					</div>
					<div className="eleven wide column">
						<div className="ui list">
							<div className="item">
								Ник:
							</div>
							<div className="item">
								Номер телефона:
							</div>
							<div className="item">
								Имейл:
							</div>
							<div className="item">
								Образование:
							</div>
							<div className="item">
								мои навыки:
								<a href="#" className="ui label">Tag</a>
								<a href="#" className="ui label">Tag</a>
								<a href="#" className="ui label">Tag</a>
								<a href="#" className="ui label">Tag</a>
							</div>
							<div className="item">
								Мой возраст:
							</div>
							<div className="item">
								Локация:
							</div>
							<div className="item">
								О себе:
							</div>
							<div className="item">

							</div>
						</div>
					</div>
				</div>
			</React.Fragment>
		)
	}
}
export default ShowUser
