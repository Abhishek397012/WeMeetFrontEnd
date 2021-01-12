import SummarySidebar from "./SummarySidebar.js";

const BasicInfo = (props) => {
  return (
    <SummarySidebar id={props.match.params.wemeetId}>
      Basic Information
    </SummarySidebar>
  );
};

export default BasicInfo;
