import React from 'react'
import axiosClient from '../axiosClient'

class Category extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			name: '',
			categorys: this.props.categorys,
			id: this.props.id
		}
	}
	componentDidMount() {
		if(this.state.id != null){
			axiosClient.get(`${this.state.categorys}/${this.state.id}`)
				.then(response => {
					this.setState({
						name: response.data.name
					})
				})
		}
	}
	render() {
		return(
			<span>
				{this.state.name}
			</span>
		)
	}
}
export default Category