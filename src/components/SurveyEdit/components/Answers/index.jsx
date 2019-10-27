import React from 'react';
import { Typography } from 'antd';
import Tooltip from '@material-ui/core/Tooltip';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import styles from './styles.module.css';
const { Title } = Typography;

const useStyles = makeStyles({
  root: {
    width: '100%',
    overflowX: 'auto',
    maxHeight: 500,
    overflow: 'auto',
  },
  table: {
    minWidth: 650,
  },
});
function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', ' ', ' ', '✓', ' '),
  createData('Ice cream sandwich', ' ', ' ', '✓', ' '),
  createData('Eclair', ' ', '✓', '✓', ' '),
  createData('Cupcake', ' ', ' ', '✓', '✓'),
  createData('Gingerbread', '✓', ' ', '✓', ' '),
];

export default props => {
  const classes = useStyles();
  return (
    <>
      <Title>Answers</Title>
      <Paper className={classes.root}>
        <Table
          className={classes.table}
          aria-label="simple table"
          stickyHeader
        >
          <TableHead>
            <TableRow>
              <TableCell>
                <Tooltip title="Add" placement="top">
                  <span className={styles.badge}>1</span>
                </Tooltip>
              </TableCell>
              <TableCell>
                <Tooltip title="Add" placement="top">
                  <span className={styles.badge}>2</span>
                </Tooltip>
              </TableCell>
              <TableCell>
                <Tooltip title="Add" placement="top">
                  <span className={styles.badge}>3</span>
                </Tooltip>
              </TableCell>
              <TableCell>
                <Tooltip title="Add" placement="top">
                  <span className={styles.badge}>4</span>
                </Tooltip>
              </TableCell>
              <TableCell>Comment</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow key={row.name}>
                <TableCell>{row.calories}</TableCell>
                <TableCell>{row.fat}</TableCell>
                <TableCell>{row.carbs}</TableCell>
                <TableCell>{row.protein}</TableCell>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </>
  );
};