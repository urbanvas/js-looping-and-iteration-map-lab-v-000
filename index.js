// Code your solution in this file.
function lowerCaseDrivers(arr) {
  return arr.map(el => {return el.toLowerCase()})
}
function nameToAttributes(arr) {
  const objectDrivers = []
  for (const el of arr) {
    objectDrivers.push(Object.assign({}, {firstName: el.split(' ')[0], lastName: el.split(' ')[1]}))
  }
  return objectDrivers
}
