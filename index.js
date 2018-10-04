// Code your solution in this file.
function lowerCaseDrivers(arr) {
  return arr.map(el => {return el.toLowerCase()})
}
function nameToAttributes(arr) {
  for (const el in arr) {
    arr[el].split(' ')
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

