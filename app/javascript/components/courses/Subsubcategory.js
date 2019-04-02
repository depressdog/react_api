import React from 'react'
import axios from 'axios'

class Subsubcategory extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			name: ''
		}
	}
	componentDidMount() {
		axios.get('//localhost:3000/api/v1/subsubcategories/' + this.props.subsubcategory_id)
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
export default Subsubcategory