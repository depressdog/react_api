import React from 'react'
import axiosClient from './axiosClient'


import {Radio, List} from 'semantic-ui-react'

class categoryCeckbox extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      category_id: this.props.category_id,
      subcategory_id: this.props.subcategory_id,
      subsubcategory_id: this.props.subsubcategory_id,
      categories: [],
      subcategories: [],
      subsubcategories: [],
    }

    this.catChange = this.catChange.bind(this);
    this.SubcatChange = this.SubcatChange.bind(this);
    this.SubSubcatChange = this.SubSubcatChange.bind(this);
  }
  componentDidMount() {
		axiosClient.get('categories')
			.then(response => {
				this.setState({
					categories: response.data
				})
			})
			.catch(error => console.log(error));
		axiosClient.get(`subcategories/`)
			.then(response => {
				this.setState({
					subcategories: response.data
				})
			})
			.catch(error => console.log(error));
		axiosClient.get(`subsubcategories/`)
			.then(response => {
				this.setState({
					subsubcategories: response.data
				})
			})
			.catch(error => console.log(error));
	}
  handleCatChange = (e, { value }) => this.setState({ category_id: value, subcategory_id: '', subsubcategory_id: '' });
	handleSubCatChange = (e, { value }) => this.setState({ subcategory_id: value, subsubcategory_id: '' });
	handleSubSubCatChange = (e, { value }) => this.setState({ subsubcategory_id: value});
  catChange(e){this.setState({category_id: e.target.value, subcategory_id: '', subsubcategory_id: ''});}
  SubcatChange(e){this.setState({subcategory_id: e.target.value, subsubcategory_id: ''});}
  SubSubcatChange(e){this.setState({subcategory_id: e.target.value});}
  render(){
    const category = this.state.categories.map((category) => {
        return(<option key={category.id} value={category.id} selected={this.state.category_id === category.id } >{category.name}</option>)
    });
    const subcategories = this.state.subcategories.map((subcategory) => {
      if(this.state.category_id != subcategory.category_id){

      }else {
        return(<option key={subcategory.id} value={subcategory.id} selected={this.state.subcategory_id === subcategory.id }>{subcategory.name}</option>)
      }
    });
    const subsubcategory = this.state.subsubcategories.map((subsubcategory) => {
      if(this.state.subcategory_id != subsubcategory.subcategory_id){

      }else {
        return(<option key={subsubcategory.id} value={subsubcategory.id} selected={this.state.subsubcategory_id === subsubcategory.id } >{subsubcategory.name}</option>)
      }

    });
    return(
      <React.Fragment>
      <div className="three fields">
        <div className="field">
        <select onChange={this.catChange} name="course[category_id]" id="course_category_id" >
            <option  value="">Выбор категории</option>
            {category}
        </select>
        </div>
        <div className="field">
        <select onChange={this.SubcatChange} name="course[subcategory_id]" id="course_subcategory_id" >
            <option  value="">Выбор категории</option>
            {subcategories}
        </select>
        </div>
        <div className="field">
        <select onChange={this.SubSubcatChange} name="course[subsubcategory_id]" id="course_subsubcategory_id" >
            <option  value="">Выбор категории</option>
            {subsubcategory}
        </select>
        </div>
      </div>

      </React.Fragment>
    )
  }
}
export default categoryCeckbox
