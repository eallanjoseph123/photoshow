import React, { Component} from 'react' 

class ImageDetail extends Component {
    
    render() {
      return (
        <div className="col-sm-3">
            <div className="card" style={cardStyle}>
                <img className="card-img-top" src={this.props.data.url} />
                <div className="card-body">
                    <p className="card-text">{this.props.data.title}</p>
                </div>
            </div>
        </div>
      );
    }
}
const cardStyle = {
    width: "18rem"
  }
  
export default ImageDetail;