import React from 'react'
import axios from 'axios'

class Category extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			name: ''
		}
	}
	componentDidMount() {
		axios.get('http://localhost:3000/api/v1/categories/' + this.props.category_id)
			.then(response => {
				this.setState({
					name: response.data.name
				})
			})

	}
	render() {
		return(
			<React.Fragment>
				{this.state.name}
			</React.Fragment>
		)
	}
}
export default Category