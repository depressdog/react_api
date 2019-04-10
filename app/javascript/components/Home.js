import React from 'react'
import ReactDOM from 'react-dom'

class Home extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			homes: [
				{id: 1, title: 'Обучение', imgUrl: '/assets/matthew-b1904dc651ba20c86e1892d37c0193359b7351704e4716cf5fe6fb860ef22935.png'},
				{id: 2, title: 'тренинги', imgUrl: '/assets/matthew-b1904dc651ba20c86e1892d37c0193359b7351704e4716cf5fe6fb860ef22935.png'},
				{id: 3, title: 'работа', imgUrl: '/assets/matthew-b1904dc651ba20c86e1892d37c0193359b7351704e4716cf5fe6fb860ef22935.png'},
				{id: 4, title: 'Услуги', imgUrl: '/assets/matthew-b1904dc651ba20c86e1892d37c0193359b7351704e4716cf5fe6fb860ef22935.png'},
				{id: 5, title: 'курсы', imgUrl: '/assets/matthew-b1904dc651ba20c86e1892d37c0193359b7351704e4716cf5fe6fb860ef22935.png'}
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
