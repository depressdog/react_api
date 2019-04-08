import React from "react";
import axiosClient from './axiosClient'
import update from 'immutability-helper'

import CategoryItem from './CategoryItem'
import CategoryNew from './CategoryNew';
import CategoryUpdate from "./CategoryUpdate";


class IndexCategories extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			categories: [],
			editCatId: ''
		};

		this.addNewCat = this.addNewCat.bind(this);
		this.onCatUpdate = this.onCatUpdate.bind(this);
		this.updateCat = this.updateCat.bind(this)
	}

	componentDidMount() {
		axiosClient.get(`categories`)
			.then(response => {
				this.setState({
					categories: response.data
				})
			})
			.catch(error => console.log(error))
	}

	addNewCat(name) {
		axiosClient.post( `categories`, { category: {name: name} })
			.then(response => {
				const categories = update(this.state.categories, {
					$splice: [[0, 0, response.data]]
				});
				this.setState({categories})
			})
			.catch(error => {
				console.log(error)
			})
	}

	onCatUpdate(e){
		this.setState({editCatId: e});
	}

	updateCat = (category) => {
		const categoryIndex = this.state.categories.findIndex(x => x.id === category.id);

		const categories = update(this.state.categories, {
			[categoryIndex]: { $set: category }
		});
		this.setState({categories: categories})
	};

	deleteCategory = (id) => {
		axiosClient.delete(`categories/${id}`)
			.then(response => {
				const categoryIndex = this.state.categories.findIndex(x => x.id === id);
				const categories = update(this.state.categories, { $splice: [[categoryIndex, 1]]});
				this.setState({categories: categories})
			})
			.catch(error => console.log(error))
	}

	render () {

		return (
			<React.Fragment>
				<CategoryNew onNewCat={this.addNewCat}/>
				<table className="ui celled table">
					<thead>
					<tr>
						<th>id</th>
						<th>category name</th>
						<th>update</th>
						<th>delete</th>
					</tr>
					</thead>
					<tbody>
					{this.state.categories.map( category => {
						if(this.state.editCatId === category.id) {
							return (<CategoryUpdate category={category} key={category.id} onCatUpdate={this.onCatUpdate} updateCat={this.updateCat} onDelete={this.deleteCategory} />
							)
						} else {
							return (<CategoryItem category={category} key={category.id} onCatUpdate={this.onCatUpdate} onDelete={this.deleteCategory} />
							)
						}
					})}
					</tbody>
				</table>
			</React.Fragment>
		);
	}
}

export default IndexCategories
