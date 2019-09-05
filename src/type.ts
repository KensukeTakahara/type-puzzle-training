type isPrimitive<T> = T extends string
  ? string
  : T extends number
  ? number
  : T extends boolean
  ? boolean
  : T extends null
  ? null
  : T extends undefined
  ? undefined
  : T extends Function
  ? Function
  : never

type DeepReadonly<T> = {
  readonly [P in keyof T]: T[P] extends isPrimitive<T[P]> ? T[P] : DeepReadonly<T[P]>
}

interface A {
  a: string
  b: {
    c: {
      d: number
    }
  }
  e: {
    f: number[]
  }
}

type B = DeepReadonly<A>

const v: B = {
  a: 'test',
  b: {
    c: {
      d: 3
    }
  },
  e: {
    f: [5, 6, 7]
  }
}

// type test = {
//   readonly d: number;
// }
type test = typeof v.b.c
