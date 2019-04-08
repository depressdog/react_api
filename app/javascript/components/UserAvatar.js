import React from 'react'
import axiosClient from './axiosClient'

class UserAvatar extends React.Component{
	constructor(props){
		super(props)
		this.state = {
      id: this.props.id,
      url: ''
		}
	}
  componentDidMount(){
    axiosClient.get(`users/${this.state.id}`)
      .then(response => {
        this.setState({
          url: response.data.avatar.url
        })
      })
  }
	render() {
		return(
        <img src={this.state.url} alt=""/>
		)
	}
}
export default UserAvatar
