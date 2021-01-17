import React, { useEffect } from "react";

import SessionCard from "./SessionCard";
import { getAllSessions } from "../NewSessionForm/apiSessions";
import { isAuthenticated } from "../LogIn/apiLogin";

import { useStyles } from "./styles";

const SessionsList = (props) => {
  const classes = useStyles();
  const { user } = isAuthenticated();
  const s = new Date();
  var data = [
    {
      id: "123",
      title: "Welcome Session",
      summary: "This is an introduction session. Now, plan ahead.",
      datetime: s.toJSON().substr(0, 16),
      date: s.toDateString(),
      time: s.toTimeString(),
      duration: 30,
    },
  ];

  useEffect(() => {
    getAllSessions(user._id, props.wemeetId)
      .then((dataSession) => {
        data=[...dataSession];
        console.log(data);
      })
      .catch(console.log);
  }, [props.wemeetId, user._id]);

  return (
    <div className={classes.cardlist}>
      {data.map((info) => {
        return (
          <SessionCard key={info.id} data={info} wemeetId={props.wemeetId} />
        );
      })}
    </div>
  );
};

export default SessionsList;
