import * as R from 'ramda'

const a = 3
// true
console.log(R.equals(3)(a))

// type SafePred<T> = (...a: T[]) => boolean;
const predType = (ramdaType: string) => (type: unknown) => R.type(type) === ramdaType

const f = R.cond([
  [predType('String'), R.toUpper],
  [predType('Number'), R.multiply(1000)],
  [predType('Boolean'), R.not],
  [R.T, R.always('not string & number & boolean.')]
])

console.log(f('hello')) // => HELLO
console.log(f(0.01)) // => 10
console.log(f(true)) // => false
console.log(f([])) // => not string & number & boolean.
