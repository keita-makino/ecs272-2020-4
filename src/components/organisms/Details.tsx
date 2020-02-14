import React from 'react';
import { Pokemon } from '../../consts/Pokemon';
import { Table, TableRow, TableCell, TableBody } from '@material-ui/core';
import useDetailsData from '../uses/useDetailsData';
import SelectorPanel from '../molecules/SelectorPanel';

export type Props = { id: number };

const Details: React.FC<Props> = (props: Props) => {
  const detailsData = useDetailsData({
    id: props.id
  });

  let subset;
  let imgSrc;

  if (detailsData !== undefined) {
    subset = Object.entries(detailsData).filter(
      item =>
        item[0] === 'Number' ||
        item[0] === 'Name' ||
        item[0] === 'Type_1' ||
        item[0] === 'HP' ||
        item[0] === 'Attack' ||
        item[0] === 'Defense' ||
        item[0] === 'Height_m' ||
        item[0] === 'Weight_kg'
    );
    console.log(subset);

    imgSrc =
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' +
      subset.find(item => item[0] === 'Number')![1] +
      '.png';

    console.log(imgSrc);
  }

  return (
    <>
      {subset !== undefined ? (
        <Table>
          <TableBody>
            <img src={imgSrc} height={200} width={200}></img>
            {subset.map(([key, value]) => (
              <TableRow key={key}>
                <TableCell component="th" scope="row">
                  {key}
                </TableCell>
                <TableCell component="th" scope="row">
                  {value?.toString()}
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
