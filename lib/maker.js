module.exports = gen

/**
* @return 
* @param {string} length Enter the length of the character you want to create.
*/
function gen(length) {
  if(length < 1) Err('You must enter a number greater than 1!')
  else{
    let a = 'ABCDEFGHIJKLNMOPQRSTUVWXYZ0123456789abcdefghijklnmopqrstuvwxyz'
    let temp = ''
    for (let i = 0; i < length; i++) {
      var land = Math.floor(Math.random() * a.length)
      temp += a[land]
    }
    return temp
  }
}

function Err(text) {
  throw Error(text)
}