// Code your solution in this file.
function lowerCaseDrivers(arr) {
  return arr.map(el => {return el.toLowerCase()})
}
function nameToAttributes(arr) {
  const singleDrivers = []
  let objectDrivers = []
  for (const el in arr) {
     singleDrivers.push(arr[el].split(' '))
     objectDrivers = Object.assign({}, el, {firstName: el[0], lastName: el[1]} )
  }


  for (const people in singleDrivers) {
    objectDrivers = Object.assign({}, {firstName: people[0], lastName: people[1]})
  }
  return singleDrivers
}

const drivers = [
  'Bobby Smith',
  'Sammy Watkins',
  'Sally Jenkins',
  'Annette Sawyer',
  'Sarah Hucklebee',
  'bobby ridge'
];
