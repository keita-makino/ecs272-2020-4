import kmeans from 'ml-kmeans';
import { MarkSeriesPoint } from 'react-vis';

const clustering = (data: MarkSeriesPoint[]) => {
  if (!Number(data[0].x) || !Number(data[0].y)) return;
  const array1 = data.map(item => item.x) as number[]; //from data find all variable1 values
  const array2 = data.map(item => item.y) as number[]; //from data find all variable2 values

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

  const ans = kmeans(chosendata, k, { initialization: centers }).clusters;

  const getColor = (str: string | number) => {
    const r = (str.toString().charCodeAt(0) * 147) % 255;
    const g = (str.toString().charCodeAt(0) * 1526) % 255;
    const b = (str.toString().charCodeAt(0) * 18452) % 255;
    return `rgb(${r},${b},${g})`;
  };

  return data.map((item, index) => ({
    ...item,
    fill: ans[index] * 15000,
    opacity: 0.5
  }));
};

export default clustering;
