import React from 'react'

class Video extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            video: this.props.video_url
        }
    }
    render() {
        if( this.props.video_url === null){
            return ( <span></span>)
        }else {
            return(
                <div className="sixteen wide column">
                    <h3>Видео</h3>
                    <iframe width="560" height="315"
                            src={`https://www.youtube.com/embed/` + this.state.video}
                            frameBorder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen></iframe>
                </div>
            )
        }
    }
}
// const Video = (props) => {
//     const video = this.props.video_url;

// }
export default Video