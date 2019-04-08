import React from 'react'
import axiosClient from './axiosClient'
import update from 'immutability-helper'

import Item from './SubSubCategory/Item'
import New from './SubSubCategory/New'
import Update from "./SubSubCategory/Update";

class IndexSubSubCategories extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			subsubcategories: [],
			editSubId: ''
		}
		this.addNewCat = this.addNewCat.bind(this);
		this.onCatUpdate = this.onCatUpdate.bind(this);
		this.updateCat = this.updateCat.bind(this)
	}
	componentDidMount() {
		axiosClient.get('subsubcategories')
			.then(response => {
				console.log(response);
				this.setState({
					subsubcategories: response.data
				})
			})
			.catch(error => console.log(error))
	}
	addNewCat(name, subcategory_id) {
		axiosClient.post( 'subsubcategories', { subsubcategory: {name: name, subcategory_id: subcategory_id} })
			.then(response => {
				console.log(response);
				const subsubcategories = update(this.state.subsubcategories, {
					$splice: [[0, 0, response.data]]
				});
				this.setState({subsubcategories})
			})
			.catch(error => {
				console.log(error)
			})
	}
	onCatUpdate(e){
		this.setState({editSubId: e});
		console.log(this.state.editSubId)
	}
	updateCat = (subsubcategory) => {
		const subsubcategoryIndex = this.state.subsubcategories.findIndex(x => x.id === subsubcategory.id);

		const subsubcategories = update(this.state.subsubcategories, {
			[subsubcategoryIndex]: { $set: subsubcategory }
		});
		this.setState({subsubcategories: subsubcategories})
	};
	deleteCategory = (id) => {
		axiosClient.delete(`subsubcategories/${id}`)
			.then(response => {
				const subsubcategoryIndex = this.state.subsubcategories.findIndex(x => x.id === id);
				const subsubcategories = update(this.state.subsubcategories, { $splice: [[subsubcategoryIndex, 1]]});
				this.setState({subsubcategories: subsubcategories})
			})
			.catch(error => console.log(error))
	}

	render() {
		return(
			<React.Fragment>
				<New onNewCat={this.addNewCat}/>
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
						this.state.subsubcategories.map( subsubcategory => {
							if(this.state.editSubId === subsubcategory.id) {
								return (
									<Update subsubcategory={subsubcategory} key={subsubcategory.id} onCatUpdate={this.onCatUpdate} updateCat={this.updateCat} onDelete={this.deleteCategory} />
								)
							} else {
								return (
									<Item subsubcategory={subsubcategory} key={subsubcategory.id} onCatUpdate={this.onCatUpdate} onDelete={this.deleteCategory} />
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
export default IndexSubSubCategories