import SummarySidebar from "./SummarySidebar.js";
import SidePage from '../../DEEPAK/BICH-VALA-PAGE/Sidevala'
const BasicInfo = (props) => {
  return (
    <SummarySidebar id={props.match.params.wemeetId}>
      <SidePage id={props.match.params.wemeetId}/>
    </SummarySidebar>
  );
};

export default BasicInfo;
