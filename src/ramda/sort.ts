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
    floor: 3,
    number: 2,
    name: '302'
  },
  {
    floor: 1,
    number: 3,
    name: '103'
  },
  {
    floor: 2,
    number: 1,
    name: '201'
  }
]

const sortedByNumberRooms = R.sort((a: Room, b: Room) => a.number - b.number, sampleRooms)
/*
[ { floor: 2, number: 1, name: '201' },
  { floor: 3, number: 2, name: '302' },
  { floor: 1, number: 3, name: '103' } ]
*/
console.log(sortedByNumberRooms)

const sortedByFloorRooms = R.sortBy(R.prop('floor'))(sampleRooms)
/*
[ { floor: 1, number: 3, name: '103' },
  { floor: 2, number: 1, name: '201' },
  { floor: 3, number: 2, name: '302' } ]
*/
console.log(sortedByFloorRooms)
// false not mutate
console.log(sampleRooms === sortedByFloorRooms)
