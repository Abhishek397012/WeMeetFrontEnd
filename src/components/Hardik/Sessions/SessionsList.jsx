import React from "react";

import SessionCard from "./SessionCard";

import { useStyles } from "./styles";

const SessionsList = () => {
  const classes = useStyles();
  const s = new Date();
  const data = [
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

  return (
    <div className={classes.cardlist}>
      {data.map((info) => {
        return <SessionCard key={info.id} data={info} />;
      })}
    </div>
  );
};

export default SessionsList;
