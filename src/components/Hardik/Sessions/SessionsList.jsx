import React, { useEffect, useState } from "react";

import SessionCard from "./SessionCard";
import { getAllSessions } from "../NewSessionForm/apiSessions";
import { isAuthenticated } from "../LogIn/apiLogin";

import { useStyles } from "./styles";

const SessionsList = (props) => {
  const classes = useStyles();
  const { user } = isAuthenticated();
  const s = new Date();
  const [data, setData] = useState([]);

  useEffect(() => {
    getAllSessions(user._id, props.wemeetId)
      .then((dataSession) => {
        setData(dataSession);
        console.log(data);
      })
      .catch(console.log);
  }, [props.wemeetId, user._id]);

  return (
    <div className={classes.cardlist}>
      {     
      data.map(info=>(
                  <SessionCard key={info._id} data={info} wemeetId={props.wemeetId} />

            ))
     }
    </div>
  );
};

export default SessionsList;
