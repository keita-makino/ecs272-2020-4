import React from 'react';
import { Pokemon } from '../../consts/Pokemon';
import { Table, TableRow, TableCell, TableBody } from '@material-ui/core';
import useDetailsData from '../uses/useDetailsData';
import SelectorPanel from '../molecules/SelectorPanel';

export type Props = { name: string };

const Details: React.FC<Props> = (props: Props) => {
  const detailsData = useDetailsData({
    name: props.name
  });
  return (
    <>
      {detailsData !== undefined ? (
        <Table>
          <TableBody>
            {Object.entries(detailsData).map(([key, value]) => (
              <TableRow key={key}>
                <TableCell component="th" scope="row">
                  {key}
                </TableCell>
                <TableCell component="th" scope="row">
                  {value}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      ) : null}
    </>
  );
};

export default Details;
