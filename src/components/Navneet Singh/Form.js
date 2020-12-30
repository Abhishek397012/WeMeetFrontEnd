import React from "react";
import Upload from "./Upload";
export const Form = ({ onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <div className="form-group">
        <label htmlFor="designation">Designation</label>
        <input type="text" className="form-control" id="designation" />
      </div>
      <div className="form-group">
        <label htmlFor="organization">Organization</label>
        <input type="text" className="form-control" id="organization" />
      </div>
      <div className="row">
        <div className="form-group col-sm-12 col-md-6 col-lg-6">
          <label htmlFor="city">City</label>
          <input type="text" className="form-control" id="city" />
        </div>
        <div className="form-group col-sm-12 col-md-6 col-lg-6">
          <label htmlFor="country">Country</label>
          <input type="text" className="form-control" id="country" />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="aboutme">About Me</label>
        <textarea className="form-control" id="aboutme" />
      </div>
      <div className="form-group">
        <button className="form-control btn btn-primary" type="submit">
          Save
        </button>
      </div>
    </form>
  );
};
export default Form;
