enum Fruit {
  Apple,
  Orange,
  Lemon
}

const orange = Fruit.Orange
// 1
console.log(orange)

enum Animal {
  cat = 'cat',
  dog = 'dog',
  rat = 'rat'
}
// cat
console.log(Animal.cat)

// 定数列挙型はインライン化される
const enum Book {
  novel,
  dictionary,
  comic
}

enum AnimalFlags {
  None = 0,
  HasClaws = 1 << 0,
  CanFly = 1 << 1
}

const animal = { flags: AnimalFlags.None }
console.log(animal)
animal.flags |= AnimalFlags.HasClaws
console.log(animal)
animal.flags &= ~AnimalFlags.HasClaws
console.log(animal)
animal.flags |= AnimalFlags.HasClaws | AnimalFlags.CanFly
console.log(animal)
