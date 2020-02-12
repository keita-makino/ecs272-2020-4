import data from './data.json';

export default {
  raw: data.map(item => ({ ...item, __typename: 'record' })),
  scatter: {
    title: 'scatter',
    x: null,
    y: null,
    data: [
      { x: 1, y: 1, size: 1, __typename: 'mark' },
      { x: 2, y: 2, size: 1, __typename: 'mark' }
    ],
    __typename: 'scatter'
  },
  parallel: {
    title: 'parallel',
    data: [
      { x: 1, y: 1, size: 1, __typename: 'mark' },
      { x: 2, y: 2, size: 1, __typename: 'mark' }
    ],
    __typename: 'parallel'
  },
  details: {
    title: 'details',
    __typename: 'details'
  }
};
