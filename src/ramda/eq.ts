import * as R from 'ramda'

interface User {
  id: number
  name: string
}

const groupA = [
  { id: 0, name: 'Alice' },
  { id: 1, name: 'Bob' },
  { id: 2, name: 'Chris' },
  { id: 3, name: 'David' },
  { id: 4, name: 'Fred' }
]
const groupB = [
  { id: 0, name: 'Alice' },
  { id: 1, name: 'Bob' },
  { id: 2, name: 'Chris' },
  { id: 4, name: 'Fred' },
  { id: 5, name: 'Gordon' }
]

const isEqualByKey = (key: string) => (a: any[], b: any[]) => R.equals(R.pluck(key)(a), R.pluck(key)(b))
const isEqualById = isEqualByKey('id')
console.log(isEqualById(groupA, groupA)) // true
console.log(isEqualByKey('name')(groupA, groupA)) // true
console.log(isEqualById(groupA, groupB)) // false
