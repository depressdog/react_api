import React from 'react'
import axios from 'axios'

class Subcategory extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			name: ''
		}
	}
	componentDidMount() {
		axios.get('api/v1/subcategories/' + this.props.subcategory_id)
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
export default Subcategory