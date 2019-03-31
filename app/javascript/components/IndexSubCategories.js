import React from 'react'

import SubCategoryItem from './SubCategoryItem'
import axios from "axios";

class IndexSubCategories extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			subcategories: [],
			editSubCatId: ''
		}
	}

	componentDidMount() {
		axios.get('api/v1/subcategories')
			.then(response => {
				console.log(response);
				this.setState({
					subcategories: response.data
				})
			})
			.catch(error => console.log(error))
	}

	render() {
		return(
			<React.Fragment>
				<table className="ui celled table">
					<thead>
						<tr>
							<th>id</th>
							<th>parrent</th>
							<th>name</th>
							<th>update</th>
							<th>delete</th>
						</tr>
					</thead>
					<tbody>
						{
							this.state.subcategories.map( subcategory => {
								return(
									<SubCategoryItem subcategory={subcategory} key={subcategory.id} />
								)
							})
						}
					</tbody>
				</table>
			</React.Fragment>
		)
	}
}

export default IndexSubCategories