import { createCanvas } from 'canvas';
import { writeFileSync } from 'fs';

const classifyPoint = require('robust-point-in-polygon');
const pointInPoly = require('point-in-polygon');
const pointInPolyExt = require('point-in-polygon-extended');
const pointInPolyRaycast = pointInPolyExt.pointInPolyRaycast;
const pointInPolyWindingNumber = pointInPolyExt.pointInPolyWindingNumber;

const inside = [
  [1432.078431372549, 1167.578431372549], // in the lot, misses
  [1418.745098039216, 1169.578431372549] // in the lot, misses
];

const outside = [
  [1391.4117647058824, 1119.578431372549], // in the road, hits
  [1433.4117647058824, 1194.9117647058824] // in the water, misses
];

const polygon = [
  [1359, 1129],
  [1402, 1173],
  [1411, 1160],
  [1416, 1152],
  [1426, 1144],
  [1431, 1143],
  [1441, 1137],
  [1446, 1130],
  [1449, 1119],
  [1451, 1112],
  [1445, 1099],
  [1445, 1093],
  [1434, 1094],
  [1404, 1101],
  [1379, 1112],
  [1364, 1122],
  [1359, 1129]
];

const canvas = createCanvas(1500, 1200);
const ctx = canvas.getContext('2d');
// fill background
ctx.fillStyle = 'white';
ctx.fillRect(0, 0, canvas.width, canvas.height);
// draw polygon
ctx.strokeStyle = 'black';
ctx.lineWidth = 3;
ctx.beginPath();
polygon.forEach((point, ix) => {
  if (ix === 0) ctx.moveTo(point[0], point[1]);
  else ctx.lineTo(point[0], point[1]);
});
ctx.closePath();
ctx.stroke();
// draw all the insides as green
ctx.fillStyle = 'green';
inside.forEach((point) => {
  ctx.beginPath();
  ctx.arc(point[0], point[1], 3, 0, 2 * Math.PI);
  ctx.fill();
});
// draw all the outsides as red
ctx.fillStyle = 'red';
outside.forEach((point) => {
  ctx.beginPath();
  ctx.arc(point[0], point[1], 3, 0, 2 * Math.PI);
  ctx.fill();
});
const buffer = canvas.toBuffer('image/jpeg', { quality: 1 });
writeFileSync('/home/mflo/Downloads/hittest.jpeg', buffer);

console.log('\n\nAll these are INSIDE, should be TRUE');
inside.forEach((point) => {
  console.log(`robust=${classifyPoint(polygon, point) <= 0}`);
  console.log(`pip=${pointInPoly(polygon, point)}`);
  console.log(`pipext raycast= ${pointInPolyRaycast(point, polygon)}`);
  console.log(`pipext winding=${pointInPolyWindingNumber(point, polygon)}`);
});

console.log('\n\nAll these are OUTSIDE, should be FALSE');
outside.forEach((point) => {
  console.log(`robust=${classifyPoint(polygon, point) <= 0}`);
  console.log(`pip=${pointInPoly(polygon, point)}`);
  console.log(`pipext raycast= ${pointInPolyRaycast(point, polygon)}`);
  console.log(`pipext winding=${pointInPolyWindingNumber(point, polygon)}`);
});
