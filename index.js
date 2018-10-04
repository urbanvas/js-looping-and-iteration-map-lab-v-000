// Code your solution in this file.
function lowerCaseDrivers(arr) {
  return arr.map(el => {return el.toLowerCase()})
}

function nameToAttributes(arr) {
  return arr.map(el => {
    return Object.assign({}, {firstName: el.split(' ')[0], lastName: el.split(' ')[1]})
  })
}
