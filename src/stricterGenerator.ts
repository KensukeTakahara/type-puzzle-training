function* test() {
  if (Math.random() < 0.5) yield 100
  return 'Finished!'
}

let iter1 = test()
let curr = iter1.next()
if (curr.done) {
  // const a: string
  const a = curr.value
}

function* bar() {
  let x: { hello(): void } = yield
  x.hello()
}

let iter2 = bar()
iter2.next()
// error
// iter.next(123)
