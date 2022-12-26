// Write a function mul(x)(y)(z) to multiply x, y and z.

function mul(x) {
  return function(y) {
    return function(z) {
      return x*y*z
    }
  }
}

const result = mul(2)(3)(4)
console.log(result)
