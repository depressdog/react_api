import React from 'react'

class editProfile extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username: this.props.user.username
        }
    }
    handleInput = (e) => {
        this.setState({[e.target.name]: e.target.value})
    };
    render() {
        return(
            <div className="field">
                <input
                    type="text"
                    name="username"
                    onChange={this.handleInput}
                    placeholder="usrname"
                />
            </div>
        )
    }
}
export default editProfile
