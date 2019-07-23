/*
  インデックスシグネチャとは
  プロパティへの添え字アクセスに対する型情報を定義
*/
let obj = {
  toString() {
    return 'hello'
  }
}

let foo: any = {}

// TypeScriptのインデックスシグネチャはstringまたはnumberのいずれかでなければなりません。
// foo[obj] = 'world'
foo[obj.toString()] = 'world'

let foo1: { [index: string]: { message: string } } = {}
foo1['a'] = { message: 'some message' }
// foo1['a'] = { messages: 'some message' }

foo1['a'].message
// foo1['a'].messages

interface Foo {
  x: number
  y: number
}
/** Error */
interface Bar {
  x: number
  y: string // ERROR: Property `y` must be of type number
}

type Index = 'a' | 'b' | 'c'
type FromIndex = { [k in Index]?: number }

const good: FromIndex = { b: 1, c: 2 }
// const bad: FromIndex = { b: 1, c: 2, d: 3 }

type FromSomeIndex<K extends string> = { [key in K]: number }

interface ArrStr {
  [key: string]: string | number
  [index: number]: string
  length: number
}

interface NestedCSS {
  color?: string
  nest?: {
    [selector: string]: string | NestedCSS | undefined
  }
}

const a = [1, 2, [3, 4]]
a.flat()

const example: NestedCSS = {
  color: 'red',
  nest: {
    '.subclass': {
      color: 'blue'
    }
  }
}
