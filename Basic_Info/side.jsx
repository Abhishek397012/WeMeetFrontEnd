import React, { Component } from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "./side.css";
import EditIcon from '@material-ui/icons/Edit';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
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
            <>
               {/*} {this.state.copySuccess ? (
                    <div className="alert alert-warning alert-dismissible fade show" role="alert">
                        <strong>Link Copied</strong>

                    </div>) : null}*/}
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-10">
                            <div className="row">
                                <div className="col">
                                    <h1>About this WeMeet</h1>
                                </div>
                                <div className="col">
                                    <a className="button">< EditIcon /> Edit WeMeet details</a>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-3">
                                    <h5>
                                        <span>
                                            <AssignmentIndIcon />
                                        </span>
                    Meetup
                  </h5>
                                </div>
                            </div>
                            <h4>WeMeet Name</h4><br />
                            <p>Description</p>

                            <div className="row">
                                <div className="col">
                                    <h5>Timing</h5>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-3">
                                   
                                    <textarea ref={(textarea) => (this.textArea = textarea)} />
                                </div>

                                <div className="col-2">
                                    <button
                                        onClick={() => this.copyCodeToClipboard()}
                                        className="button1">
                                        copy Link
                                       </button>

                                </div>
                                <div className="col-4">
                                    <a className="button2">View Event Page</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-1"></div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <hr className="hrnew1"></hr>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-5">
                            <h3>
                                Airmeet Description
                <span>
                                    <EditIcon />
                                </span>
                            </h3>
                            <textarea rows="4" cols="50"></textarea>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
export default Sidevala;