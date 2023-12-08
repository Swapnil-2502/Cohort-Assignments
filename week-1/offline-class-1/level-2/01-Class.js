
class Animal {
  constructor(name, legCount) {
    this.name = name
    this.legCount = legCount
  }
  describe() {
    return `${this.name} has ${this.legCount} legs`
  }
}

let dog = new Animal("Matte",4)
console.log(dog.describe())
console.log(dog)

