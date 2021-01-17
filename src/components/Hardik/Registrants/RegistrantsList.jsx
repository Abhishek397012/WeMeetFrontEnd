import React from "react";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Switch from "@material-ui/core/Switch";

import { useStyles } from "./styles";

const RegistrantsList = ({ registrants }) => {
  const classes = useStyles();

  const handleChange = (event, email) => {
    console.log(email, event.target.checked);
  };

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Organization</TableCell>
            <TableCell align="right">Designation</TableCell>
            <TableCell align="right">Location</TableCell>
            <TableCell align="right">Speaker Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {registrants.map((registrant, i) => {
            return (
              <TableRow key={i}>
                <TableCell component="th" scope="row">
                  {registrant.name}
                </TableCell>
                <TableCell align="right">{registrant.email}</TableCell>
                <TableCell align="right">{registrant.organization}</TableCell>
                <TableCell align="right">{registrant.designation}</TableCell>
                <TableCell align="right">
                  {registrant.city}/{registrant.country}
                </TableCell>
                <TableCell align="right">
                  <Switch
                    defaultChecked={registrant.isSpeaker}
                    color="primary"
                    onChange={(e) => handleChange(e, registrant.email)}
                    inputProps={{ "aria-label": "primary checkbox" }}
                  />
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default RegistrantsList;
