import React from 'react'
import ReactDOM from 'react-dom'
class Home extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			homes: [
				{id: 1, title: 'Обучение', imgUrl: 'https://semantic-ui.com/images/avatar2/large/matthew.png'},
				{id: 2, title: 'тренинги', imgUrl: 'https://semantic-ui.com/images/avatar2/large/kristy.png'},
				{id: 3, title: 'работа', imgUrl: 'https://semantic-ui.com/images/avatar2/large/molly.png'},
				{id: 4, title: 'Услуги', imgUrl: 'https://semantic-ui.com/images/avatar2/large/elyse.png'},
				{id: 5, title: 'курсы', imgUrl: 'https://semantic-ui.com/images/avatar/large/elliot.jpg'}
			]
		}
	}

	render(){
		var homes = this.state.homes.map((item) => {
			return(
				<div className="three wide column ui card" key={item.id}>
					<a href="/courses" className="ui medium image">
						<img src={item.imgUrl} alt={item.title} />
					</a>
					<div className="content">
						<a href="/courses" className="header">{item.title}</a>
					</div>
				</div>
			)
		})
		return(
			<div className="ui cards grid">
				{homes}
			</div>
		)
	}
}
export default Home