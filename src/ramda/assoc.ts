import * as R from 'ramda'

type Student = {
  name: string
  sex: 'male' | 'female'
}

const mike: Student = { name: 'mike', sex: 'male' }
const mikeUpdated = R.assoc('age', 14, mike) // Record<"age", number> & Student
// { name: 'mike', sex: 'male', age: 14 }
console.log(mikeUpdated)

const mikeHidden = R.dissoc('sex', mikeUpdated) // unknown
// { name: 'mike', age: 14 }
console.log(mikeHidden)

const mikeInfo = R.pick(['age', 'sex'], mikeUpdated) // Pick<Record<"age", number> & Student, "sex" | "age">
// { age: 14, sex: 'male' }
console.log(mikeInfo)
