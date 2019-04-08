import React from 'react'
import axiosClient from './axiosClient'
import update from "immutability-helper";

import SubCategoryItem from './SubCategories/SubCategoryItem'
import SubCategoryNew from './SubCategories/SubCategoryNew'
import SubCategoryUpdate from "./SubCategories/SubCategoryUpdate";

class IndexSubCategories extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			subcategories: [],
			editSubCatId: ''
		}
		this.addNewCat = this.addNewCat.bind(this);
		this.onCatUpdate = this.onCatUpdate.bind(this);
		this.updateCat = this.updateCat.bind(this)
	}

	componentDidMount() {
		axiosClient.get('subcategories')
			.then(response => {
				console.log(response);
				this.setState({
					subcategories: response.data
				})
			})
			.catch(error => console.log(error))
	}

	addNewCat(name, category_id) {
		axiosClient.post( 'subcategories', { subcategory: {name: name, category_id: category_id} })
			.then(response => {
				console.log(response);
				const subcategories = update(this.state.subcategories, {
					$splice: [[0, 0, response.data]]
				});
				this.setState({subcategories})
			})
			.catch(error => {
				console.log(error)
			})
	}

	onCatUpdate(e){
		this.setState({editSubCatId: e});
		console.log(this.state.editSubCatId)
	}
	updateCat = (subcategory) => {
		const subcategoryIndex = this.state.subcategories.findIndex(x => x.id === subcategory.id);

		const subcategories = update(this.state.subcategories, {
			[subcategoryIndex]: { $set: subcategory }
		});
		this.setState({subcategories: subcategories})
	};

	deleteCategory = (id) => {
		axiosClient.delete(`subcategories/${id}`)
			.then(response => {
				const subcategoryIndex = this.state.subcategories.findIndex(x => x.id === id);
				const subcategories = update(this.state.subcategories, { $splice: [[subcategoryIndex, 1]]});
				this.setState({subcategories: subcategories})
			})
			.catch(error => console.log(error))
	}
	render() {
		return(
			<React.Fragment>
				<SubCategoryNew onNewCat={this.addNewCat}/>
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
								if(this.state.editSubCatId === subcategory.id) {
									return (
										<SubCategoryUpdate subcategory={subcategory} key={subcategory.id} onCatUpdate={this.onCatUpdate} updateCat={this.updateCat} onDelete={this.deleteCategory} />
									)
								} else {
									return (
										<SubCategoryItem subcategory={subcategory} key={subcategory.id} onCatUpdate={this.onCatUpdate} onDelete={this.deleteCategory} />
									)
								}
							})
						}
					</tbody>
				</table>
			</React.Fragment>
		)
	}
}

export default IndexSubCategories