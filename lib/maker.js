module.exports = gen

/**
* @param {string} textlength Enter the length of the character you want to create.
*/
function gen(textlength) {
  if(textlength < 1) Err('You must enter a number greater than 1!')
  else{
    let a = 'ABCDEFGHIJKLNMOPQRSTUVWXYZ0123456789abcdefghijklnmopqrstuvwxyz'
    let temp = ''
    for (let i = 0; i < a.length; i++) {
      var land = Math.floor(Math.random() * a.length) + 0
      temp += a[land]
    }
    return temp
  }
}

function Err(text) {
  throw Error(text)
}