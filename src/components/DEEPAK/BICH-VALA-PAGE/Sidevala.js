import React, { Component } from "react";
// import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import {Link} from 'react-router-dom'
import EditIcon from '@material-ui/icons/Edit';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

class Sidevala extends Component {
  constructor(props) {
    super(props);

    this.state = {
      copySuccess: false,
    };
  }
  copyCodeToClipboard = () => {
    const el = this.textArea;
    el.select();
    document.execCommand("copy");
    this.setState({ copySuccess: true }); 
  };
  render() {
    return (
      <div className="info_wrapper">
        <div className="info_heading">
          <div className="info_header">
            About this WeMeet
          </div>
          <div>
              <Link className="edit_info_btn">< EditIcon />Edit WeMeet details</Link>
          </div>
        </div>
        <div className="info_description">
          <div className="meetup_desc"> <AssignmentIndIcon /> Meetup</div>
          <div className="desc_name">WeMeet Name</div>
          <div className="desc_desc">WeMeet Description</div>
          <div className="desc_date">WeMeet start - Wemeet end</div>
          <div className="desc_copy_stuff" style={{marginTop: "2.5em"}}>
            <textarea 
              value={`https://www.wemeet.com/e/${this.props.id}`} 
              ref={(textarea) => (this.textArea = textarea)} 
              style={{minWidth: "100px", borderRadius: "10px", paddingTop: "10px", paddingLeft: "10px", marginRight: "3em"}}
              cols="60"
            />
            <div>            
              <button
                  onClick={() => this.copyCodeToClipboard()}
                  className="button1"
                  style={{marginRight: "5em"}}
              >copy Link</button>
              {this.state.copySuccess ? (<div style={{ color: "white" }}>copied</div>) : null }
            </div>
            <Link to={`/e/${this.props.id}`} className="button2">View Event Page</Link>
          </div>
          <div className="wemeet_desc_edit">
            <div className="desc_desc">WeMeet Description <EditIcon/></div>
            <textarea rows="4" cols="100"></textarea>
          </div>
        </div>
      </div>
    );
  }
}

export default Sidevala;
