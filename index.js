function countdown(callback){
  window.setTimeout(callback, 2000);
}

function createMultiplier(multiplierValue){
  return function(n) {
    return n * multiplierValue
  }
}

function multiplier(a, b){
  return a * b * this
}
var doubler = createMultiplier(2)
var tripler = createMultiplier(3)

var  doublerWithBind = multiplier.bind(8, 2)


var  triplerWithBind = multiplier.bind(null, 3)

console.log(doubler(8))
console.log(doublerWithBind(2))
console.log(doublerWithBind(3))
