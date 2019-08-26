import * as _ from 'lodash'

const result1 = _.dropRight([1, 2, 3])
console.log(result1) // [ 1, 2 ]

const result2 = _.dropRight([4, 5, 6, 7, 8], 2)
console.log(result2) // [ 4, 5, 6 ]

const users = [{ user: 'barney', active: false }, { user: 'fred', active: true }, { user: 'pebbles', active: true }]

const result3 = _.dropRightWhile(users, function(o) {
  return o.active === true
})
console.log(result3) // [ { user: 'barney', active: false } ]
// 右側(終点)から false が返るまで drop

const result4 = _.dropRightWhile(users, { user: 'pebbles', active: true })
console.log(result4) // [ { user: 'barney', active: false }, { user: 'fred', active: true } ]

const result5 = _.dropWhile(users, function(o) {
  return o.active === false
})
console.log(result5) // [ { user: 'fred', active: true }, { user: 'pebbles', active: true } ]
// 左側(始点)から false が返るまで drop
