import * as _ from 'lodash'

const zipped = _.zip([1, 2], ['a', 'b'], [true, false])
console.log(zipped) // [ [ 1, 'a', true ], [ 2, 'b', false ] ]

const unzipped = _.unzip(zipped)
console.log(unzipped) // [ [ 1, 2 ], [ 'a', 'b' ], [ true, false ] ]

const zippedObject = _.zipObject(['a', 'b'], [1, 2])
console.log(zippedObject) // { a: 1, b: 2 }

const zippedObjectDeep = _.zipObjectDeep(['a.b[0].c', 'a.b[1].d'], [1, 2])
console.log(zippedObjectDeep) // { a: { b: [ [Object], [Object] ] } }
console.log((zippedObjectDeep as any).a.b) // [ { c: 1 }, { d: 2 } ]
