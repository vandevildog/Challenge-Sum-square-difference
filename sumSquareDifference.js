
exports.SumOfASquare = SumOfASquare;

function SumOfASquare(naturalNumbers) {
  this.naturalNumbers = naturalNumbers;

  this.sumOfSquares = function () {
    let result = 0;
    let squared = 0;

    for (let i = 0; i <= this.naturalNumbers; i++){
      squared = i*i;
      result += squared;
    }

    return result;
  }

  this.squareOfTheSums = function () {
    let result = 0;
    let sum = 0;

    for (let i = 0; i <= this.naturalNumbers; i++){
      sum += i;
      result = sum*sum;
    }
    return result;
  }






}

