/***********************************************************************
Write a function named: coupon(discount). The coupon function will intake a
number to apply as a discount, and will return a function that accepts an array
of prices. Every call to the function returned by coupon will return the array
of prices with the discount applied.

Example 1:
let tenPercent = coupon(0.1);
console.log(tenPercent([10, 20, 30])); // [ 9, 18, 27 ]

Example 2:
let twentyPercent = coupon(0.2);
console.log(twentyPercent([10, 20, 30])); // [ 8, 16, 24 ]


***********************************************************************/
function coupon(dis) {

  let Make = function (A)
  {
    let ret=[];

    for(let i=0;i<A.length;i++)
    {
      ret.push(A[i]*(1-dis));
    }

    return ret;
  }

  return Make
  // Your code here
}


//let tenPercent = coupon(0.1);
//console.log(tenPercent([10, 20, 30])); // [ 9, 18, 27 ]


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
  module.exports = coupon;
} catch (e) {
  return null;
}
