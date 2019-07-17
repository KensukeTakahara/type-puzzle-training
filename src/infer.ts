const greet = () => 'Hello'

type Return<T> = T extends (...arg: any[]) => infer U ? U : never
type StringReturn = Return<typeof greet>

type ModType<T> = T extends string ? number : string
type ModReturnType<T> = T extends (...arg: any[]) => infer U ? ModType<U> : never
type NumberReturn = ModReturnType<typeof greet>

type ArrayUnpacked<T> = T extends (infer U)[] ? U : never
type Content = ArrayUnpacked<string[]>
