import React from 'react';
import PropTypes from 'prop-types';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const Metric = props => {
  return (
    <Table className="userdash-metric-table">
      <TableHead>
        <TableRow>
          <TableCell numeric>Messages</TableCell>
          <TableCell numeric>Follows</TableCell>
          <TableCell numeric>Followers</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow className="numeric-row">
          <TableCell numeric>{props.messages.length}</TableCell>
          <TableCell numeric>0</TableCell>
          <TableCell numeric>0</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

Metric.propTypes = {
  messages: PropTypes.array
};

export default Metric;
