import React from "react";

import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

import NewSessionForm from "../NewSessionForm/NewSessionForm";

import { useStyles } from "./styles";

export default function SimpleCard({ data }) {
  const classes = useStyles();
  const { name, description, sessionDateTime, duration, wemeetId } = data;
  const datetime = new Date(sessionDateTime);
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.card} variant="outlined">
      {JSON.stringify(data)}
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          {name}
        </Typography>
        <Typography variant="body2" component="p">
          {bull}
          {datetime.toLocaleDateString()}
          <br />
          {bull}
          {datetime.toLocaleTimeString()}
          <br />
          {bull}
          {duration} mins
        </Typography>
        <Typography
          variant="body2"
          component="p"
          style={{ maxHeight: "80px", overflowY: "auto", marginTop: "20px" }}
        >
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <NewSessionForm type={0} data={data} wemeetId={wemeetId} />
      </CardActions>
    </Card>
  );
}
