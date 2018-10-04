// Code your solution in this file.
function lowerCaseDrivers(arr) {
  return arr.map(el => {return el.toLowerCase()})
}
function nameToAttributes(arr) {
  const singleDrivers = []
  for (const el of arr) {
     singleDrivers.push(arr[el].split(' '))
     objectDrivers.push(Object.assign({}, el, {firstName: el[1], lastName: el[2]} ))
  }
}

const drivers = [
  'Bobby Smith',
  'Sammy Watkins',
  'Sally Jenkins',
  'Annette Sawyer',
  'Sarah Hucklebee',
  'bobby ridge'
];
