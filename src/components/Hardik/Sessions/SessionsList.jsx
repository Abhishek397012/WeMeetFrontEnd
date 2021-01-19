import React, { useState, useEffect } from "react";

import SessionCard from "./SessionCard";
import WithSpinner from "../WithSpinner/WithSpinner";
import { getAllSessions } from "../NewSessionForm/apiSessions";
import { isAuthenticated } from "../LogIn/apiLogin";

import { useStyles } from "./styles";

const SessionsList = (props) => {
  const classes = useStyles();
  const { user } = isAuthenticated();
  const [isPending, setIsPending] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    getAllSessions(user._id, props.wemeetId)
      .then((items) => {
        setData(items);
        setIsPending(false);
      })
      .catch(console.log);
  }, [props.wemeetId, user._id]);

  return isPending ? (
    <WithSpinner />
  ) : (
    <div className={classes.cardlist}>
      {console.log(data.size)}
      {data.map((info) => {
        return (
          <SessionCard key={info._id} data={info} wemeetId={props.wemeetId} />
        );
      })}
    </div>
  );
};

export default SessionsList;
