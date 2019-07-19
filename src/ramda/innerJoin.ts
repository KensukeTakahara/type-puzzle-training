import * as R from 'ramda'

type User = {
  id: number
  name: string
}

const record: User[] = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 5, name: 'Chris' },
  { id: 11, name: 'David' },
  { id: 100, name: 'Ellis' }
]

const join = R.innerJoin((record: User, id) => record.id === id)
// [ { id: 2, name: 'Bob' }, { id: 100, name: 'Ellis' } ]
console.log(join(record, [2, 100, 1000]))

const anotherRecord: User[] = [
  record[0],
  { id: 20, name: 'Fred' },
  { id: 30, name: 'Gordon' },
  record[2],
  { id: 400, name: 'Helen' }
]

// [ { id: 1, name: 'Alice' }, { id: 5, name: 'Chris' } ]
console.log(R.intersection(record, anotherRecord))
