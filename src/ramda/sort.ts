import * as R from 'ramda'

type Room = {
  floor: number
  number: number
  name: string
}

const sampleRoom: Room = {
  floor: 2,
  number: 3,
  name: '203'
}

const propSample = R.prop('floor', sampleRoom)
const propsSample = R.props(['number', 'name'], sampleRoom)

const sampleRooms: Room[] = [
  {
    floor: 2,
    number: 2,
    name: '202'
  },
  {
    floor: 2,
    number: 3,
    name: '203'
  },
  {
    floor: 2,
    number: 1,
    name: '201'
  }
]

const sortedRooms = R.sortBy(R.prop('number'))(sampleRooms)
/*
[ { floor: 2, number: 1, name: '201' },
  { floor: 2, number: 2, name: '202' },
  { floor: 2, number: 3, name: '203' } ]
*/
console.log(sortedRooms)
// false not mutate
console.log(sampleRooms === sortedRooms)
