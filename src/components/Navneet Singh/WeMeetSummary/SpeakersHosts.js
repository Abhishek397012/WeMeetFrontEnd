import SummarySidebar from "./SummarySidebar.js";

const SpeakersHosts = (props) => {
  return (
    <SummarySidebar id={props.match.params.wemeetId}>
      Speakers and Hosts
    </SummarySidebar>
  );
};

export default SpeakersHosts;
