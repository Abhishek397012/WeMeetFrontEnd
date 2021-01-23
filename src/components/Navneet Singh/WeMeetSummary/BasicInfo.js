import SummarySidebar from "./SummarySidebar.js";
import { useParams } from "react-router-dom";

const BasicInfo = (props) => {
  const { wemeetId } = useParams();

  return <SummarySidebar id={wemeetId}>Basic Information</SummarySidebar>;
};

export default BasicInfo;
