import React from 'react'
import axios from 'axios'


class CategoryUpdate extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			name: this.props.category.name
		}
	}
	onSubmit = () => {
		const category = {
			name: this.state.name
		};

		axios.put(
			('api/v1/categories/' + this.props.category.id),
				{
					category: category
				}
			)
			.then(response => {
				console.log(response.data);
				this.props.updateCat(response.data);
			})
			.catch(error => console.log(error))
	};
	handleInput = (e) => {
		this.setState({[e.target.name]: e.target.value})
	};
	render() {
		return(

				<tr key={this.props.category.id}>
					<td>{this.props.category.id}</td>
						<td>
							<form className="ui form" onBlur={this.onSubmit}>
								<div className="ui field">
									<input
										name="name"
										type="text"
										value={this.state.name}
										onChange={this.handleInput}
									/>
								</div>
							</form>
						</td>
						<td>
							<button onClick={() => { this.props.onCatUpdate('')}}>
								cansel
							</button>
						</td>
				</tr>
		)
	}
}

export default CategoryUpdate
// const CategoryUpdate = ({onNewCat = f => f}) => {
// 	let name;
// 	const submit = e => {
// 		e.preventDefault();
// 		onNewCat(name.value);
// 		name.value = '';
// 		name.focus()
// 	};
//
// 	return(
// 		<form className="ui form" onSubmit={submit}>
// 			<div className="ui field">
// 				<input  ref={input => name = input}
// 						type="text"
// 						placeholder="Name..." required />
// 			</div>
// 			<button className="ui button green">создать</button>
// 		</form>
// 	)
// };
// export default CategoryUpdate;

