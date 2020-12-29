import React, { Component } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../index.css";

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
        <div class="container mt-5">
          <div class="row">
            <div class="col-10">
              <div class="row">
                <div class="col">
                  <h1>About this WeMeet</h1>
                </div>
                <div class="col">
                  <a className="button">Edit WeMeet details</a>
                </div>
              </div>

              <div class="row">
                <div class="col-3">
                  <h3>
                    <span>
                      <i class="material-icons">assignment_ind</i>
                    </span>
                    WeMeet
                  </h3>
                </div>
              </div>

              <div class="row">
                <div class="col">
                  <h5>12/122/1232</h5>
                </div>
              </div>
              <div class="row">
                <div class="col-5">
                  {/*<input className="inputvali" />*/}
                  <textarea ref={(textarea) => (this.textArea = textarea)} />
                </div>

                <div class="col-2">
                  <button
                    onClick={() => this.copyCodeToClipboard()}
                    className="button1"
                  >
                    copy Link
                  </button>
                  {this.state.copySuccess ? (
                    <div style={{ color: "white" }}>copied</div>
                  ) : null}
                </div>
                <div class="col-4">
                  <a className="button2">View Event Page</a>
                </div>
              </div>
            </div>
            <div class="col-1"></div>
          </div>
          <div class="row">
            <div class="col">
              <hr className="hrnew1"></hr>
            </div>
          </div>
          <div class="row">
            <div class="col-5">
              <h3>
                Airmeet Description
                <span>
                  <i class="material-icons">edit</i>
                </span>
              </h3>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Sidevala;
