import data from '../data/data.json';

import kmeans from 'ml-kmeans';

console.log(data);

const clustering = () => {
  const variable1 = 'HP'; //should be able to be chosen through widget in future
  const variable2 = 'Attack'; //should be able to be chosen through widget in future

  const array1 = data.map(
    item => item[variable1 as keyof typeof data[0]]
  ) as number[]; //from data find all variable1 values
  const array2 = data.map(
    item => item[variable2 as keyof typeof data[0]]
  ) as number[]; //from data find all variable2 values

  const k = 5; //should be able to be chosen through widget in future
  const centers = [];

  for (let index = 0; index < k; index++) {
    const x = Math.floor(
      Math.random() * Math.max(...array1) + Math.min(...array1)
    );
    const y = Math.floor(
      Math.random() * Math.max(...array2) + Math.min(...array2)
    );
    const center = [x, y];
    centers.push(center);
  }

  const chosendata = [];
  for (let index = 0; index < array1.length; index++) {
    chosendata.push([array1[index], array2[index]]);
  }
  console.log(chosendata);

  const ans = kmeans(chosendata, k, { initialization: centers });
  // console.log(data);
  console.log(centers);

  return ans;
};

export default clustering;
