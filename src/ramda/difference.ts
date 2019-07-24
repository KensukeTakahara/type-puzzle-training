import * as R from 'ramda'

type Ticket = {
  id: number
  title: string
}

const groupA: Ticket[] = [
  { id: 1, title: 'bug fix' },
  { id: 2, title: 'design' },
  { id: 3, title: 'unit test' },
  { id: 4, title: 'documentation' },
  { id: 5, title: 'implement login' },
  { id: 6, title: 'integration test' }
]

const groupB: Ticket[] = [
  { id: 2, title: 'design' },
  { id: 3, title: 'unit test' },
  { id: 9, title: 'implement header' },
  { id: 11, title: 'integration test' },
  { id: 13, title: 'documentation' }
]

const diff = R.difference(groupA, groupB)
/*
[ { id: 1, title: 'bug fix' },
  { id: 4, title: 'documentation' },
  { id: 5, title: 'implement login' },
  { id: 6, title: 'integration test' } ]
*/
console.log(diff)

const symmetricDiff = R.symmetricDifference(groupA, groupB)
/*
[ { id: 1, title: 'bug fix' },
  { id: 4, title: 'documentation' },
  { id: 5, title: 'implement login' },
  { id: 6, title: 'integration test' },
  { id: 9, title: 'implement header' },
  { id: 11, title: 'integration test' },
  { id: 13, title: 'documentation' } ]
*/
console.log(symmetricDiff)

const removeSameTitleTicket = (x: Ticket, y: Ticket) => x.title === y.title
const notDuplicateTitleTickets = R.differenceWith(removeSameTitleTicket, groupA, groupB)
/*
[ { id: 1, title: 'bug fix' },
  { id: 5, title: 'implement login' } ]
*/
console.log(notDuplicateTitleTickets)
