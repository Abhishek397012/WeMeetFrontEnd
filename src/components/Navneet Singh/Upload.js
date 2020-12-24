import React, { Component } from "react";
class Upload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null,
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      file: URL.createObjectURL(event.target.files[0]),
    });
  }
  render() {
    return (
      <div className="form-group col-sm-12 col-md-4 col-lg-4 ">
        <label htmlFor="image">Upload Image</label>
        <input type="file" onChange={this.handleChange} />
        <img src={this.state.file} />
      </div>
    );
  }
}
export default Upload;
