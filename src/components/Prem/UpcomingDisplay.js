const UpcomingDisplay = ({ setDefault }) => {
  const showDefault = () => (
    <div className="upcoming_content">Default Event</div>
  );

  return (
    <div className="upcoming_wrapper">
      <div className="row" style={{ width: "100%", margin: "0.5em" }}>
        <div className="col-3 upcoming_left"></div>
        <div className="col-9 upcoming_right">
          <div className="upcoming_right_up"></div>
          <div className="upcoming_right_down">
            <div className="urdn"></div>
            <div className="urdh">
              <div className="urdh_name"></div>
              <div className="urdh_button"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingDisplay;
